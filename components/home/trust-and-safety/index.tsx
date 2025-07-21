"use client";

import Image from "next/image";

const FundraisingStats = () => {
    return (
        <section className="bg-[#4C1D95] text-white py-16 px-6 text-center relative overflow-hidden">
            <div className="max-w-6xl mx-auto z-10 relative flex flex-col lg:flex-row gap-8 justify-center items-center">
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white opacity-80 mb-2">
                        Trusted by 2 million donors
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        ₫2838 billion raised<br className="hidden md:block" />
                        <span className="text-[#cbd5e1]"> since 2009</span>
                    </h2>

                </div>

                <div className="grid grid-cols-1 gap-4 text-sm md:text-base w-full lg:w-1/3">
                    <div className="bg-transparent border border-white/20 rounded-lg p-4 flex items-center gap-3 text-left">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                            <Image src={'/trust-1.svg'} width={21} height={28} alt="" />
                        </div>
                        <div>
                            <div className="text-sm">by our Giving Guarantee</div>
                        </div>
                    </div>

                    <div className="bg-transparent border border-white/20 rounded-lg p-4 flex items-center gap-3 text-left">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                            <Image src={'/trust-2.svg'} width={26} height={14} alt="" />
                        </div>
                        <div>
                            <div className="text-sm">100% to the cause</div>
                        </div>
                    </div>

                    <div className="bg-transparent border border-white/20 rounded-lg p-4 flex items-center gap-3 text-left">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                            <Image src={'/trust-3.svg'} width={26} height={17} alt="" />
                        </div>
                        <div>
                            <div className="text-sm">partnered with us</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FundraisingStats;
