"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { fetcher } from "@/libs/fetcher";

const mockCategories = [
    { id: 1, name: "Donors" },
    { id: 2, name: "Fundraiser" },
];

const FAQDetailCategoryPage: React.FC = () => {
    const params = useParams();
    const categoryName = typeof params?.["categories-name"] === "string" ? params["categories-name"] : "";
    const [categories, setCategories] = useState<Array<{id:number;name:string;}>>([]);
    const [faqs, setFaqs] = useState<Array<{id:number;question:string;answer:string;category_id:number;}>>([]);
    const [activeId, setActiveId] = useState<number | null>(null);

    useEffect(() => {
        fetcher("/setting/fag-category")
            .then((data) => setCategories(data))
            .catch(() => setCategories(mockCategories));
    }, []);

    useEffect(() => {
        fetcher("/setting/faqs?page=1&pageSize=6")
            .then((data) => setFaqs(data))
            .catch(() => setFaqs([]));
    }, []);

    const currentCategory = (categories.length ? categories : mockCategories).find(
        c => c.name.toLowerCase() === decodeURIComponent(categoryName).toLowerCase()
    );

    const filteredFaqs = currentCategory
        ? faqs.filter(faq => faq.category_id === currentCategory.id)
        : [];

    return (
        <main className="flex-1 p-10">
            <div className="max-w-2xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={categoryName}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                        <h2 className="text-3xl font-extrabold text-[#4b3299] mb-8 text-center drop-shadow-sm">
                            {currentCategory ? `${currentCategory.name} FAQ` : "FAQ"}
                        </h2>
                        {filteredFaqs.length > 0 ? (
                            <div className="space-y-6">
                                {filteredFaqs.map(faq => (
                                    <div
                                        key={faq.id}
                                        className={`cursor-pointer bg-white rounded-xl shadow-lg p-6 transition-all duration-200 border border-[#ede9f7] ${
                                            activeId === faq.id ? "ring-2 ring-[#4b3299]" : "hover:ring-1 hover:ring-[#4b3299]"
                                        }`}
                                    >
                                        <button
                                            className="cursor-pointer w-full text-left text-lg font-semibold mb-2 text-[#4b3299] flex items-center justify-between focus:outline-none"
                                            onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                                        >
                                            <span>{faq.question}</span>
                                            <span className={`cursor-pointer ml-2 transition-transform ${activeId === faq.id ? "rotate-90" : ""}`}>
                                                ▶
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {activeId === faq.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-base text-[#333] opacity-90 overflow-hidden border-t border-[#ede9f7] pt-4"
                                                >
                                                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-base text-[#b3b3b3] text-center">Không tìm thấy câu hỏi cho danh mục này.</p>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
};

export default FAQDetailCategoryPage;
