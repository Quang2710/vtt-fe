"use client";
import React, { useEffect, useState } from "react";
import { BsHearts } from "react-icons/bs";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useUserStore } from "@/stores/userStore";
import { fetcher } from "@/libs/fetcher";

const ThankForDonationPage = () => {
    const params = useParams();
    const slug = params?.slug;
    const id = params?.id;
    const user = useUserStore((s) => s.user);
    const [mounted, setMounted] = useState(false);
    const [grateful, setGrateful] = useState<any>(null);

    useEffect(() => {
        setMounted(true); 
    }, []);

    useEffect(() => {
        if (id) {
            fetcher(`/grateful/${id}`)
                .then(data => {
                    if (Array.isArray(data) && data.length > 0) {
                        setGrateful(data[0]);
                    }
                })
                .catch(err => {
                });
        }
    }, [id]);

    const userName = mounted && user?.full_name ? user.full_name : "Giver";

    return (
        <div className="w-full h-[100vh] bg-[#F4F4F4]">
            <div className="w-full max-w-2xl mx-auto px-4 py-5 flex ">
                <div className="thanks-container w-full min-w-[550px] px-10 py-10 flex-col items-center justify-center bg-white  rounded-lg shadow-lg">
                    <p className="text-center text-[20px] font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent flex items-center justify-center">
                        Thank you, {userName}
                        <span className="relative inline-block align-middle" style={{ marginLeft: '-2px' }}>
                            <BsHearts className="inline-block -translate-y-1 rotate-25 text-orange-400" />
                        </span>
                    </p>
                    <div className="w-full h-[300px] flex items-center justify-center bg-[#e0e0e0]/60 rounded-lg opacity-80 mt-4">
                        {grateful ? (
                            grateful.video ? (
                                <video
                                    src={grateful.video}
                                    controls
                                    autoPlay
                                    loop
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            ) : grateful.image ? (
                                <img
                                    src={grateful.image}
                                    alt="Thank you"
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            ) : null
                        ) : (
                            <img src="/img/thanks.png" alt="Thank you" className="w-full h-full object-contain" />
                        )}
                    </div>
                    <p className="text-[14px] text-black mt-3">
                        {grateful?.message
                            ? grateful.message
                            : `"Thank you so much for your generous donation.
                        Even the smallest amount means the world to us and makes a
                        real difference in helping with her medical care.
                        May you be blessed abundantly, far beyond what you have given.
                        With heartfelt gratitude, Qifaa"}`}
                    </p>
                </div>
            </div>
            <div className="w-full max-w-2xl mx-auto px-4 flex ">
                <div className="thanks-container w-full min-w-[550px] px-10 py-10 flex-col items-center justify-center bg-white  rounded-lg shadow-lg">
                    <p className="text-left text-[16px] font-bold text-black">
                        Know the benefits of fundraising personally
                    </p>
                    <p className="text-left text-[14px] text-black">
                        "Share a testimonial so that others can know more about them."</p>
                    <div className="w-full flex justify-center mt-2">
                        <Link href={`/detail-blog/${slug}/${id}/donate/donate-information/thank-for-donation/write-testimonial`} className="w-full">
                            <button className="w-full cursor-pointer px-6 py-2 bg-pink-600 text-white font-bold rounded-lg shadow hover:opacity-90 transition-all">
                                WRITE TESTIMONIAL
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Link href="/browse" className="w-full max-w-2xl mx-auto px-4 flex text-center text-[18px] text-pink-600 font-bold mt-4 cursor-pointer justify-center items-center">
                SKIP
            </Link>
        </div>
    );
};

export default ThankForDonationPage;
