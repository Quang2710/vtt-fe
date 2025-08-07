import React, { useState } from "react";
import CampaignEditForm from "./form";
import WithdrawalModal from "./form/withdrawal-modal";

export default function CampaignEditPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="w-full mx-auto p-6">
      <CampaignEditForm setIsModalOpen={setIsModalOpen} />
      <WithdrawalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
