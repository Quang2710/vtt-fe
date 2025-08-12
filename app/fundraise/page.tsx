"use client"
import Link from "next/link";
import { HiOutlineChatAlt } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuBookHeart } from "react-icons/lu";
import { PiHandHeartDuotone } from "react-icons/pi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetcher } from "@/libs/fetcher";


export default function FundraisePage() {
    const [exampleFun, setExampleFun] = useState<{ image: string, title: string, description: string } | null>(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const json = await fetcher(`/setting/example-fundraises`);
                setExampleFun(json)
            } catch (err: any) {
            } finally {

            }
        }
        fetchData();
    }, []);
    return (
        <div className="fundraise-landing w-full h-full overflow-hidden">
            <div className="fundraise-landing__section fundraise-landing__section--intro py-[40px] text-[#fff] bg-[#f4f4f4] flex flex-col items-center justify-center">
                <div className="fundraise-landing__section__container fundraise-landing__section__container--banner w-full max-w-7xl mb-0 z-[1]">
                    <div
                        className="fundraise-landing__banner w-full h-[517px] bg-cover bg-center rounded-[16px] shadow-lg mb-[-60px] flex items-center justify-center"
                        style={{
                            backgroundImage:
                                "url('https://res.cloudinary.com/dmajhtvmd/image/upload/v1735883627/assets/images/fundraise/intro-banner_2x.png')",
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <p className="text-[18px] text-[#fff] opacity-80 mb-[12px] font-medium">
                                ASIA’S MOST TRUSTED FUNDRAISING PLATFORM
                            </p>
                            <h1 className="text-white text-4xl font-bold drop-shadow-lg text-center px-[190px] text-[72px] mb-[24px] font-fold text-[#fff]">
                                Fundraise for your cause today
                            </h1>
                            <Link href="/fundraise/new" passHref>
                                <button
                                    className="cursor-pointer text-[14px] rounded-[8px] bg-[#0082ff] text-[#fff] py-[10px] px-[40px] font-medium hover:bg-[#e0e0e0] transition duration-200 shadow-[0px_3px_5px_rgba(0,0,0,0.1)]"
                                    type="button"
                                >
                                    START A FUNDRAISER
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="fundraise-landing__section fundraise-landing__section--main pt-[60px] px-[100px] flex flex-col items-center justify-center bg-[#fff] w-full">
                    <div className="fundraise-landing__section__container mb-[60px] max-w-5xl">
                        <div className="fundraise-landing__steps my-[60px] flex flex-row justify-between items-center gap-[40px] pt-0 pb-0">
                            <div className="fundraise-landing__steps__step">
                                <HiOutlineChatAlt className="text-black text-[40px]" />
                                <p className="text-[14px] mt-[10px] font-medium text-black">
                                    STEP 1
                                </p>
                                <h3 className="text-[24px] font-semibold mb-[10px] text-black">
                                    Tell us your story
                                </h3>
                                <p className="text-[14px] font-medium text-black">
                                    Complete a quick 3-minute form help us understand your story
                                    and let us know what you need help raising funds for.
                                </p>
                            </div>
                            <div className="fundraise-landing__steps__step">
                                <LuBookHeart className="text-black text-[40px]" />
                                <p className="text-[14px] mt-[10px] font-medium text-black">
                                    STEP 2
                                </p>
                                <h3 className="text-[24px] font-semibold mb-[10px] text-black">
                                    Upload documents
                                </h3>
                                <p className="text-[14px] font-medium text-black">
                                    Our fundraising team will verify your documents and guide you
                                    along your fundraising journey..
                                </p>
                            </div>
                            <div className="fundraise-landing__steps__step">
                                <PiHandHeartDuotone className="text-black text-[40px]" />
                                <p className="text-[14px] mt-[10px] font-medium text-black">
                                    STEP 3
                                </p>
                                <h3 className="text-[24px] font-semibold mb-[10px] text-black">
                                    Spread the word
                                </h3>
                                <p className="text-[14px] font-medium text-black">
                                    Once your campaign is live, spread the word! The more people
                                    you reach, the faster you’ll achieve your goal..
                                </p>
                            </div>
                        </div>

                        <div className="fundraise-landing__guide-section flex flex-row p-[20px] my-[60px] gap-[20px] items-center rounded-[10px] bg-[#f4f4f4]">
                            <div className="fundraise-landing__guide-section__title w-auto">
                                <p className="text-[16px] font-semibold text-black">
                                    First-time fundraising on Give.Asia?
                                </p>
                                <p className="text-[16px]  text-black">
                                    Read our guide to fundraising
                                </p>
                            </div>
                            <Link
                                href="/fundraise/guide"
                                className="w-auto flex-grow-1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 ease-in-out"
                            >
                                <div className="border-l-[#ff0] border-l-[6px] rounded-[10px] px-[14px] py-[8px] relative bg-white">
                                    <p className="text-[16px] text-[#999] m-0">GUIDE</p>
                                    <p className="text-[16px] text-[#333] m-0">
                                        Guide to Fundraising on Give.Asia
                                    </p>
                                    <IoIosArrowRoundForward className="absolute text-black text-[44px] right-[14px] top-[50%] transform -translate-y-1/2" />
                                </div>
                            </Link>
                        </div>

                        <div className="fundraise-landing__cta-section my-[60px] pb-[60px] border-b border-[#eee] text-center flex flex-col justify-center items-center">
                            <Link href="/fundraise/new" passHref>
                                <button className="loading-button fundraise-landing__cta-section__button cursor-pointer bg-[#0082ff] w-auto px-[60px] py-[14px] shadow-[0px_3px_5px_rgba(0,0,0,0.1)] rounded-[10px] font-bold text-white text-[20px] hover:-translate-y-1 transition-all duration-300 ease-in-out">
                                    START A FUNDRAISER
                                </button>
                            </Link>
                            <p className="text-[20px] text-black font-semibold mt-[16px] mb-[10px] my-auto px-[20px] max-w-2xl">
                                More than 27,000 fundraisers have successfully raised over S$139 million million through Give.Asia.
                            </p>
                            <p className="text-[16px] text-[#666] mt-[8px] my-auto px-[20px] max-w-2xl"> 0% platform fee </p>
                            <p className="text-[16px] text-[#666] mt-[8px] my-auto px-[20px] max-w-2xl">Secure payment methods </p>
                            <p className="text-[16px] text-[#666] mt-[8px] my-auto px-[20px] max-w-2xl"> 1000s of verified non-profits</p>
                        </div>

                        <div className="fundraise-landing__featured-campaigns my-[60px] pb-[60px] border-b border-[#eee] text-center flex flex-col justify-center items-center">
                            <h2 className="text-[48px] font-bold text-black mb-[48px]">Examples of fundraisers on Give.Asia</h2>
                            {exampleFun && <div className="fundraise-landing__featured-campaigns__story flex flex-wrap justify-center gap-[30px] text-center items-center">
                                <div className="relative w-[357px] h-[420px]">
                                    <Image
                                        src={exampleFun.image}
                                        alt="sos"
                                        fill
                                        quality={100}
                                        className="object-cover rounded-[8px]"
                                    />
                                </div>

                                <div className="w-[357px] min-w-[357px] example-content flex-1 flex flex-col items-start text-start">
                                    <Link href={'/'}>
                                        <h3 className="text-[24px] mb-[10px] text-[#333]">{exampleFun.title}</h3>
                                    </Link>
                                    <p className="text-[16px] text-[#666] mt-[8px] mb-auto my-auto pr-[20px] max-w-2xl min-h-[200px]">
                                        {exampleFun.description}
                                    </p>
                                    <p className="text-[28px] font-medium bg-gradient-to-l from-[#EDA774] to-[#EB008C] bg-clip-text text-transparent" >
                                        S$503,928 Raised
                                    </p>
                                    <div className="w-full max-w-xs h-[12px] bg-[#eee] rounded-full mt-[12px] mb-[8px] flex items-center">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-l from-[#EDA774] to-[#EB008C]"
                                            style={{ width: '98.8%' }}
                                        ></div>
                                    </div>
                                    <div className="text-[14px] text-[#666] mb-auto pr-[20px] max-w-2xl text-start">
                                        of S$510,000 Goal from 8314 Givers
                                    </div>
                                </div>
                            </div>}

                        </div>

                        <div className="text-[#333]">
                            <h2 className="text-[48px] text-center font-bold mb-[60px]">Frequently asked questions</h2>
                            <div className="grid grid-cols-2 gap-[50px]">
                                <div className="text-[18px]">
                                    <div className="mb-[25px]">
                                        <p className="font-bold">What is Give.Asia?</p>
                                        <p className="text-[#666]">Founded in 2009, Give.Asia is one of Asia's oldest crowdfunding platforms. Give.Asia is a free platform for individuals, groups & organizations to raise funds for charities or personal causes. Give.Asia works with numerous charities across Asia and has also been the official charity fundraising platform for big sports events like Standard Chartered Marathon Singapore. Hundreds of thousands of people have used Give.Asia to raise tens of millions of dollars for various charities and individuals who are in need.</p>
                                    </div>
                                    <div className="mb-[25px]">
                                        <p className="font-bold">What fees are applied to donations?
                                        </p>
                                        <p className="text-[#666]">Give.Asia operates without any administration fee. Our operational expenses are covered by the kindness of donors. There is only a payment processing fee of 1.5% incurred on donations. This charge is imposed by financial institutions and payment gateways. We take pride in having one of the most competitive rates in Asia.</p>
                                    </div>
                                    <div className="mb-[25px]">
                                        <p className="font-bold">What type of fundraiser can I create for my cause?

                                        </p>
                                        <p className="text-[#666]">We allow a variety of causes to be fundraised on Give.Asia. The most common being medical, charity and animal fundraiser. You can read more about the types of fundraiser <Link className="text-[#eb008c]" href={'/'}>here</Link>.</p>
                                    </div>
                                </div>
                                <div className=""> <div className="mb-[25px]">
                                    <p className="font-bold">How long does it take to get a fundraising campaign verified?
                                    </p>
                                    <p className="text-[#666]">The time taken for verification varies depending on the case. The most common reason for campaign rejection and delay of verification is the lack of information. After you create a campaign, please check your email to find instructions to upload documents needed for verification.
                                    </p>
                                </div>
                                    <div className="mb-[25px]">
                                        <p className="font-bold">What modes of payment can be used to donate?

                                        </p>
                                        <p className="text-[#666]">Give.Asia accepts payments made by credit or debit cards issued by MasterCard, Visa and American Express. If you have Apple devices, you also have the option to utilize Apple Pay for your transactions. In Singapore, Give.Asia also accepts payments made by PayNow and PayLah. Give.Asia does not accept donations by other payment processors (PayPal, GrabPay) at the moment. We also do not accept cash, cheque/check, or bank transfer.
                                        </p>
                                    </div></div>
                            </div>
                        </div>

                        <div className="text-center w-full p-[60px] bg-cover bg-center rounded-[16px] mt-[60px]" style={{ backgroundImage: "url('https://res.cloudinary.com/dmajhtvmd/image/upload/v1735883627/assets/images/fundraise/footer-banner_2x.png')" }}>
                            <p className="max-w-[560px] text-[20px] m-auto text-center text-black font-medium
">More than 27,000 fundraisers have successfully raised over S$139 million million through Give.Asia.

                            </p>
                            <Link href="/fundraise/new" passHref>
                                <button className="m-auto mt-[20px] loading-button fundraise-landing__cta-section__button cursor-pointer bg-[#0082ff] w-auto px-[60px] py-[14px] shadow-[0px_3px_5px_rgba(0,0,0,0.1)] rounded-[10px] font-bold text-white text-[20px] hover:-translate-y-1 transition-all duration-300 ease-in-out">
                                    START A FUNDRAISER
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
