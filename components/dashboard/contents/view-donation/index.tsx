import DonationTable from "./table";
export default function ViewDonation() {
  return (
    <div className="flex flex-col p-4 px-6 w-full overflow-y-auto">
      <div className="div">
        <div className="w-full py-6 h-auto">
          <DonationTable />
        </div>
      </div>
    </div>
  );
}
