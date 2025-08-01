"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DIAGNOSIS_OPTIONS = [
  { value: "this_week", label: "This week" },
  { value: "this_month", label: "This month" },
  { value: "last_month", label: "Last month" },
  { value: "last_6_months", label: "Last 6 months" },
  { value: "this_year", label: "This year" },
  { value: "last_year", label: "Last year" },
];

const DiagnosisSelect: React.FC<{
  value: string;
  onChange: (val: string) => void;
}> = ({ value, onChange }) => (
  <select
    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[16px] focus:outline-none focus:ring-0 bg-white mb-3"
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    <option value="">Select diagnosis time...</option>
    {DIAGNOSIS_OPTIONS.map(option => (
      <option value={option.value} key={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const DiagnosisPage: React.FC = () => {
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
          <div className="w-full self-start transition-all duration-500 text-[18px] leading-[24px] font-semibold text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]">
            When did the beneficiary get the diagnosis?
          </div>
          <DiagnosisSelect value={illness} onChange={setIllness} />
          <button
            className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold py-3 rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-3"
            disabled={!illness.trim()}
            onClick={() => router.push("/fundraise/new/accident-occur")}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default DiagnosisPage;