"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFundraiseStore } from "@/stores/fundraiseStore";
import { fetcher } from "@/libs/fetcher";
import { a } from "framer-motion/client";

const SubmitCampaignPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showTyping, setShowTyping] = useState(true);
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const questions = useFundraiseStore((state) => state.questions);
  const setAnswer = useFundraiseStore((state) => state.setAnswer);
  const answers = useFundraiseStore((state) => state.answers);
  const question22 = questions.find((q) => q.id === 22);

  useEffect(() => {
    setShowTyping(true);
    const timer = setTimeout(() => {
      setShowTyping(false);
      setVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    setAnswer(22, { answer: shortUrl, fileUrl: "" });

    const updatedAnswers = { ...answers, 22: { answer: shortUrl, fileUrl: "" } };
    const answerArr = Object.entries(updatedAnswers).map(([questionId, value]) => {
      if (typeof value === "object" && value !== null && "fileUrl" in value) {
        return {
          questionId: Number(questionId),
          answer: value.answer,
          fileUrl: value.fileUrl,
        };
      }
      return {
        questionId: Number(questionId),
        answer: value,
        fileUrl: "",
      };
    });

    let token: string | undefined = undefined;
    if (typeof document !== "undefined") {
      const match = document.cookie.match(/(^| )token=([^;]+)/);
      token = match ? match[2] : undefined;
    }

    try {
      await fetcher("/fundraiser/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: answerArr }),
      });
      if (typeof window !== "undefined") {
        localStorage.removeItem("fundraiseAnswers");
      }
      router.push("/fundraise/new/thanks-sharing");
    } catch (err: any) {
      setError(err?.message || "Submit failed!");
    }
  };

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
          <div className="w-full self-start transition-all duration-500 text-[18px] leading-[24px] font-semibold text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]">
            Awesome! 🎉You're almost ready to start fundraising.
          </div>
          <div className="w-full self-start transition-all duration-500 text-[16px] leading-[24px] text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]">
            {question22?.name ||
              "This is your short campaign URL. You can customize your short URL for easy sharing. Ideally, the short URL should contains fewer than 10 letters."}
          </div>

          <p className="text-[#999] text-[16px] font-medium">Campaign page URL</p>
          <div className="flex items-center box-border bg-[#f4f4f4] rounded-[12px] text-[14px] font-normal text-[#666] mt-[10px] overflow-hidden w-full" style={{ padding: '2px 2px 2px 10px', lineHeight: '30px' }}>
            <span className="text-[#666] text-[16px] font-bold mr-1">/</span>
            <input
              type="text"
              className="bg-transparent border-none outline-none w-full text-[14px] font-normal text-[#666]"
              style={{ lineHeight: '30px', padding: 0, margin: 0 }}
              placeholder="Enter short URL..."
              value={shortUrl}
              onChange={e => setShortUrl(e.target.value)}
            />
          </div>
          <button
            className="cursor-pointer w-full bg-[#EB008C] text-white text-[14px] font-semibold rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-3 h-10"
            onClick={handleSubmit}
            disabled={!shortUrl.trim()}
          >
            SUBMIT YOUR CAMPAIGN
          </button>
        </>
      )}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white rounded-xl shadow-lg p-6 min-w-[300px] flex flex-col items-center">
            <div className="text-pink-600 font-semibold text-lg mb-2">Error</div>
            <div className="text-[#333] mb-4">{error}</div>
            <button
              className="px-4 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 cursor-pointer"
              onClick={() => setError(null)}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitCampaignPage;