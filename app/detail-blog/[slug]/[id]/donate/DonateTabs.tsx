'use client';
import React, { useState } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserShield } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";

const DonateTabs = () => {
    const router = useRouter();
    const pathname = usePathname();
    // Extract slug from pathname
    const slugMatch = pathname.match(/detail-blog\/(.*?)\//);
    const slug = slugMatch ? slugMatch[1] : "";
    const [activeTab, setActiveTab] = useState("once");
    const [fade, setFade] = useState(true);
    const [customAmount, setCustomAmount] = useState("");
    const [customMonthlyAmount, setCustomMonthlyAmount] = useState("");
    const params = useParams();

    const handleTabChange = (tab: string) => {
        setFade(false);
        setTimeout(() => {
            setActiveTab(tab);
            setFade(true);
        }, 120);
    };

    return (
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="relative flex flex-row border-b border-gray-200 mb-4 sm:mb-6">
                <button
                    className={`cursor-pointer flex-1 py-2 text-center font-semibold transition-colors duration-150 bg-white ${activeTab === "once"
                            ? "text-pink-600"
                            : "text-gray-500"
                        }`}
                    onClick={() => handleTabChange("once")}
                >
                    DONATE ONCE
                </button>
                {/* <button
                    className={`cursor-pointer flex-1 py-2 text-center font-semibold transition-colors duration-150 bg-white ${activeTab === "monthly"
                            ? "text-pink-600"
                            : "text-gray-500"
                        }`}
                    onClick={() => handleTabChange("monthly")}
                >
                    DONATE MONTHLY
                </button> */}
                <span
                    className={`absolute bottom-0 h-0.5 bg-pink-600 rounded transition-all duration-300 w-full ${activeTab === 'once' ? 'left-0' : 'left-1/2'}`}
                />
            </div>
            <div className={`p-2 sm:p-4 bg-white transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`} key={activeTab}>
                {activeTab === "once" ? (
                    <div className="donate-once-content w-full h-auto">
                        <div className="donate-edit-option__package grid grid-cols-1 gap-4">
                            {[125, 100, 50, 25].map((amount, idx) => (
                                <div
                                    key={amount}
                                    className="relative p-4 bg-white rounded shadow border border-gray-200 flex flex-col gap-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[140px]"
                                    style={{ willChange: 'transform, box-shadow, background' }}
                                    onClick={() => {
                                        if (slug) {
                                            router.push(`/detail-blog/${slug}/${params.id}/donate/donate-information?amount=${amount}`);
                                        }
                                    }}
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="text-xl font-semibold text-black">S${amount}</p>
                                        <IoIosArrowForward className="text-black text-xl" />
                                    </div>
                                    <p className="text-xs text-gray-500">ABOUT ₫2,540,600</p>
                                    <div className="text-sm font-semibold text-gray-700">This changes everything.</div>
                                    <div className="text-xs text-gray-500">Thank you for choosing to give with impact. It means so much to us.</div>
                                    <div className="mt-auto">
                                        {amount === 100 && (
                                            <div className="rounded-b-[5px] border border-solid border-[#eee] text-[12px] mt-[10px] -mx-[20px] -mb-[16px] px-[20px] py-[3px] text-[#666] bg-[#eee]">
                                                Top 10 % of donor donated this amount.
                                            </div>
                                        )}
                                        {amount === 50 && (
                                            <div className="rounded-b-[5px] border border-solid border-[#eee] text-[12px] mt-[10px] -mx-[20px] -mb-[16px] px-[20px] py-[3px] text-[#666] bg-[#eee]">
                                                Most donors donate this amount.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 w-full flex flex-col items-center">
                            <div className="w-full text-[#333] rounded-[5px] bg-white border border-[#eee] box-border px-4 py-4 sm:px-[20px] sm:py-[15px] shadow-[inset_0_2px_3px_0_rgba(0,0,0,0.1)] flex items-center gap-2 justify-center">
                                <span className="text-[#333]  text-[24px] font-semibold">S$</span>
                                <input
                                    id="custom-amount"
                                    type="number"
                                    min="1"
                                    placeholder="Custom amount"
                                    value={customAmount}
                                    onChange={e => setCustomAmount(e.target.value)}
                                    className="w-full focus:outline-none font-semibold bg-white text appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    style={{ MozAppearance: 'textfield' }}
                                />
                                <span className="text-gray-500 font-semibold">SGD</span>
                            </div>
                            {customAmount && Number(customAmount) > 0 && (
                                <button
                                    className="cursor-pointer mt-4 w-full bg-pink-600 text-[14px] text-white font-semibold py-2 rounded-[10px] shadow transition-all duration-200 hover:bg-pink-600 hover:scale-105 hover:shadow-lg"
                                    onClick={() => {
                                        if (slug && customAmount && Number(customAmount) > 0) {
                                            router.push(`/detail-blog/${slug}/${params.id}/donate/donate-information?amount=${customAmount}`);
                                        }
                                    }}
                                >
                                    CONTINUE
                                </button>
                            )}
                        </div>
                        <p className="text-[14px] mt-[15px] mb-[10px]">You can also donate a smaller amount that you're more comfortable with. Every little bit helps!</p>
                        <div className="mt-[12px] px-[20px] py-[17px] flex flex-row bg-[#f4f4f4] border border-[#eee] rounded-[10px] items-center gap-4">
                            <span className="min-w-[40px] min-h-[40px] w-10 h-10 grid place-items-center rounded-full bg-[#e0f2ff]">
                                <FaUserShield className="text-[24px] text-[#2196f3]" />
                            </span>
                            <div className="flex-1">
                                <div className="text-[14px] font-semibold text-[#666] mb-1">Your donation is protected by our Giving Guarantee</div>
                                <div className="text-[14px] text-[#666]">In the rare situation when something isn’t right, we guarantee you a refund for your donation. <a href="https://give.asia/giving-guarantee" target="_blank" className="no-underline text-pink-600">Learn more</a></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="donate-monthly-content w-full h-auto">
                        <div className="donate-edit-option__package grid grid-cols-1 gap-4">
                            {[
                                {
                                    amount: 5,
                                    title: 'Give up a coffee',
                                    desc: 'A cup of coffee a month may not seem like much, but collectively, it has the power to transform lives.',
                                    img: 'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/childmed/donation_packages/cup-of-coffee_2x.webp'
                                },
                                {
                                    amount: 10,
                                    title: 'Give up a restaurant meal',
                                    desc: 'Transform lives with the cost of just one meal a month.',
                                    img: 'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/childmed/donation_packages/one-meal_2x.webp'
                                },
                                {
                                    amount: 20,
                                    title: 'Give up 2 restaurant meals',
                                    desc: 'Transform lives with the cost of two meals a month.',
                                    img: 'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/childmed/donation_packages/two-meals_2x.webp'
                                }
                            ].map((option, idx) => (
                                <div
                                    key={option.amount}
                                    className="relative p-4 bg-white rounded shadow border border-gray-200 flex flex-row gap-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[140px]"
                                    style={{ willChange: 'transform, box-shadow, background' }}
                                    onClick={() => {
                                        if (slug) {
                                            router.push(`/detail-blog/${slug}/${params.id}/donate/donate-information?amount=${option.amount}`);
                                        }
                                    }}
                                >
                                    <img src={option.img} alt={option.title} className="w-16 h-16 object-contain flex-shrink-0" />
                                    <div className="flex flex-col justify-center flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="text-xl font-semibold text-black">S${option.amount}/month</p>
                                            <FiRefreshCcw className="text-black text-lg" />
                                        </div>
                                        <div className="text-sm font-semibold text-gray-700">{option.title}</div>
                                        <div className="text-xs text-gray-500">{option.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 w-full flex flex-col items-center">
                            <div className="w-full text-[#333] rounded-[5px] bg-white border border-[#eee] box-border px-4 py-4 sm:px-[20px] sm:py-[15px] shadow-[inset_0_2px_3px_0_rgba(0,0,0,0.1)] flex items-center gap-2 justify-center">
                                <span className="text-[#333] text-[24px] font-semibold">S$</span>
                                <input
                                    id="custom-monthly-amount"
                                    type="number"
                                    min="1"
                                    placeholder="Other amount"
                                    value={customMonthlyAmount}
                                    onChange={e => setCustomMonthlyAmount(e.target.value)}
                                    className="w-full focus:outline-none font-semibold bg-white text appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    style={{ MozAppearance: 'textfield' }}
                                />
                                <span className="text-gray-500 font-semibold">/month</span>
                            </div>
                            {customMonthlyAmount && Number(customMonthlyAmount) > 0 && (
                                <button
                                    className="cursor-pointer mt-4 w-full bg-pink-600 text-[14px] text-white font-semibold py-2 rounded-[10px] shadow transition-all duration-200 hover:bg-pink-600 hover:scale-105 hover:shadow-lg"
                                    onClick={() => {
                                        if (slug) {
                                            router.push(`/detail-blog/${slug}/${params.id}/donate/donate-information`);
                                        }
                                    }}
                                >
                                    CONTINUE
                                </button>
                            )}
                        </div>
                        <p className="text-[14px] mt-[15px] mb-[10px]">You can also donate a smaller amount that you're more comfortable with. Every little bit helps!</p>
                        <div className="mt-[12px] px-[20px] py-[17px] flex flex-row bg-[#f4f4f4] border border-[#eee] rounded-[10px] items-center gap-4">
                            <span className="min-w-[40px] min-h-[40px] w-10 h-10 grid place-items-center rounded-full bg-[#e0f2ff]">
                                <FaUserShield className="text-[24px] text-[#2196f3]" />
                            </span>
                            <div className="flex-1">
                                <div className="text-[14px] font-semibold text-[#666] mb-1">Your donation is protected by our Giving Guarantee</div>
                                <div className="text-[14px] text-[#666]">In the rare situation when something isn’t right, we guarantee you a refund for your donation. <a href="https://give.asia/giving-guarantee" target="_blank" className="no-underline text-pink-600">Learn more</a></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DonateTabs;
