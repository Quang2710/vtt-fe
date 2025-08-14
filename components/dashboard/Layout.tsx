"use client";

import Sidebar from "./sidebar";
import { ReactNode, Dispatch, SetStateAction } from "react";
import Statistics from "./contents/statistics";
import ViewDonation from "./contents/view-donation";
import CampaignEditPage from "./contents/edit";
import ThankYouMessage from "./contents/thankyou-message";
import Share from "./contents/share";
import DocsManager from "./contents/docs";

interface DashboardLayoutProps {
  children?: ReactNode;
  selected: string;
  onSelect: Dispatch<SetStateAction<string>>;
}

export default function DashboardLayout({
  children,
  selected,
  onSelect,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen border-gray-200 border-b flex-col py-10 md:flex-row bg-white text-gray-800">
      <Sidebar selected={selected} onSelect={onSelect} />
      <main className="w-full">
        {selected === "statistics" && <Statistics />}
        {selected === "view-donations" && <ViewDonation />}
        {selected === "edit" && <CampaignEditPage />}
        {selected === "thankyou-message" && <ThankYouMessage />}
        {selected === "share" && <Share />}
        {selected === "docs" && <DocsManager />}
      </main>
    </div>
  );
}
