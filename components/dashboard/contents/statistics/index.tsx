import DonationAmountCard from "./donation-amount";

export default function Statistics() {
  return (
    <div className="flex flex-col p-4 px-6 w-full overflow-y-auto">
      <div className=" w-full border-b border-gray-200">
        <h1 className="text-2xl font-light text-gray-400 my-4">Dashboard</h1>
      </div>

      <div className="div">
        <div className="w-full py-6 h-auto">
          <DonationAmountCard />
          {/* Add other cards here */}
        </div>
      </div>
    </div>
  );
}
