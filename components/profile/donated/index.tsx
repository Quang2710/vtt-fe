import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { fetcher } from "@/libs/fetcher";


const Donated = () => {
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

    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetcher("/setting/trending_campaign")
            .then((data: any) => {
                setCampaigns(data);
                setLoading(false);
            })
            .catch((err: any) => {
                setError(err);
                setLoading(false);
            });
    }, []);
    return (
        <div className="max-w-7xl mx-auto overflow-x-auto pb-4">
            <p className="w-full text-center text-[#666] text-[16px] py-[50px]">Make your first donation today and join our community of Givers!</p>
            {loading ? (
                <div className="text-center py-10 text-gray-500">Loading...</div>
            ) : error ? (
                <div className="text-center py-10 text-red-500">Error loading campaigns.</div>
            ) : (
                <Slider {...settings}>
                    {campaigns.map((c: any) => (
                        <div key={c.id} className="px-2">
                            <div className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition cursor-pointer">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={c.image}
                                        alt={c.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-4">
                                    {/* Verified badge if needed */}
                                    {c.is_featured && (
                                        <p className="text-green-600 font-semibold text-sm mb-1">
                                            ✅ VERIFIED
                                        </p>
                                    )}

                                    <h3 className="font-bold text-md text-gray-900 mb-2">
                                        {c.name}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                                        {c.description}
                                    </p>

                                    {/* <p className="text-xs text-gray-500 mb-2">By {c.author}</p> */}

                                    {/* <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                                            <div
                                                className="bg-pink-600 h-full"
                                                style={{ width: `${c.percent}%` }}
                                            />
                                        </div>
                                        <p className="text-xs text-black font-semibold">
                                            RAISED <span className="text-gray-800">{c.raised}</span>{" "}
                                            <span className="text-gray-400">OF {c.goal}</span>
                                        </p> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}

export default Donated;