import { ArrowLeft } from "lucide-react";

export default function Sidebar({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (val: string) => void;
}) {
  return (
    <aside className="w-full md:w-64 border-b md:border-r border-gray-200 p-4 pb-6 space-y-6">
      <div className="flex items-center justify-between py-2 pb-6 border-b border-gray-200">
        <button className="text-gray-600 items-center flex flex-row gap-1 hover:text-black cursor-pointer text-md">
          <ArrowLeft size={16} /> <p>Back to campaign</p>
        </button>
      </div>
      <nav className="space-y-4">
        {/* Campaign Overview Section */}
        <div className="flex flex-col border-b pb-8 border-gray-200 gap-4">
          <h4 className="pl-2 font-semibold text-md text-gray-400">
            Campaign Analytics
          </h4>
          <ul className="space-y-1 flex flex-col gap-4 pl-2">
            <li
              className={`font-semibold cursor-pointer ${
                selected === "statistics"
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
              onClick={() => onSelect("statistics")}
            >
              Statistics
            </li>
            <li
              className={`cursor-pointer ${
                selected === "view-donations"
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
              onClick={() => onSelect("view-donations")}
            >
              View donations
            </li>
          </ul>
        </div>

        {/* Campaign Management Section */}
        <div className=" flex flex-col border-gray-200 gap-4 pt-4">
          <h4 className="text-md space-y-1 pl-2 font-semibold text-gray-400">
            Campaign Management
          </h4>
          <ul className=" flex flex-col gap-4 space-y-1 pl-2">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Edit
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Thank you message
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Share
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Docs
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
