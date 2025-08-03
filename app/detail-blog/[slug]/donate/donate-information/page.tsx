'use client';
import React from "react";
import { useSearchParams } from "next/navigation";

const DonateInformationPage = () => {
    const searchParams = useSearchParams();
    const amount = searchParams.get("amount");

    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-10">
            <p className="text-[16px] text-[#333]">Donation to <b>Leticia Briella Magaline</b> through <b>GIVE Healthcare</b></p>
            <h1 className="text-2xl font-bold mb-6">Donate Information</h1>
            <div className="bg-white rounded shadow p-6">
                <p className="text-lg font-semibold mb-2">Số tiền bạn muốn donate:</p>
                <p className="text-pink-600 text-xl font-bold">{amount ? `S$${amount}` : "Không có dữ liệu"}</p>
            </div>
        </div>
    );
};

export default DonateInformationPage;
