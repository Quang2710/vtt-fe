"use client";
import React from "react";
import { BsHearts } from "react-icons/bs";
import Link from "next/link";

import { useState } from "react";

const WriteTestimonialPagePage = () => {
    const [testimonial, setTestimonial] = useState("");
    const [showThankYou, setShowThankYou] = useState(false);
    const maxLength = 240;
    const isDisabled = testimonial.trim().length === 0;
    return (
        <div className="w-full h-[100vh] bg-[#F4F4F4]">
            <div className="w-full max-w-2xl mx-auto px-4 py-5 flex flex-col items-center justify-center ">
                {!showThankYou ? (
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
                        <p className="text-[16px] font-bold text-black w-full text-left">Write a testimonial about the beneficiary of fundraiser so others can know more about them</p>
                        <p className="text-[12px] text-[#666] w-full text-left">Share with others how you know them and maybe a story about the two of you</p>
                        <textarea
                            className="w-full mt-4 p-3 border border-gray-300 rounded-lg resize-none text-[14px] focus:outline-pink-600"
                            rows={5}
                            maxLength={maxLength}
                            value={testimonial}
                            onChange={e => setTestimonial(e.target.value)}
                            placeholder="Write your testimonial here..."
                        />
                        <div className="w-full text-right text-xs text-gray-500 mt-1">{testimonial.length}/{maxLength} characters</div>
                        <div className="rounded-lg bg-[#f4f1be] text-[#666] text-[12px] p-2 mt-2 w-full">
                            Your donation amount will be included in your testimonial.If you donated anonymously,
                            your donation will remain anonymous. However, your name will be shown on the testimonial
                        </div>
                        <div className="w-full flex justify-center mt-2 ">
                            <button
                                className={`w-full cursor-pointer px-6 py-2 bg-pink-600 text-white font-bold rounded-lg shadow transition-all ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
                                disabled={isDisabled}
                                onClick={() => setShowThankYou(true)}
                            >
                                SUBMIT
                            </button>
                        </div>
                        <Link href="/browse" className="w-full max-w-2xl mx-auto px-4 flex text-center text-[18px] text-pink-600 font-bold mt-4 cursor-pointer justify-center items-center">
                            SKIP
                        </Link>
                    </div>
                ) : (
                    <div className="w-full py-20 flex flex-col items-center justify-center ">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl flex flex-col items-center justify-center ">
                            <img src="/img/like.gif" alt="Like" className="w-[80px] h-[80px] mb-4 object-contain" />
                            <p className="text-[20px] font-bold text-black mb-4">Thank you for sharing your message!</p>
                            <p className="text-[14px] text-black mb-8 text-center">Share a testimonial so that others can know more about them.</p>
                            <Link href="/profile" className="w-full">
                                <button className="w-full cursor-pointer px-6 py-2 bg-pink-600 text-white font-bold rounded-lg shadow hover:opacity-90 transition-all">
                                    GO TO PROFILE
                                </button>
                            </Link>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default WriteTestimonialPagePage;
