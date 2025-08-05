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

    useEffect(() => {
        fetcher("/setting/fag-category")
            .then((data) => setCategories(data))
            .catch(() => setCategories(mockCategories));
    }, []);

    const currentCategory = (categories.length ? categories : mockCategories).find(
        c => c.name.toLowerCase() === decodeURIComponent(categoryName).toLowerCase()
    );

    return (
        <main className="flex-1 p-10">
            <AnimatePresence mode="wait">
                <motion.div
                    key={categoryName}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="bg-white rounded-xl shadow p-8 min-h-[300px]"
                >
                    <h2 className="text-2xl font-bold text-[#4b3299] mb-4">{currentCategory ? `${currentCategory.name} FAQ` : "FAQ"}</h2>
                    {currentCategory ? (
                        <p className="text-base text-[#333] opacity-80">Nội dung chi tiết cho danh mục <span className="font-semibold">{currentCategory.name}</span> sẽ hiển thị ở đây.</p>
                    ) : (
                        <p className="text-base text-[#b3b3b3]">Không tìm thấy danh mục này.</p>
                    )}
                </motion.div>
            </AnimatePresence>
        </main>
    );
};

export default FAQDetailCategoryPage;
