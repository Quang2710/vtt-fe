"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CiCreditCard1 } from "react-icons/ci";
import { FaCcAmex } from "react-icons/fa";
import { useParams } from "next/navigation";

const DonateInformationPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const amount = searchParams.get("amount");
  const tipAmount = searchParams.get("tip") || "12";
  const [customAmount, setCustomAmount] = useState(amount || "");
  const [tip, setTip] = useState(tipAmount);

  const formatNumber = (value: string) => {
    const num = Number(value.replace(/,/g, ""));
    return num ? num.toLocaleString() : "";
  };

  const params = useParams();
  const slug = params?.slug || "";
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-10">
      <p className="text-[16px] text-[#333]">
        Donation to <b>Leticia Briella Magaline</b> through{" "}
        <b>GIVE Healthcare</b>
      </p>
      <p className="text-[16px] text-[#333] mt-[20px] font-bold">
        Donation amount
      </p>
      <div className="mt-6 w-full flex flex-col items-center">
        <div className="w-full text-[#333] rounded-[5px] bg-white border border-[#eee] box-border px-4 py-4 sm:px-[20px] sm:py-[15px] shadow-[inset_0_2px_3px_0_rgba(0,0,0,0.1)] flex flex-col gap-2 justify-center items-center">
          <div className="w-full flex items-center gap-2 justify-center">
            <span className="text-[#333]  text-[24px] font-semibold">S$</span>
            <input
              id="custom-amount"
              type="text"
              min="1"
              placeholder="Custom amount"
              value={formatNumber(customAmount)}
              onChange={(e) => setCustomAmount(e.target.value.replace(/,/g, ""))}
              className="w-full focus:outline-none font-semibold bg-white text appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              style={{ MozAppearance: "textfield" }}
            />
            <span className="text-gray-500 font-semibold">SGD</span>
          </div>
          <div className="w-full text-left text-sm text-gray-500">
            ABOUT đ2,540,000
          </div>
        </div>
      </div>
      <div className="mt-[5px] w-full text-left text-sm text-gray-500 mt-[-7px] mb-[15px] bg-[#f4f4f4] rounded-[12px] px-[20px] py-[15px]">
        <p className="text-[#333] text-[14px] font-bold">
          This changes everything.
        </p>
        <p className="text-[#666] text-[16px] ">
          Thank you for choosing to give with impact. It means so much to us.
        </p>
      </div>
      <p className="text-[16px] text-[#333] mt-[20px] font-bold">
        Support Give.Asia with a tip
      </p>
      <div className="mt-6 w-full flex flex-col items-center">
        <div className="w-full text-[#333] rounded-[5px] bg-white border border-[#eee] box-border px-4 py-4 sm:px-[20px] sm:py-[15px] shadow-[inset_0_2px_3px_0_rgba(0,0,0,0.1)] flex flex-col gap-2 justify-center items-center">
          <div className="w-full flex items-center gap-2 justify-center">
            <span className="text-[#333] text-[24px] font-semibold">S$</span>
            <input
              id="tip-amount"
              type="text"
              min="0"
              placeholder="Tip amount"
              value={formatNumber(tip)}
              readOnly
              className="w-full focus:outline-none font-semibold bg-white text appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              style={{ MozAppearance: "textfield" }}
            />
            <span
              className="text-pink-600 font-bold text-[14px] cursor-pointer"
              onClick={() =>
                router.push(
                  `/detail-blog/${slug}/donate/donate-information/edit-tips?amount=${customAmount}`
                )
              }
            >
              EDIT
            </span>
          </div>
          <div className="w-full text-left text-sm text-gray-500">
            ABOUT đ2,540,000
          </div>
        </div>
      </div>
      <p className="text-[16px] text-[#666] mt-[20px]">
        Give.Asia is{" "}
        <b className="text-pink-600">100% FREE</b> for our
        beneficiaries and fundraisers. We rely on your generosity to keep our
        platform running.
      </p>
      <p className="text-[16px] text-[#333] mt-[20px] font-bold">
        Your full name
      </p>
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full text-[14px] font-normal leading-[20px] rounded-[10px] 
          shadow-[inset_0_2px_3px_0_rgba(0,0,0,0.1)]
          bg-white
          border border-[#eee]
          box-border
          text-[#333]
          block
          outline-none
          px-[15px] py-[10px]
          focus:border-pink-600
        "
      />
      <p className="text-[16px] text-[#333] mt-[20px] font-bold">Your email</p>
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full text-[14px] font-normal leading-[20px] rounded-[10px] 
          shadow-[inset_0_2px_3px_0_rgba(0,0,0,0.1)]
          bg-white
          border border-[#eee]
          box-border
          text-[#333]
          block
          outline-none
          px-[15px] py-[10px]
          focus:border-pink-600
        "
      />
      <p className="text-[14px] text-[#666] mt-[20px]">
        You will receive an email receipt for your donation.
      </p>
      <div className="donate-amount-step__container border-t border-[#eee] mt-[30px]">
        <div className="donate-amount-step__donor-info py-[20px] my-0">
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 accent-pink-600 rounded-[4px] transition duration-200 ease-in-out cursor-pointer border border-[#eee] focus:ring-2 focus:ring-pink-300"
              />
              <span className="text-[16px] text-[#333]">
                Hide name from everyone but fundraiser.
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 accent-pink-600 rounded-[4px] transition duration-200 ease-in-out cursor-pointer border border-[#eee] focus:ring-2 focus:ring-pink-300"
              />
              <span className="text-[16px] text-[#333]">
                Share with my Facebook friends about this campaign.
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <button className="w-full h-10 py-0 cursor-pointer rounded-[10px] bg-pink-600 text-white text-[14px] font-bold transition-all duration-200 hover:bg-pink-700 hover:scale-105 flex items-center justify-center gap-2">
          <CiCreditCard1 className="w-6 h-6" />
          DONATE WITH CREDIT/DEBIT CARD
        </button>
        <button className="w-full h-10 py-0 cursor-pointer rounded-[10px] bg-white text-[#941c80] text-[14px] font-bold border border-[#941c80] transition-all duration-200 hover:bg-[#f8e6f3] hover:scale-105 flex items-center justify-center gap-2">
          <img
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/donate/paynow.webp"
            alt="Paynow"
            className="w-[38px] h-[20px]"
          />
          DONATE WITH PAYNOW
        </button>
        <button className="w-full h-10 py-0 cursor-pointer rounded-[10px] bg-white text-[#006fcf] text-[14px] font-bold border border-[#006fcf] transition-all duration-200 hover:bg-[#e6f3fb] hover:scale-105 flex items-center justify-center gap-2">
          <FaCcAmex className="w-6 h-6" />
          DONATE WITH AMEX
        </button>
      </div>
      <p className="w-full text-[12px] text-[#666] text-center mt-3">
        By proceeding, you agree to Give.Asia's{" "}
        <span className="text-pink-600">terms</span> and{" "}
        <span className="text-pink-600">privacy</span>
      </p>
    </div>
  );
};

export default DonateInformationPage;
