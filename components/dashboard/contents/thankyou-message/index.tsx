import { Divider } from "@heroui/react";
import VideoSection from "./video-section";
import MessagePhotoSection from "./message-photo-section";
import PinkButtonWidth from "@/components/layout/button/w-limit";

export default function ThankYouMessage() {
  return (
    <div className="space-y-2 flex flex-col p-4 px-6 w-full overflow-y-auto">
      <div className="space-y-2">
        <h2 className="text-2xl font-normal text-gray-500">
          Thank you message
        </h2>
        <p className="text-sm text-gray-500">
          Appreciating your donors is a critical component of a successful
          fundraising campaign
        </p>
        <Divider className="my-4 mt-6" />
      </div>

      <VideoSection />
      <Divider className="my-4" />
      <MessagePhotoSection />
      <div className="flex mt-10 justify-end ">
        <PinkButtonWidth>SAVE</PinkButtonWidth>
      </div>
    </div>
  );
}
