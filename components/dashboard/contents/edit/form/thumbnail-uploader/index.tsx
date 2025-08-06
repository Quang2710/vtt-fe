import { CircularProgress } from "@heroui/react";
import { CloudUpload } from "lucide-react";
import { useState } from "react";

export default function ThumbnailUploader() {
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
    <div className="flex flex-col gap-1 w-full">
      <div className="text-sm font-semibold text-gray-600">Thumbnail Image</div>
      <div className="flex md:flex-row  w-full flex-col gap-4 ">
        <div className="flex md:flex-row w-full flex-col gap-4 relative max-w-md">
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
                <p className="text-sm text-center text-gray-400">
                  Recommended Size: 1200 x 630 pixels
                </p>
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
              className="absolute w-full bottom-0 h-12 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1 rounded text-xs transition"
              style={{ maxWidth: "100%" }}
            >
              REMOVE
            </button>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full">
          {" "}
          <p className="text-sm leading-relaxed text-gray-600">
            <span className="font-bold text-gray-800">
              A compelling thumbnail is critical to your page’s success.
            </span>{" "}
            Just like YouTube, a good thumbnail determines if a potential donor
            will click to see your page. Upload a photo that best represents
            your cause and is clickworthy.
          </p>
          <div className="rounded-lg leading-relaxed bg-gray-100 p-3 text-sm text-gray-500">
            <span className="font-semibold  text-gray-600">
              What happens if a thumbnail is not uploaded?
            </span>{" "}
            We will use the first photo in your image gallery.
          </div>
        </div>
      </div>
    </div>
  );
}
