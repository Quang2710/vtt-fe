import PinkButton from "@/components/layout/button";
import PinkButtonWidth from "@/components/layout/button/w-limit";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);
  const router = useRouter();

  const handleRecordVideo = () => {
    router.push("/dashboard/record-thank-video");
  };

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-gray-500">
          Thank you video
        </h3>
        <p className="text-md text-gray-400">
          We strongly encourage recording a video as your thank you message. A
          simple thank you video leads to higher engagement, which means
          increased visibility and donations. It also builds a stronger
          connection and trust with your donors which will encourage repeat
          donations. It’s one of the most important things you can do for your
          generous supporters. ❤️
        </p>
      </div>

      <p className="text-sm text-gray-800">Here are some examples:</p>

      <div className=" w-full flex gap-5 my-5 rounded-[10px] border border-[#e9e9e9] overflow-hidden pr-5 box-border">
        <div className="min-w-[85px] md:min-w-60 md:min-h-90 max-w-[20%] relative">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/fundraise/thank-video-1-preview.png"
            alt="Thank you video example"
            fill
            className="object-cover  w-full object-center"
          />
        </div>
        <div className=" flex flex-col justify-between items-start pb-5 w-full">
          <p className="text-sm text-[#333] w-[95%] my-4">
            “We are deeply grateful for your donation to help my family.”
          </p>
          <button
            className="bg-white text-[#EB008C] border border-[#EB008C] p-[10px] rounded-[10px] cursor-pointer hover:bg-[#EB008C] hover:text-white transition-all duration-200 text-[14px] font-semibold"
            onClick={() => setShowVideo(true)}
          >
            WATCH
          </button>
        </div>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full relative flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-[#EB008C] text-xl font-bold cursor-pointer"
              onClick={() => setShowVideo(false)}
              aria-label="Close"
            >
              ×
            </button>
            <video
              src="https://res.cloudinary.com/dmajhtvmd/video/upload/v1722251206/assets/images/fundraise/thankyou_01.webm"
              controls
              autoPlay
              className="w-full h-[300px] rounded"
            />
          </div>
        </div>
      )}

      <div className="flex justify-end items-end">
        <PinkButtonWidth onClick={handleRecordVideo}>
          RECORD VIDEO
        </PinkButtonWidth>
      </div>
    </div>
  );
}
