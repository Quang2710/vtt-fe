"use client";
import { fetcher } from "@/libs/fetcher";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

type PastStory = {
    id: number;
    title: string;
    fundraiser_name: string;
    relationship: string | null;
    post: {
        id: number;
        name: string;
        description: string;
        image: string;
        views: number;
        content: string;
    };
};

const PastStoriesSection = () => {
    const [stories, setStories] = useState<PastStory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetcher("/setting/past_stories")
            .then((data) => {
                setStories(data)
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to load stories");
                setLoading(false);
            });
    }, []);

    return (
        <div className="past-story-container w-full px-[80px] py-[8%] flex flex-col items-center">
            <h1 className="w-[70%] text-[48px] font-bold mb-0 bg-gradient-to-b from-[#967DE2] to-[#4E349F] bg-clip-text text-transparent text-center">
                Past Stories
            </h1>
            <p className="w-[70%] text-center text-[20px] text-[#4b3299] mx-[12px] my-[24px]">
                More than 2 million givers have given hope to over 20 thousand campaigns. Here are some of the stories that evoke our collective humanity.
            </p>
            {loading ? (
                <div className="text-[#4b3299] text-lg">Loading...</div>
            ) : error ? (
                <div className="text-red-500 text-lg">{error}</div>
            ) : (
                <div className="trust-and-safety-banners flex gap-4 justify-start items-start flex-wrap">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="banner-items w-1/3 min-w-[320px] max-w-[380px] rounded-[16px] overflow-hidden shadow bg-white flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                        >
                            <div className="relative h-[180px] w-full">
                                <img
                                    src={story.post.image}
                                    alt={story.post.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4b3299]"></div>
                            </div>
                            <div className="bg-[#4b3299] flex flex-col pt-4 flex-1">
                                <div className="flex justify-center items-center gap-2 mb-3 px-5">
                                    <div className="flex -space-x-2">
                                        <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-7 h-7 rounded-full border-2 border-white" alt="" />
                                        <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-7 h-7 rounded-full border-2 border-white" alt="" />
                                        <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-7 h-7 rounded-full border-2 border-white" alt="" />
                                        <img src="https://randomuser.me/api/portraits/men/4.jpg" className="w-7 h-7 rounded-full border-2 border-white" alt="" />
                                    </div>
                                    <div className="ml-2 flex flex-col leading-tight px-5">
                                        <p className="text-white font-semibold text-[14px] mb-0">
                                            {story.post.views} Views
                                        </p>
                                        <span className="text-white text-[12px] opacity-50 mt-[-2px]">
                                            {story.fundraiser_name}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start mb-2 px-5">
                                    <span className="text-[40px] leading-[1] text-white mr-2 select-none">“</span>
                                    <span className="text-white text-[16px] font-bold leading-snug">
                                        {story.post.description}
                                        <div className="text-white text-[12px] mb-3">
                                            <br />
                                            <span className="font-semibold">{story.title}</span>
                                            <br />
                                            {story.relationship && (
                                                <span className="font-medium opacity-50">{story.relationship}</span>
                                            )}
                                        </div>
                                    </span>
                                </div>
                                <button
                                    className="text-left w-full border-t border-[#ffffff26] text-white text-center py-3 text-[16px] font-semibold flex items-center justify-between gap-2 cursor-pointer transition px-5"
                                    onClick={() => window.open(`/blog/${story.post.id}`, "_blank")}
                                >
                                    Read {story.post.name}
                                    <IoIosArrowForward className="text-[20px]" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PastStoriesSection;
