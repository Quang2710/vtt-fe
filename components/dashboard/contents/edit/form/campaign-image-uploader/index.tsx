import { CloudUpload, Camera, X, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import { CircularProgress } from "@heroui/react"; // Make sure this import is correct for your UI lib

type CampaignImage = { id: number; url: string };

export default function CampaignImageSection() {
  const [images, setImages] = useState<CampaignImage[]>([]);
  const [idCounter, setIdCounter] = useState(1);
  const [uploading, setUploading] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploading(true);
      // Simulate upload delay
      setTimeout(() => {
        const url = URL.createObjectURL(e.target.files![0]);
        setImages((prev) => [...prev, { id: idCounter, url }]);
        setIdCounter((id) => id + 1);
        setUploading(false);
      }, 1200); // Simulate 1.2s upload
    }
  };

  const removeImage = (id: number) =>
    setImages((prev) => prev.filter((img) => img.id !== id));

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newImages = [...images];
    [newImages[index - 1], newImages[index]] = [
      newImages[index],
      newImages[index - 1],
    ];
    setImages(newImages);
  };

  const moveDown = (index: number) => {
    if (index === images.length - 1) return;
    const newImages = [...images];
    [newImages[index], newImages[index + 1]] = [
      newImages[index + 1],
      newImages[index],
    ];
    setImages(newImages);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-sm font-semibold text-gray-700">Campaign images</div>
      <p className="text-sm text-gray-500">
        For best viewing experience, we recommend uploading a high resolution
        landscape photo of at least 1000 pixels in width.
      </p>

      {images.map((img, i) => (
        <div
          key={img.id}
          className="relative rounded-2xl border-gray-400 overflow-hidden border aspect-video"
        >
          <img src={img.url} alt="" className="object-cover w-full h-full" />
          <div className="absolute bottom-0 w-full flex justify-center gap-2 py-2 text-white bg-black/60 text-sm font-bold">
            <button onClick={() => removeImage(img.id)}>REMOVE PHOTO</button>
            {i !== 0 && (
              <button onClick={() => moveUp(i)} className="flex items-center">
                <ArrowUp className="w-4 h-4 mr-1" /> MOVE UP
              </button>
            )}
            {i !== images.length - 1 && (
              <button onClick={() => moveDown(i)} className="flex items-center">
                <ArrowDown className="w-4 h-4 mr-1" /> MOVE DOWN
              </button>
            )}
          </div>
        </div>
      ))}

      <label className="flex p-6 max-h-70 gap-6 flex-row w-full items-center justify-center border-2 rounded-2xl aspect-[1.9/1] cursor-pointer border-gray-400 hover:border-gray-900 transition overflow-hidden">
        {uploading ? (
          <div className="flex w-full h-full items-center justify-center">
            <CircularProgress color="default" />
          </div>
        ) : (
          <>
            <div className="flex w-full flex-col text-center items-center justify-center gap-1">
              <CloudUpload className=" text-gray-400" size={30} />
              <span className="text-sm text-gray-400">
                Upload another photo
              </span>
            </div>
            <div className="h-20 w-[4px] bg-gray-300" />
            <div className="flex w-full items-center text-center justify-center flex-col gap-1">
              <Camera className=" text-gray-400" size={30} />
              <span className="text-sm text-gray-400">Take another photo</span>
            </div>
          </>
        )}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
          disabled={uploading}
        />
      </label>
    </div>
  );
}
