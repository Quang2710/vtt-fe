"use client";
import React from "react";
import { CiCreditCard1 } from "react-icons/ci";


interface LoadingPaymentProps {
  status?: "success" | "fail" | "processing";
  error?: string;
}

const LoadingPayment: React.FC<LoadingPaymentProps> = ({ status = "processing", error }) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center justify-center">
      <CiCreditCard1 className={`w-16 h-16 text-pink-600 mb-6 ${status === "processing" ? "animate-spin" : ""}`} />
      {status === "processing" && (
        <>
          <h2 className="text-[22px] font-bold text-pink-600 mb-2">Processing your payment...</h2>
          <p className="text-[16px] text-[#333] font-bold mb-4 text-center">Please wait for the transaction to complete and do not close this window.</p>
          <p className="text-[14px] text-[#666]">You will receive a confirmation email after the donation goes through</p>
        </>
      )}
      {status === "fail" && (
        <>
          <h2 className="text-[22px] font-bold text-red-600 mb-2">Payment Failed</h2>
          <p className="text-[16px] text-[#333] font-bold mb-4 text-center">{error || "There was a problem processing your payment. Please try again or use another card."}</p>
        </>
      )}
      {status === "success" && (
        <>
          <h2 className="text-[22px] font-bold text-green-600 mb-2">Payment Successful!</h2>
          <p className="text-[16px] text-[#333] font-bold mb-4 text-center">Thank you for your donation. You will receive a confirmation email soon.</p>
        </>
      )}
    </div>
  );
};

export default LoadingPayment;
export { LoadingPayment };

