"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const people = [
    {
        id: 1,
        name: "Đỗ Văn Lộng",
        department: "donated 50$",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/c_scale/f_auto/dpr_auto/vvkkgdz5a84ejgmzboww",
    },
    {
        id: 2,
        name: "Đỗ Văn Lộng",
        department: "donated 50$",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/c_scale/f_auto/dpr_auto/vvkkgdz5a84ejgmzboww",
    },
    {
        id: 3,
        name: "Đỗ Văn Lộng",
        department: "donated 50$",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/c_scale/f_auto/dpr_auto/vvkkgdz5a84ejgmzboww",
    },
    {
        id: 4,
        name: "Đỗ Văn Lộng",
        department: "donated 50$",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/c_scale/f_auto/dpr_auto/vvkkgdz5a84ejgmzboww",
    },
    {
        id: 5,
        name: "Đỗ Văn Lộng",
        department: "donated 50$",
        image: "https://res.cloudinary.com/dmajhtvmd/image/upload/c_scale/f_auto/dpr_auto/vvkkgdz5a84ejgmzboww",
    },
];

const Givers = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoPlay: true,
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
        <section className="bg-white py-12 px-4">
            <div className="max-w-7xl mx-auto mb-6">
                <h2 className="text-2xl font-bold text-black mb-4 pl-3">
                    Meet our givers
                </h2>

                <Slider {...settings}>
                    {people.map((person) => (
                        <div key={person.id} className="px-2">
                            <div className="bg-white rounded-xl overflow-hidden shadow-md relative">
                                <div className="relative w-full h-[380px] overflow-hidden group">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                </div>


                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <div className="bg-red-600 inline-block px-4 py-1 rounded-full text-sm font-bold mb-1">
                                        {person.name}
                                    </div>
                                    <p className="text-sm drop-shadow">{person.department}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Givers;
