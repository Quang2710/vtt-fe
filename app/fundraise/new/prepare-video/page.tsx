"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const PrepareVideoPage: React.FC = () => {
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
            Record a simple thank you video for your givers in less than a
            minute.
          </div>

          <div className="w-full self-start transition-all duration-500 text-[14px] leading-[24px] text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]">
            Our donors truly appreciate it when fundraisers take the time to
            thank them for their contributions. When you express your thanks, it
            builds trust and encourages future donations. It's one of the most
            important things you can do for your generous supporters. ❤️
          </div>

          <div className="w-full self-start transition-all duration-500 text-[14px] leading-[24px] text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]">
            <p>
              A simple thank you message means alot to your donors: here are
              some examples:
            </p>
            <div className="thank-video-upload__video-examples w-full flex gap-5 my-5 rounded-[10px] border border-[#e9e9e9] overflow-hidden min-h-[120px] max-h-[350px] pr-5 box-border">
              <div className="img-banner min-w-[100px] min-h-[144px] h-full max-w-[20%] relative">
                <Image
                  src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/fundraise/thank-video-1-preview.png"
                  alt="Thank you video example"
                  fill
                  className="object-cover h-full w-full object-center"
                />
              </div>
              <div className="thank-video-upload__video-examples__descr flex flex-col justify-between items-start pb-5 w-full">
                <p className="text-[14px] text-[#333] w-[70%] my-[14px]">
                  “We are deeply grateful for your donation to help my family.”
                </p>
                <button
                  className="bg-white text-[#EB008C] border border-[#EB008C] p-[10px] rounded-[10px] cursor-pointer hover:bg-[#EB008C] hover:text-white transition-all duration-200 text-[14px] font-semibold"
                  onClick={() => setShowVideo(true)}
                >
                  WATCH NOW
                </button>
              </div>
            </div>
          </div>

          <button
            className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            style={{ height: "38px", paddingTop: 0, paddingBottom: 0 }}
            onClick={() => router.push("/fundraise/new/message-ideas")}
          >
            Prepare for video
          </button>
          <button
            type="button"
            className="w-full text-[#EB008C] text-[14px] font-semibold mt-2 bg-transparent hover:text-[#c90074] transition cursor-pointer mt-[10px]"
            style={{ textDecoration: "none" }}
            onClick={() => router.push("/fundraise/new/message-ideas")}
          >
            SKIP FOR NOW
          </button>

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
        </>
      )}
    </div>
  );
};

export default PrepareVideoPage;
