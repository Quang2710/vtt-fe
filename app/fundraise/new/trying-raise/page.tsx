"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFundraiseStore } from "@/stores/fundraiseStore";

const TryingRaisePage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showTyping, setShowTyping] = useState(true);
  const router = useRouter();

  const questions = useFundraiseStore((state) => state.questions);
  const setAnswer = useFundraiseStore((state) => state.setAnswer);
  const answers = useFundraiseStore((state) => state.answers);
  const question16 = questions.find((q) => q.id === 16);
  const [tryingMoney, setTryingMoney] = useState(
    typeof answers[16] === "object" && answers[16] !== null && "answer" in answers[16]
      ? answers[16].answer
      : (answers[16] as string) || ""
  );
  useEffect(() => {
    setShowTyping(true);
    const timer = setTimeout(() => {
      setShowTyping(false);
      setVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setAnswer(16, { answer: tryingMoney, fileUrl: "" });
    router.push("/fundraise/new/prepare-video");
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
            {question16?.name || "How much money are you trying to raise?"}
          </div>
          <p className="text-black text-[16px] font-medium mb-2">
            Enter Amount
          </p>
          <div className="relative w-full bg-white">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888] text-[18px] font-semibold select-none">
              S$
            </span>
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-[16px] focus:outline-none focus:ring-0 bg-white"
              placeholder="Enter amount..."
              value={tryingMoney}
              onChange={(e) => setTryingMoney(e.target.value)}
            />
          </div>
          <button
            className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            style={{ height: "38px", paddingTop: 0, paddingBottom: 0 }}
            disabled={!tryingMoney.trim()}
            onClick={handleNext}
          >
            Next
          </button>
          <button
            type="button"
            className="w-full text-[#EB008C] text-[14px] font-semibold mt-2 bg-transparent hover:text-[#c90074] transition cursor-pointer mt-[10px]"
            style={{ textDecoration: "none" }}
            onClick={handleNext}
          >
            I'M NOT SURE
          </button>
        </>
      )}
    </div>
  );
};

export default TryingRaisePage;
