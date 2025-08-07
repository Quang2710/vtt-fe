"use client";

import Sidebar from "./sidebar";
import { ReactNode, use, useState } from "react";
import DonationAmountCard from "./contents/statistics/donation-amount";
import Statistics from "./contents/statistics";
import ViewDonation from "./contents/view-donation";
import CampaignEditPage from "./contents/edit";
import ThankYouMessage from "./contents/thankyou-message";
import Share from "./contents/share";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState("statistics");
  return (
    <div className="flex min-h-screen border-gray-200 border-b flex-col py-10 md:flex-row bg-white text-gray-800">
      <Sidebar selected={selected} onSelect={setSelected} />
      <main className="w-full">
        {selected === "statistics" && <Statistics />}
        {selected === "view-donations" && <ViewDonation />}
        {selected === "edit" && <CampaignEditPage />}
        {selected === "thankyou-message" && <ThankYouMessage />}
        {selected === "share" && <Share />}
      </main>
    </div>
  );
}
