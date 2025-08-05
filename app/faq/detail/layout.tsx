'use client';
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetcher } from "@/libs/fetcher";

const mockCategories = [
    { id: 1, name: "Donors" },
    { id: 2, name: "Fundraiser" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [categories, setCategories] = useState<Array<{ id: number; name: string; }>>([]);

    useEffect(() => {
        fetcher("/setting/fag-category")
            .then((data) => setCategories(data))
            .catch(() => setCategories(mockCategories));
    }, []);

    const match = pathname.match(/\/faq\/detail\/(.+)$/);
    const categoryName = match ? decodeURIComponent(match[1]) : mockCategories[0].name;

    return (
        <div className="w-full min-h-screen bg-[#f7f7fa]">
            <div
                className="min-h-screen flex bg-[#f7f7fa]"
                style={{ maxWidth: 1080, margin: '0 auto', position: 'relative', paddingRight: 20, paddingLeft: 20 }}
            >
                <aside className="w-48 flex flex-col gap-2 py-6 pr-4 border-r border-[#ede9f7] bg-transparent">
                    {(categories.length ? categories : mockCategories).map(cat => (
                        <a
                            key={cat.id}
                            href={`/faq/detail/${encodeURIComponent(cat.name)}`}
                            className={`text-[#4b3299] text-base py-2 px-3 rounded hover:bg-[#ede9f7] transition-all duration-200 ${categoryName === cat.name ? 'bg-[#ede9f7] font-semibold' : ''}`}
                        >
                            {cat.name}
                        </a>
                    ))}
                </aside>
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>

    );
}
