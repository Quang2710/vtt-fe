"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";



const ThankSharingPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showTyping, setShowTyping] = useState(true);
  const [illness, setIllness] = useState("");
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
          <div className="w-full self-start transition-all duration-500 text-[18px] leading-[24px] font-semibold text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[30px] px-[25px] mb-[10px]">
           Thanks for sharing your story!
          </div>
          <div className="flex flex-col gap-3 w-full self-start transition-all duration-500 text-[14px] leading-[24px] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]">
           <p className="text-[red] font-semibold">We need more documents in order to verify your fundraising campaign.</p>
           <p>Please check your email for detailed instructions on how to upload the documents for verification.</p>
           <p>(Kindly check your spam of junk mail folder if our email does not arrive in your inbox.)</p>
          </div>
          <button
            className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold py-3 rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-3"
            onClick={() => router.push("/#")}
          >
           GO TO CAMPAIGN
          </button>
        </>
      )}
    </div>
  );
};

export default ThankSharingPage;