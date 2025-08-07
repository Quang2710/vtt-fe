import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { NumberInput, Input, Textarea } from "@heroui/react";
import PinkButton from "@/components/layout/button";
import { X } from "lucide-react";

interface WithdrawalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WithdrawalModal: React.FC<WithdrawalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [reason, setReason] = useState("");
  const [bill, setBill] = useState<File | null>(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleBillUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBill(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Handle submit logic here
    onClose();
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-white rounded-xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="flex justify-end">
          {" "}
          <button
            onClick={onClose}
            className="cursor-pointer top-4 left-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Header */}
        <div className="items-center justify-center flex w-full mb-6">
          <p className="text-2xl font-bold">Disbursement request form</p>
        </div>

        {/* Body */}
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Amount <span className="text-red-500">*</span>
            </label>
            <NumberInput
              variant="bordered"
              placeholder="Enter amount"
              value={amount}
              onValueChange={setAmount}
              isRequired
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Reason for request
            </label>
            <Textarea
              variant="bordered"
              minRows={5}
              placeholder="Enter text..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Bill
            </label>
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleBillUpload}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-pink-50 file:text-pink-700
                hover:file:bg-pink-100 cursor-pointer"
            />
            {bill && (
              <span className="block mt-1 text-xs text-gray-500">
                {bill.name}
              </span>
            )}
          </div>
          <div className="w-full gap-2 flex flex-col md:flex-row">
            <div className="w-full">
              <label className="block  mb-1 text-sm font-semibold text-gray-600">
                Bank account number <span className="text-red-500">*</span>
              </label>
              <Input
                variant="bordered"
                placeholder="Enter bank account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                isRequired
              />
            </div>
            <div className="w-full">
              <label className="block mb-1 text-sm font-semibold text-gray-600">
                Account holder name <span className="text-red-500">*</span>
              </label>
              <Input
                variant="bordered"
                placeholder="Enter account holder name"
                value={accountHolder}
                onChange={(e) => setAccountHolder(e.target.value)}
                isRequired
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-9">
          <PinkButton onClick={handleSubmit}>Submit</PinkButton>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default WithdrawalModal;
