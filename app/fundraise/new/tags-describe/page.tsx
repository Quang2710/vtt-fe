"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TAG_OPTIONS = [
  { value: "singapore", label: "Singapore" },
  { value: "animal", label: "Animal" },
  { value: "medical", label: "Medical" },
];

type TagsSelectProps = {
  value: string[];
  onChange: (val: string[]) => void;
};

const TagsSelect: React.FC<TagsSelectProps> = ({ value, onChange }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    if (!selected) return;
    if (value.includes(selected)) return;
    if (value.length >= 3) return;
    onChange([...value, selected]);
  };

  const handleRemove = (tag: string) => {
    onChange(value.filter(v => v !== tag));
  };

  return (
    <div className="mb-3">
      <div className="flex gap-2 mb-2 flex-wrap">
        {value.map(tag => {
          const label = TAG_OPTIONS.find(opt => opt.value === tag)?.label || tag;
          return (
            <span key={tag} className="inline-flex items-center bg-[#EB008C] text-white text-[14px] font-semibold px-3 py-1 rounded-full">
              {label}
              <button
                type="button"
                className="ml-2 text-white bg-transparent hover:text-[#c90074] text-[16px] font-bold focus:outline-none"
                onClick={() => handleRemove(tag)}
                aria-label={`Remove ${label}`}
              >
                ×
              </button>
            </span>
          );
        })}
      </div>
      <select
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[16px] focus:outline-none focus:ring-0 bg-white"
        value=""
        onChange={handleSelect}
        disabled={value.length >= 3}
      >
        <option value="">Select tag...</option>
        {TAG_OPTIONS.filter(opt => !value.includes(opt.value)).map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {value.length >= 3 && (
        <div className="text-[#EB008C] text-[13px] mt-1">You can select up to 3 tags only.</div>
      )}
    </div>
  );
};

const TagDescribePage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showTyping, setShowTyping] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
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
          <div className="w-full self-start transition-all duration-500 text-[16px] leading-[24px] text-[#333] bg-white border border-[#eee] rounded-[12px] shadow-[0_20px_30px_0_rgba(0,0,0,0.05)] py-[15px] px-[25px] mb-[10px]">
            To help givers discover your campaign, you can add up to 3 tags that best describe your campaign.
          </div>
          <TagsSelect value={selectedTags} onChange={setSelectedTags} />
          <button
            className="cursor-pointer w-full bg-[#EB008C] text-white text-[18px] font-semibold py-3 rounded-lg shadow hover:bg-[#c90074] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-3"
            disabled={selectedTags.length === 0}
            onClick={() => router.push("/fundraise/new/submit-campaign")}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default TagDescribePage;