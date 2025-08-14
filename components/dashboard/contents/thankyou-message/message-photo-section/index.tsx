import { CircularProgress, Textarea } from "@heroui/react";
import { CloudUpload } from "lucide-react";
import { useState } from "react";

export default function MessagePhotoSection() {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLoading(true);

      // Simulate upload delay
      setTimeout(() => {
        const url = URL.createObjectURL(e.target.files![0]);
        setThumbnail(url);
        setLoading(false);
      }, 1000);
    }
  };

  const handleRemove = () => {
    setThumbnail(null);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-gray-800">
          Thank you message and photo
        </h3>
        <p className="text-base text-gray-400">
          If you are unable to upload a video, you can write a thank you message
          with a photo.
        </p>
      </div>

      <div className="flex md:gap-6 flex-col md:flex-row">
        <div className="flex md:flex-row w-full flex-col gap-4 max-w-md relative">
          <label className="flex flex-col w-full items-center justify-center border-2 rounded-2xl aspect-[1.9/1] cursor-pointer border-gray-400 hover:border-gray-900 transition overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center w-full h-full bg-gray-100">
                <CircularProgress color="default" />
              </div>
            ) : thumbnail ? (
              <img
                src={thumbnail}
                alt="Thumbnail"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 text-gray-400">
                <CloudUpload size={40} />
                <p className="text-center text-sm">Upload Photo</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />
          </label>
          {thumbnail && !loading && (
            <button
              type="button"
              onClick={handleRemove}
              className="absolute w-full bottom-0 h-12 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1 rounded-b-2xl text-xs transition"
              style={{ maxWidth: "100%" }}
            >
              REMOVE
            </button>
          )}
        </div>

        <div className="mt-6 w-full md:mt-0">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <Textarea
            isClearable
            variant="bordered"
            placeholder="Thank you for..."
            minRows={10}
            maxRows={10}
          />
        </div>
      </div>
    </div>
  );
}
