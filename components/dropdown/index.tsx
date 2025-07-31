// components/Dropdown.tsx
import { useState } from "react";

interface DropdownProps {
  label: string;
  options: {
    key: string;
    label: string;
  }[];
  onSelect: (value: string) => void;
  selected?: string;
}

const Dropdown = ({ label, options, onSelect, selected }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left w-full max-w-[200px] h-[40px] cursor-pointer">
      <label className="block text-[12px] font-medium text-[#999] mb-1">
        {label}
      </label>
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 flex justify-between items-center whitespace-nowrap cursor-pointer"
      >
        {options.find((opt) => opt.key === selected)?.label || options[0].label}
        <svg
          className="ml-2 h-4 w-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.key}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelect(option.key);
                setOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
