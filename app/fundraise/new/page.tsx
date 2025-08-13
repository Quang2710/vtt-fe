"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';
import { create } from "zustand";
import { fetcher } from '@/libs/fetcher';
import { useSessionExpiredCheck } from '@/hooks/useSessionExpiredCheck';

type Question = { id: number; name: string };
type FundraiseState = {
    questions: Question[];
    setQuestions: (questions: Question[]) => void;
};
const useFundraiseStore = create<FundraiseState>((set) => ({
    questions: [],
    setQuestions: (questions) => set({ questions }),
}));

const messages = [
    'Hello vũ Quang!',
    "I'm Rosie from Give.Asia. I'll guide you through your campaign creation process.",
    'What type of fundraising campaign are you creating?',
];

const NewFundraisePage: React.FC = () => {
    useSessionExpiredCheck()
    const [visibleCount, setVisibleCount] = useState(0);
    const [showTyping, setShowTyping] = useState(true);
    const [animatingIdx, setAnimatingIdx] = useState(-1);

    const setQuestions = useFundraiseStore((state) => state.setQuestions);

    useEffect(() => {
        if (visibleCount < messages.length) {
            setShowTyping(true);
            const typingTimer = setTimeout(() => {
                setShowTyping(false);
                setAnimatingIdx(visibleCount);
                const msgTimer = setTimeout(() => {
                    setVisibleCount((c) => c + 1);
                    setAnimatingIdx(-1);
                }, 180);
                return () => clearTimeout(msgTimer);
            }, 350);
            return () => clearTimeout(typingTimer);
        }
    }, [visibleCount]);

    useEffect(() => {
        let token: string | undefined = undefined;
        if (typeof document !== "undefined") {
            const match = document.cookie.match(/(^| )token=([^;]+)/);
            token = match ? match[2] : undefined;
        }
        fetcher('/fundraiser/create')
            .then(data => {
                if (data.Questions) {
                    setQuestions(data.Questions);
                    localStorage.setItem("fundraiseQuestions", JSON.stringify(data.Questions));
                }
            });
    }, [setQuestions]);

    const router = useRouter();
    return (
        <div className="create-container h-[100vh] flex flex-col max-w-2xl mx-auto mt-[30px] mb-[60px] my-[20%] p-[40px]">
            <p className='text-[#999] text-[16px] font-medium'>Rosie @ Give.Asia</p>
            {messages.slice(0, visibleCount).map((msg, idx) => {
                const isFirst = idx === 0;
                return (
                    <div
                        key={idx}
                        className={
                            [
                                'w-fit self-start',
                                'transition-all duration-500',
                                animatingIdx === idx
                                    ? 'opacity-0 translate-y-4 scale-95'
                                    : 'opacity-100 translate-y-0 scale-100',
                                'text-[18px] leading-[24px]',
                                isFirst ? 'font-semibold text-[#333]' : 'font-normal text-[#333]',
                                'bg-white',
                                'border border-[#eee]',
                                'rounded-[12px]',
                                'shadow-[0_20px_30px_0_rgba(0,0,0,0.05)]',
                                'py-[15px] px-[25px]',
                                'mb-[10px]',
                            ].join(' ')
                        }
                    >
                        {msg}
                    </div>
                );
            })}
            {visibleCount < messages.length && showTyping && (
                <div
                    className={
                        'rounded-2xl px-5 py-3 shadow-md bg-[#f4f4f4] text-[17px] text-black w-fit self-start animate-pulse'
                    }
                >
                    <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full mr-1 align-middle animate-bounce"></span>
                    <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full mr-1 align-middle animate-bounce delay-150"></span>
                    <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full align-middle animate-bounce delay-300"></span>
                </div>
            )}
            {visibleCount >= messages.length && !showTyping && (
                <div
                    className="rounded-[12px] mb-[10px] relative overflow-hidden cursor-pointer mt-3 flex flex-col justify-end"
                    style={{
                        backgroundImage: 'url(https://give.asia/assets/images/personal_fundraiser_bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        height: '220px',
                    }}
                    onClick={() => router.push('/fundraise/new/personal-medical')}
                >
                    <div className="w-full text-white px-6 py-4 flex items-center justify-between absolute left-0 bottom-0">
                        <div>
                            <div className="font-semibold text-[18px] leading-[22px]">Personal fundraiser</div>
                            <div className="text-[15px] leading-[20px]">The funds collected for the campaign will go to a verified party.</div>
                        </div>
                        <IoIosArrowForward className="text-[26px] text-white ml-3" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewFundraisePage;