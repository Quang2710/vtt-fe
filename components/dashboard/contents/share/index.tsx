import PinkButton from "@/components/layout/button";
import PreviewCard from "./card";
import { Textarea } from "@heroui/react";
import { useState } from "react";
import PinkButtonWidth from "@/components/layout/button/w-limit";

export default function Share() {
  const [summary, setSummary] = useState("");
  return (
    <div className="flex flex-col p-4 px-6 w-full overflow-y-auto">
      <div className=" w-full border-b border-gray-200">
        <h1 className="text-2xl font-light text-gray-400 my-4">Share</h1>
      </div>

      <div className="div">
        <div className="w-full py-6 gap-6 flex flex-col md:flex-row h-auto">
          <div className="flex flex-col min-w-80 w-full md:w-1/3 gap-6">
            <div className="bg-[#b4b4b4] rounded-xl text-center relative h-[410px]">
              {/* Card 1 */}
              <PreviewCard
                style={{
                  transform: "rotate(6deg)",
                  left: "calc(50% + 20px)",
                  zIndex: 30,
                }}
              />
              {/* Card 2 */}
              <PreviewCard
                style={{
                  transform: "rotate(3deg)",
                  left: "calc(50% + 10px)",
                  zIndex: 40,
                }}
              />
              {/* Card 3 */}
              <PreviewCard
                style={{
                  transform: "rotate(-1deg)",
                  zIndex: 50,
                }}
              />
              {/* Hand */}
              <img
                src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/donate/thankyou-hand.png"
                className="absolute"
                style={{
                  width: "160px",
                  bottom: 0,
                  zIndex: 60,
                  left: "calc(50% - 75px)",
                }}
              />
            </div>
            <PinkButton>DOWNLOAD FLYER PDF</PinkButton>
          </div>
          <div className="flex flex-col w-full md:w-2/3 ">
            <div className="text-sm mb-2 font-bold text-gray-400">
              Flyer campaign summary
            </div>
            <Textarea
              variant="bordered"
              minRows={10}
              value={summary}
              onChange={(e) => {
                const value = e.target.value;
                setSummary(value.slice(0, 360));
              }}
            />
            <div className="w-full mt-2 flex justify-end">
              <p className="text-sm mb-2 font-semibold text-gray-400">
                Max 360 characters
              </p>
            </div>
            <div className="flex mt-4 justify-end">
              <PinkButtonWidth>Update summary</PinkButtonWidth>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
