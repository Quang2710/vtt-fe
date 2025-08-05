"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RiChatSearchLine } from "react-icons/ri";
import { fetcher } from "@/libs/fetcher";

const FAQPage: React.FC = () => {
    const [categories, setCategories] = React.useState<Array<{id:number;name:string;image:string;}>>([]);
    React.useEffect(() => {
        fetcher("/setting/fag-category")
            .then((data) => setCategories(data))
            .catch(() => setCategories([]));
    }, []);
    const router = useRouter();
    return (
        <div className="flex flex-col bg-[#f7f7fa]" style={{ minHeight: 'calc(100vh - 62px)' }}>
            <div className="w-full relative flex items-center justify-center" style={{ height: '300px' }}>
                <Image
                    src="https://res.cloudinary.com/dmajhtvmd/image/upload/v1664962509/assets/images/home/banner/childmed.jpg"
                    alt="Header"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-opacity-30" />
                <div className="relative z-10 flex flex-col items-center w-full">
                    <p className="text-white font-normal text-[36px]">Hello, how can we help you?</p>
                    <div className="w-full max-w-xl px-4 mt-3">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search our help center..."
                                className="w-full pl-12 pr-16 py-4 bg-white text-lg shadow-xl border border-[#d1d5db] focus:outline-none focus:border-[#7c3aed] transition-all duration-200 text-[#4b3299] placeholder-[#a3a3a3]"
                                style={{ boxSizing: 'border-box', fontSize: '18px', borderRadius: '10px', fontWeight: 500 }}
                            />
                            <button
                                type="button"
                                className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#7c3aed] to-[#4b3299] hover:from-[#4b3299] hover:to-[#7c3aed] text-white rounded-[10px] px-3 py-2 flex items-center justify-center shadow-lg transition-all duration-200 border border-[#ede9f7]"
                                style={{ height: '40px', minWidth: '40px' }}
                            >
                                <RiChatSearchLine size={22}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <main className="flex-1 flex flex-col justify-center">
                <div className="flex flex-col md:flex-row gap-8 px-6 py-10 max-w-7xl mx-auto w-full">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="cursor-pointer flex-1 bg-white rounded-xl p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center"
                            style={{ boxShadow: '0 10px 10px 0 rgba(0,0,0,0.1)', height: '210px' }}
                            onClick={() => router.push(`/faq/detail/${encodeURIComponent(cat.name)}`)}
                        >
                            <div className="w-16 h-16 mb-4 relative">
                                <Image src={cat.image} alt={cat.name} fill className="object-cover rounded-full" />
                            </div>
                            <div className="font-bold text-xl text-[#4b3299] mb-2">{cat.name}</div>
                            {cat.name.toLowerCase() === "donors" && (
                                <p className="text-[#b3b3b3] text-[14px] text-center mt-2">
                                    Trust and safety, fees and tax-deductions, payment methods, receipts, refunds
                                </p>
                            )}
                            {cat.name.toLowerCase().includes("fundraiser") && (
                                <p className="text-[#b3b3b3] text-[14px] text-center mt-2">
                                    First time fundraising, fees, approvals, payouts, withdrawal
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </main>
            <footer className="w-full py-6 bg-[#ede9f7] flex justify-center items-center border-t border-[#e5e7eb] mt-auto">
                <div className="flex gap-8 text-[#4b3299] text-base font-medium">
                    <a href="#" className="hover:underline">Legal Matters</a>
                    <a href="#" className="hover:underline">Accountability</a>
                    <a href="#" className="hover:underline">About Us</a>
                </div>
            </footer>
        </div>
    );
};

export default FAQPage;
