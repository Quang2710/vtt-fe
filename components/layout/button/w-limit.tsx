import React from "react";

interface PinkButtonWidthProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PinkButtonWidth: React.FC<PinkButtonWidthProps> = ({
  children,
  ...props
}) => (
  <button
    className="
      inline-block cursor-pointer box-border overflow-hidden relative
      transition-all duration-100 ease-in select-none border-0 rounded-xl
      text-center text-white font-['Lexend_Deca'] text-sm font-bold
      bg-[#eb008c] p-2.5 m-0 no-underline shadow
      hover:shadow-[0_10px_10px_0_rgba(0,0,0,0.15)]
      hover:-translate-y-0.5 px-6
    "
    {...props}
  >
    {children}
  </button>
);

export default PinkButtonWidth;
