"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const campaigns = [
    {
        id: 1,
        title: "From a Mother’s Heart: Help Leticia Fight for Her Life",
        author: "Henry Pascal",
        verified: true,
        raised: "₫6,349,295,031",
        goal: "₫6,926,988,281",
        percent: 91.65,
        description:
            "From a Mother’s Heart: Help Leticia Fight for Her Life My name is Elisabeth Macpal, and I am the mother of a beautiful little girl named Leticia Briella Magaline. She is just 1 yea...",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/w_1200,h_630,c_fill,g_faces/q_auto/psj9wecittjtc3axwcum.jpg",
    },
    {
        id: 2,
        title: "Help Us Bring Our Father Home After a Sudden Stroke Abroad",
        author: "Aileen Koh",
        verified: true,
        raised: "₫1,199,175,690",
        goal: "₫1,471,218,750",
        percent: 81.54,
        description:
            "Help Us Bring Our Father Home After a Sudden Stroke Abroad On 27 June, I took my 89-year-old father on a short trip to Johor Bahru. It was meant to be a simple getaway of rest & re...",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/w_1200,h_630,c_fill,g_faces/q_auto/vgjgd7c26c9uojiwrdyu.jpg",
    },
    {
        id: 3,
        title: "Two Tiny Fighters: Ethan and Evan’s Battle for Survival",
        author: "Louis Gan",
        verified: true,
        raised: "₫1,506,952,405",
        goal: "₫2,349,863,281",
        percent: 64.12,
        description:
            "Two Tiny Fighters: Extremely Premature Twins Ethan and Evan’s Battle for Survival Hi, my name is Louis. I’m a technician working in a pharmaceutical company, and my wife, Juliana, ...",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/w_1200,h_630,c_fill,g_faces/q_auto/nqwn1x8wyqqoq1yjkvhk.jpg",
    },
    {
        id: 4,
        title: "Two Tiny Fighters: Ethan and Evan’s Battle for Survival",
        author: "Louis Gan",
        verified: true,
        raised: "₫1,506,952,405",
        goal: "₫2,349,863,281",
        percent: 64.12,
        description:
            "Two Tiny Fighters: Extremely Premature Twins Ethan and Evan’s Battle for Survival Hi, my name is Louis. I’m a technician working in a pharmaceutical company, and my wife, Juliana, ...",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/w_1200,h_630,c_fill,g_faces/q_auto/nqwn1x8wyqqoq1yjkvhk.jpg",
    },
];

const TrendingCampaigns = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="bg-white py-16 px-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto mb-6">
                <h2 className="text-2xl font-semibold text-black">
                    Trending Personal Campaigns
                </h2>
                <a
                    href="#"
                    className="text-sm text-pink-600 hover:underline font-semibold"
                >
                    SEE MORE
                </a>
            </div>

            <div className="max-w-7xl mx-auto overflow-x-auto pb-4">
                <Slider {...settings}>
                    {campaigns.map((c) => (
                        <div key={c.id} className="px-2">
                            <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition cursor-pointer">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={c.image}
                                        alt={c.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-4">
                                    {c.verified && (
                                        <p className="text-green-600 font-semibold text-sm mb-1">
                                            ✅ VERIFIED
                                        </p>
                                    )}

                                    <h3 className="font-bold text-md text-gray-900 mb-2">
                                        {c.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                                        {c.description}
                                    </p>

                                    <p className="text-xs text-gray-500 mb-2">By {c.author}</p>

                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                                        <div
                                            className="bg-pink-600 h-full"
                                            style={{ width: `${c.percent}%` }}
                                        />
                                    </div>

                                    <p className="text-xs text-black font-semibold">
                                        RAISED <span className="text-gray-800">{c.raised}</span>{" "}
                                        <span className="text-gray-400">OF {c.goal}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TrendingCampaigns;
