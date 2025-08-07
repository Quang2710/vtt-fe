import { Input } from "@heroui/react";
import DonationTable from "./table";
import { Search } from "lucide-react";
export default function ViewDonation() {
  return (
    <div className="flex flex-col p-4 px-6 w-full overflow-y-auto">
      <div className="div">
        <div className="w-full flex flex-col gap-8 py-6 h-auto">
          <Input
            size="md"
            radius="none"
            variant="bordered"
            startContent={<Search size={20} />}
            className="md:max-w-1/3"
            placeholder="Search by name or email"
          />
          <DonationTable />
        </div>
      </div>
    </div>
  );
}
