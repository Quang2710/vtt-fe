"use client";

import Image from "next/image";

const KindnessCards = () => {
    const cards = [
        {
            title: "Donating",
            description: "Donate and help transform the lives of people in need",
            bg: "https://res.cloudinary.com/dmajhtvmd/image/upload/v1678510697/assets/images/static_pages/aok/hearts-pattern_3x.png",
            icon: "🤲", // You can replace with actual SVG or <Image />
            bgColor: "#eb008c"
        },
        {
            title: "Advocating",
            description: "Share a Give.Asia campaign with your friends",
            bg: "https://res.cloudinary.com/dmajhtvmd/image/upload/v1678510697/assets/images/static_pages/aok/butterfly-pattern_3x.png",
            icon: "💬", // Replace with SVG if needed
            bgColor: "#00b49b"
        },
    ];

    return (
        <section className="bg-white py-16 px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-black">
                Join the Acts of Kindness movement by
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 max-w-xl mx-auto">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="rounded-2xl overflow-hidden text-white shadow-md w-full"
                    >
                        <div className="relative h-40">
                            <Image
                                src={card.bg}
                                alt={`${card.title} background`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-3xl">
                                {card.icon}
                            </div>
                        </div>
                        <div style={{ background: card.bgColor }} className={`text-white px-6 py-6 text-left h-full`}>
                            <h3 className="font-bold text-3xl mb-4">{card.title}</h3>
                            <p className="text-xl">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KindnessCards;
