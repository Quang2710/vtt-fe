"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { useFundraiseStore } from "@/stores/fundraiseStore";
import { useFundraiseStepGuard } from "@/hooks/useFundraiseStepGuard";

const messages = [
    "How old is the beneficiary?",
    { title: "I am the beneficiary", value: "self", redirect: "/fundraise/new/yourself-photos-step" },
    { title: "Family of the beneficiary", value: "family", redirect: "/fundraise/new/beneficiary-together" },
    { title: "Friend of the beneficiary", value: "friend", redirect: "/fundraise/new/beneficiary-together" }
];

const RelationStep: React.FC = () => {
     useFundraiseStepGuard(3, "/fundraise/new");
    const [visibleCount, setVisibleCount] = useState(0);
    const [showTyping, setShowTyping] = useState(true);
    const [animatingIdx, setAnimatingIdx] = useState(-1);

    const router = useRouter();
    const questions = useFundraiseStore((state) => state.questions);
    const question5 = questions.find(q => q.id === 5);
    const setAnswer = useFundraiseStore((state) => state.setAnswer);

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

    return (
        <div className="create-container h-[100vh] flex flex-col max-w-2xl mx-auto mt-[30px] mb-[60px] my-[20%] p-[40px]">
            <p className="text-[#999] text-[16px] font-medium">Rosie @ Give.Asia</p>
            {messages.slice(0, visibleCount).map((msg, idx) => {
                if (idx === 0) {
                    return (
                        <div
                            key={idx}
                            className={[
                                "w-full self-start",
                                "transition-all duration-500",
                                animatingIdx === idx
                                    ? "opacity-0 translate-y-4 scale-95"
                                    : "opacity-100 translate-y-0 scale-100",
                                "text-[18px] leading-[24px] font-semibold text-[#333] bg-white",
                                "border border-[#eee]",
                                "rounded-[12px]",
                                "shadow-[0_20px_30px_0_rgba(0,0,0,0.05)]",
                                "py-[15px] px-[25px]",
                                "mb-[10px]",
                            ].join(" ")}
                        >
                            {question5?.name || "How are you related to the beneficiary?"}
                        </div>
                    );
                } else if (typeof msg === 'object' && msg !== null && 'title' in msg) {
                    const m = msg as { title: string; value: string; redirect?: string; desc?: string };
                    return (
                        <div
                            key={idx}
                            className={["w-full self-start flex items-center justify-between gap-4 cursor-pointer",
                                "transition-all duration-300",
                                animatingIdx === idx
                                    ? "opacity-0 translate-y-4 scale-95"
                                    : "opacity-100 translate-y-0 scale-100",
                                "text-[18px] leading-[24px] font-semibold text-white bg-[#EB008C]",
                                "border border-[#EB008C]",
                                "rounded-[12px]",
                                "shadow-[0_20px_30px_0_rgba(235,0,140,0.10)]",
                                "py-[15px] px-[25px]",
                                "mb-[10px]",
                                "hover:bg-[#c90074] hover:scale-[1.03] active:scale-95",
                            ].join(" ")}
                            onClick={() => {
                                setAnswer(5, { answer: m.value, fileUrl: "" });
                                if (m.redirect) {
                                    router.push(m.redirect);
                                }
                            }}
                        >
                            <div>
                                <div>{m.title}</div>
                                {m.desc && (
                                    <div className="text-[15px] leading-[20px] font-normal text-white/90">{m.desc}</div>
                                )}
                            </div>
                            <IoIosArrowForward className="text-[26px] text-white ml-3 flex-shrink-0" />
                        </div>
                    );
                } else {
                    return null;
                }
            })}
            {visibleCount < messages.length && showTyping && (
                <div
                    className={
                        "rounded-2xl px-5 py-3 shadow-md bg-[#f4f4f4] text-[17px] text-black w-fit self-start animate-pulse"
                    }
                >
                    <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full mr-1 align-middle animate-bounce"></span>
                    <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full mr-1 align-middle animate-bounce delay-150"></span>
                    <span className="inline-block w-2 h-2 bg-[#bbb] rounded-full align-middle animate-bounce delay-300"></span>
                </div>
            )}
        </div>
    );
};

export default RelationStep;
