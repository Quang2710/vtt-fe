"use client";
import { useFundraiseStore } from "@/stores/fundraiseStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AccidentPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showTyping, setShowTyping] = useState(true);
  const answers = useFundraiseStore((state) => state.answers);
  const [accident, setAccident] = useState(
    typeof answers[10] === "object" && answers[10] !== null && "answer" in answers[10]
      ? answers[10].answer
      : (answers[10] as string) || ""
  );
  const router = useRouter();

  const questions = useFundraiseStore((state) => state.questions);
  const setAnswer = useFundraiseStore((state) => state.setAnswer);
  const question10 = questions.find(q => q.id === 10);

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
          <div className="w-full self-start transition-all duration-500 text-[18px] leading-[24px] font-semibold text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]">
            {question10?.name || "What is your accident?"}
          </div>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[16px] focus:outline-none focus:ring-0 bg-white"
            placeholder="Enter accident..."
            value={accident}
            onChange={e => setAccident(e.target.value)}
          />
          <button
            className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold py-3 rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-3"
            disabled={!accident.trim()}
            onClick={() => {
              setAnswer(10, { answer: accident, fileUrl: "" });
              router.push("/fundraise/new/diagnosis");
            }}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default AccidentPage;