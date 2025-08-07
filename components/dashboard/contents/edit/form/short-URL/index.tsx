import { Button, Badge } from "@heroui/react";

export default function ShortUrlSection() {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-gray-700">Short URL</h4>
      <div className="flex items-center gap-2 relative text-sm font-bold leading-6 bg-gray-100 rounded-2xl text-gray-500 py-1.5 pl-2.5 text-left mt-2.5 overflow-hidden">
        <span>https://give.asia/</span>
        <input
          type="text"
          className="text-sm font-bold leading-6 bg-white border-0 rounded-2xl text-gray-400 ml-0.5 mr-1 pl-2.5 pr-[100px] w-full appearance-none focus:outline-none"
        />
        <button className="text-sm font-bold leading-6 text-[#eb008c] bg-transparent border-0 whitespace-nowrap absolute right-2.5 cursor-pointer">
          COPY URL
        </button>
      </div>

      <p className="text-sm font-medium text-gray-400">
        Short URL is a shorter and customizable version of full campaign URL,
        making it easier to type or share. Please reach out to our team if you
        would like to make change to full URL.
      </p>
    </div>
  );
}
