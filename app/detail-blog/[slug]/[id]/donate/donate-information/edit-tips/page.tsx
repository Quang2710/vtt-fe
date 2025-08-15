"use client";

import { useRouter, useSearchParams, useParams } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const EditTipsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const slug = params?.slug || "";
  const customAmount = searchParams.get("amount") || "125";
  const [customTip, setCustomTip] = useState("");

  const handleTipSelect = (tip: any) => {
    router.push(
      `/detail-blog/${slug}/${params.id}/donate/donate-information?amount=${customAmount}&tip=${tip}`
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-10">
      <p className="text-[16px] text-[#333] mt-[20px] font-bold">
        Edit Donation Tips
      </p>
      <p className="text-[14px] text-[#666] mt-[6px]">
        Give.Asia is{" "}
        <b className="text-pink-600">100% FREE</b> for our beneficiaries and
        fundraisers. Please consider giving us a small tip to keep Give.Asia
        running. Every bit helps!
      </p>
      <div className="donate-edit-option__package grid grid-cols-2 grid-rows-2 gap-4 mb-6">
        {[9, 12, 14, 27].map((amount) => (
          <div
            key={amount}
            className="relative p-4 bg-white rounded-[12px] shadow border border-gray-200 flex flex-col gap-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ willChange: "transform, box-shadow, background" }}
            onClick={() => handleTipSelect(amount)}
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold text-black">S${amount}</p>
              <p className="text-[16px] text-gray-500 font-bold">SGD</p>
            </div>
            <p className="text-xs text-gray-500">ABOUT ₫2,540,600</p>
          </div>
        ))}
      </div>
      <div className="mt-6 w-full flex flex-col items-center">
        <div className="w-full text-[#333] rounded-[5px] bg-white border border-[#eee] box-border px-4 py-4 sm:px-[20px] sm:py-[15px] shadow-[inset_0_2px_3px_0_rgba(0,0,0,0.1)] flex flex-col gap-1 items-center justify-center">
          <div className="w-full flex items-center gap-2 justify-center">
            <span className="text-[#333] text-[24px] font-semibold">S$</span>
            <input
              id="custom-tip"
              type="text"
              value={customTip ? Number(customTip).toLocaleString() : ""}
              onChange={(e) => setCustomTip(e.target.value.replace(/,/g, ""))}
              className="w-full focus:outline-none font-semibold bg-white text appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              style={{ MozAppearance: "textfield" }}
            />
            <span className="text-gray-500 font-semibold">SGD</span>
          </div>
          {customTip && Number(customTip) > 0 && (
            <div className="w-full text-left text-[14px] text-[#999]">
              ABOUT đ{(Number(customTip) * 18500).toLocaleString()}
            </div>
          )}
        </div>
        {customTip !== "" && !isNaN(Number(customTip)) && (
          <button
            className="cursor-pointer mt-4 w-full bg-pink-600 text-[14px] text-white font-semibold py-2 rounded-[10px] shadow transition-all duration-200 hover:bg-pink-600 hover:scale-105 hover:shadow-lg"
            onClick={() => {
              if (slug && customTip !== "" && !isNaN(Number(customTip))) {
                router.push(
                  `/detail-blog/${slug}/${params.id}/donate/donate-information?amount=${customAmount}&tip=${customTip}`
                );
              }
            }}
          >
            CONTINUE
          </button>
        )}
      </div>
      <p className="text-[14px] text-black mt-2">
        "8 out of 10 givers support us a little!"
      </p>
    </div>
  );
};

export default EditTipsPage;
