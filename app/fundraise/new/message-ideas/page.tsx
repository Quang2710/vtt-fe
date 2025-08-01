"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const MessageIdeasPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showTyping, setShowTyping] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowTyping(true);
    const timer = setTimeout(() => {
      setShowTyping(false);
      setVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="create-container h-[100vh] flex flex-col max-w-2xl mx-auto mt-[30px] mb-[60px] my-[20%] p-[40px]">
      <p className="text-[#999] text-[16px] font-medium">Rosie @ Give.Asia</p>
      {showTyping && (
        <div className="rounded-2xl px-5 py-3 shadow-md bg-[#f4f4f4] text-[17px] text-black w-fit self-start animate-pulse mb-3">
          <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full mr-1 align-middle animate-bounce"></span>
          <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full mr-1 align-middle animate-bounce delay-150"></span>
          <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full align-middle animate-bounce delay-300"></span>
        </div>
      )}
      {visible && (
        <>
          <div className="w-full self-start transition-all duration-500 text-[14px] leading-[24px] font-semibold text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]">
            Here are some tips and message ideas
          </div>

          <div className="w-full self-start transition-all duration-500 text-[14px] leading-[24px] text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[24px]">
            Some tips for recording:
            <ol className="list-decimal list-inside ml-4 mt-2">
              <li>Find a quiet place that does not have too many people</li>
              <li>Use your front camera of your phone or laptop</li>
              <li>
                Make sure the fundraiser or beneficiary can be seen clearly in
                the video
              </li>
            </ol>
          </div>

          <div className="w-full self-start transition-all duration-500 text-[14px] leading-[24px] text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]">
            <p className="mb-2">Message ideas:</p>
            <ol className="list-decimal list-inside ml-4">
              <li>
                "Thank you for your generous donations; your support means the
                world to my family."
              </li>
              <li>
                "I am overwhelmed with gratitude for your generous donations.
                Your support gives my son hope."
              </li>
              <li>
                “Your recent donations are vital to our ongoing efforts to
                support our family member, and we truly appreciate your
                continued support.”
              </li>
            </ol>
          </div>

          <button
            className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            style={{ height: "38px", paddingTop: 0, paddingBottom: 0 }}
            onClick={() => router.push("/fundraise/new/recording-video")}
          >
            READY
          </button>
        </>
      )}
    </div>
  );
};

export default MessageIdeasPage;
