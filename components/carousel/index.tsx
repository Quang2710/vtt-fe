"use client";

import Slider from "react-slick";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import slugify from "@/libs/slugify";
import { fetcher } from "@/libs/fetcher";
import { useEffect, useState } from "react";

export default function CampaignCarousel() {
    type Banner = {
        id: number;
        title: string;
        description: string;
        image: string;
        article_link?: string | null;
        status: string;
    };

    type BannerPost = {
        id: number;
        post_id: number;
        article_link?: string | null;
        image: string;
        tag_id: number;
        title: string;
        tag_name: string;
    };

    const [banner, setBanner] = useState<Banner[]>([]);
    const [bannerPost, setBannerPost] = useState<BannerPost[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetcher("/setting/banner")
            .then((data) => {
                setBanner(data.banner || []);
                setBannerPost(data.banner_post || []);
            })
            .catch(() => {
                setBanner([]);
                setBannerPost([]);
            });
    }, []);

    function SampleNextArrow(props: any) {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="hidden lg:block absolute right-[-15px] lg:right-[145px] top-1/2 z-10 -translate-y-1/2 p-1 bg-white rounded-full shadow-md cursor-pointer"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        );
    }

    function SamplePrevArrow(props: any) {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="hidden lg:block absolute left-[-15px] lg:left-[145px] top-1/2 z-10 -translate-y-1/2 p-1 bg-white rounded-full shadow-md cursor-pointer"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '160px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: "0"
                },
            },
        ],
    };


    return (
        <div className="relative lg:px-4 hero py-10">
            {banner.length > 0 && (
                <div
                    className="p-5 border rounded-[60px] absolute z-10 bg-white border-transparent left-1/2 transform -translate-x-1/2 top-[5%] w-[calc(100%_-_16px)] lg:w-2/3 flex gap-2.5 items-center"
                    style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, .4)' }}
                >
                    <Image src={banner[0].image} width={36} height={36} alt="" className="h-full rounded-full" />
                    <div className="text-gray text-sm lg:text-base">
                        <span className="font-bold text-pink">{banner[0].title}</span>
                        <div className="text-[#999] text-xs italic">
                            {banner[0].description}
                        </div>
                    </div>
                </div>
            )}
            <Slider {...settings}>
                {bannerPost.map((item: any, index: number) => {
                    const slug = slugify(item.title || "");
                    return (
                        <div
                            key={index}
                            className="!flex flex-col lg:flex-row bg-white lg:rounded-xl overflow-hidden shadow-md h-[70vh] cursor-pointer"
                            onClick={() => router.push(`/detail-blog/${slug}?id=${item.id}`)}
                        >
                            <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#021A4C] to-[#0A276B] text-white p-6 relative flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="mb-4">{item.tag_name}</p>
                                <div className="flex gap-3 mt-4">
                                    <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-md cursor-pointer">
                                        DONATE
                                    </button>
                                    {item.article_link ? (
                                        <a href={item.article_link} target="_blank" rel="noopener noreferrer" className="text-white font-medium">READ ARTICLE</a>
                                    ) : (
                                        <button className="text-white font-medium opacity-50 cursor-not-allowed" disabled>READ ARTICLE</button>
                                    )}
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}
