import React from "react";
interface PreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const PreviewCard: React.FC<PreviewCardProps> = ({ children, ...props }) => (
  <div
    className="
      shadow-[0_2px_2px_0_rgba(0,0,0,0.14)]
      w-[220px]
      absolute
      bottom-[80px]
      left-1/2
      -translate-x-1/2
      -rotate-2
      bg-white
      text-[#464646]
      text-left

    "
    {...props}
  >
    <div
      className="w-full m-[0.25px] h-[100px] "
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dmajhtvmd/image/upload/w_1200/assets/images/default_banners/default_banner_0.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
    <div className="w-full p-2.5">
      <h3 className="text-medium font-bold">Help someone</h3>
      <p className="text-[8px] h-13 max-h-13 text-gray-600 overflow-hidden">
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".slice(
          0,
          160
        )}
      </p>
      <div className="text-[10px] font-bold">Support us at:</div>
      <div className="text-[8px] font-semibold mb-6 mt-1.5 p-1.5 border-3 border-[#eb008c]">
        <span className="text-[#eb008c]">https://give.asia/s/</span>
      </div>
    </div>
  </div>
);

export default PreviewCard;
