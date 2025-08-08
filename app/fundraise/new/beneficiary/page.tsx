"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFundraiseStore } from "@/stores/fundraiseStore";
import { useFundraiseStepGuard } from "@/hooks/useFundraiseStepGuard";

const countries = [
  "Vietnam",
  "Singapore",
  "Thailand",
  "Malaysia",
  "Indonesia",
  "Philippines",
  "India",
  "Japan",
  "South Korea",
  "Australia"
];

const BeneficiaryPage: React.FC = () => {
  const isGuardChecked = useFundraiseStepGuard(2, "/fundraise/new");

  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(true);
  const [animatingIdx, setAnimatingIdx] = useState(-1);

  const answers = useFundraiseStore((state) => state.answers);
  const setAnswer = useFundraiseStore((state) => state.setAnswer);
  const questions = useFundraiseStore((state) => state.questions);

  const [name, setName] = useState(
    typeof answers[3] === "object" && answers[3] !== null && "answer" in answers[3]
      ? answers[3].answer
      : (answers[3] as string) || ""
  );

  const [country, setCountry] = useState(
    typeof answers[4] === "object" && answers[4] !== null && "answer" in answers[4]
      ? answers[4].answer
      : (answers[4] as string) || "Singapore"
  );

  const question3 = questions.find(q => q.id === 3);
  const question4 = questions.find(q => q.id === 4);

  useEffect(() => {
    if (visibleCount < 3) {
      setShowTyping(true);
      const typingTimer = setTimeout(() => {
        setShowTyping(false);
        setAnimatingIdx(visibleCount);
        const msgTimer = setTimeout(() => {
          setVisibleCount((c) => c + 1);
          setAnimatingIdx(-1);
        }, 180);
        return () => clearTimeout(msgTimer);
      }, 350);
      return () => clearTimeout(typingTimer);
    }
  }, [visibleCount]);

  useEffect(() => {
    if (name && (typeof answers[3] !== "object" || answers[3]?.answer !== name)) {
      setAnswer(3, { answer: name, fileUrl: "" });
    }
  }, [name, setAnswer]);

  useEffect(() => {
    if (country && (typeof answers[4] !== "object" || answers[4]?.answer !== country)) {
      setAnswer(4, { answer: country, fileUrl: "" });
    }
  }, [country, setAnswer]);

  if (!isGuardChecked) return null;

  return (
    <div className="create-container h-[100vh] flex flex-col max-w-3xl mx-auto mt-[30px] mb-[60px] my-[20%] p-[40px]">
      <p className="text-[#999] text-[16px] font-medium">Rosie @ Give.Asia</p>
      {visibleCount > 0 && (
        <div
          className={[
            "w-full self-start transition-all duration-500",
            animatingIdx === 0
              ? "opacity-0 translate-y-4 scale-95"
              : "opacity-100 translate-y-0 scale-100",
            "text-[18px] leading-[24px] font-semibold text-[#333] bg-white",
            "border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]"
          ].join(" ")}
        >
          We’ll need some information about the beneficiary to proceed.
        </div>
      )}
      {visibleCount > 1 && (
        <div className="mb-[10px]">
          <label className="block text-[16px] font-medium mb-2">
            {question3?.name || "What is the name of the beneficiary?"}
          </label>
          <div
            className={[
              "w-full self-start transition-all duration-500",
              animatingIdx === 1
                ? "opacity-0 translate-y-4 scale-95"
                : "opacity-100 translate-y-0 scale-100",
              "bg-white border border-[#eee] rounded-[12px] shadow-[0_8px_16px_0_rgba(0,0,0,0.04)] py-[10px] px-[18px] min-h-[42px]"
            ].join(" ")}
          >
            <input
              type="text"
              className="w-full bg-white border-none outline-none text-[16px] placeholder:text-[#bbb] rounded-[8px] px-1 h-[42px]"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter beneficiary name"
            />
          </div>
        </div>
      )}
      {visibleCount > 2 && (
        <div className="mb-[10px]">
          <label className="block text-[16px] font-medium mb-2">
            {question4?.name || "Which country is the beneficiary receiving treatment?"}
          </label>
          <div
            className={[
              "w-full self-start transition-all duration-500",
              animatingIdx === 2
                ? "opacity-0 translate-y-4 scale-95"
                : "opacity-100 translate-y-0 scale-100",
              "bg-white border border-[#eee] rounded-[12px] shadow-[0_8px_16px_0_rgba(0,0,0,0.04)] py-[10px] px-[18px]"
            ].join(" ")}
          >
            <select
              className="cursor-pointer w-full bg-white border-none outline-none text-[16px] rounded-[8px] px-1 h-[42px]"
              value={country}
              onChange={e => setCountry(e.target.value)}
            >
              <option value="">Select country</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      )}
      {visibleCount < 3 && showTyping && (
        <div
          className="rounded-2xl px-5 py-3 shadow-md bg-[#f4f4f4] text-[17px] text-black w-fit self-start animate-pulse"
        >
          <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full mr-1 align-middle animate-bounce"></span>
          <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full mr-1 align-middle animate-bounce delay-150"></span>
          <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full align-middle animate-bounce delay-300"></span>
        </div>
      )}
      {visibleCount === 3 && (
        <button
          className="cursor-pointer mt-6 w-full bg-[#EB008C] text-white text-[18px] font-semibold py-3 rounded-[8px] shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!name.trim()}
          onClick={() => router.push("/fundraise/new/relations-step")}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default BeneficiaryPage;
