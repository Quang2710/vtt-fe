"use client";

import Slider from "react-slick";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";

const campaigns = [
    {
        title: "Support Botak Cantonese Porridge",
        description:
            "Join us in supporting Ms. Hweeyi and Botak Cantonese Porridge to bring 500 free bowls to those in need every month!",
        location: "Singapore SG",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/c_scale/f_auto/dpr_auto/dysatcqrtevcvs9jg1ku", // Replace with actual image
    },
    {
        title: "Help Stray Cats",
        description: "Support feeding and rescue efforts in Boon Lay and beyond.",
        location: "Boon Lay SG",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/c_scale/f_auto/dpr_auto/dysatcqrtevcvs9jg1ku",
    },
    {
        title: "Help Stray Cats",
        description: "Support feeding and rescue efforts in Boon Lay and beyond.",
        location: "Boon Lay SG",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/c_scale/f_auto/dpr_auto/dysatcqrtevcvs9jg1ku",
    },
];

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="hidden lg:block absolute right-[-15px] lg:right-[145px] top-1/2 z-10 -translate-y-1/2 p-1 bg-white rounded-full shadow-md"
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
            className="hidden lg:block absolute left-[-15px] lg:left-[145px] top-1/2 z-10 -translate-y-1/2 p-1 bg-white rounded-full shadow-md"
        >
            <ChevronLeft className="w-5 h-5" />
        </button>
    );
}

export default function CampaignCarousel() {
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: "0"
                },
            },
        ],
    };

    return (
        <div className="relative lg:px-4">
            <div className="p-5 border rounded-[60px] absolute z-10 bg-white border-transparent left-1/2 transform -translate-x-1/2 top-[5%] w-[calc(100%_-_16px)] lg:w-2/3 flex gap-2.5 items-center" style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, .4);' }}>
                <Image src={'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/default_profile_images/default_profile_4.png'} width={36} height={36} alt="" className="h-full rounded-full" />
                <div className="text-gray text-sm lg:text-base">
                    <span className="font-bold text-pink">dunghm</span> donated to <span className="font-bold text-pink">Don’t Let Cancer Take Away White’s Ear</span>
                    <div className="text-[#999] text-xs italic">
                        1 hour ago
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                {campaigns.map((item, index) => (
                    <div
                        key={index}
                        className="!flex flex-col lg:flex-row bg-white lg:rounded-xl overflow-hidden shadow-md h-[70vh]"
                    >
                        {/* Left Panel */}
                        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#021A4C] to-[#0A276B] text-white p-6 relative flex flex-col justify-center">
                            <div className="absolute top-4 left-4 bg-red-600 text-xs font-bold text-white rounded-full px-2 py-1">
                                SG 60
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="mb-4">{item.description}</p>
                            <div className="flex items-center gap-2 mb-4 text-sm text-white">
                                <MapPin className="w-4 h-4" />
                                {item.location}
                            </div>

                            <div className="flex gap-3 mt-4">
                                <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-md">
                                    DONATE
                                </button>
                                <button className="text-white font-medium">READ ARTICLE</button>
                            </div>
                        </div>

                        {/* Right Image */}
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
                ))}
            </Slider>
        </div>
    );
}
