"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/Layout";
import Statistics from "@/components/dashboard/contents/statistics";
import Edit from "@/components/dashboard/contents/edit";

export default function DashboardPage() {
  // Get section from URL or localStorage
  const [section, setSection] = useState("statistics");

  useEffect(() => {
    // Read from URL or localStorage
    const savedSection =
      localStorage.getItem("dashboard-section") || "statistics";
    setSection(savedSection);
  }, []);

  // Save section when it changes
  useEffect(() => {
    localStorage.setItem("dashboard-section", section);
  }, [section]);

  // Render the appropriate component
  const renderContent = () => {
    switch (section) {
      case "edit":
        return <Edit />;
      case "statistics":
      default:
        return <Statistics />;
    }
  };

  return (
    <div className="md:px-[7vw]">
      <DashboardLayout selected={section} onSelect={setSection}>
        {renderContent()}
      </DashboardLayout>
    </div>
  );
}
