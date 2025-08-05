
"use client";
import { fetcher } from "@/libs/fetcher";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const AboutPage = () => {
    const [team, setTeam] = useState([]);
    const [advisors, setAdvisors] = useState([]);

    useEffect(() => {
        fetcher("/setting/about-teams")
            .then((data) => setTeam(data))
            .catch((err) => setTeam([]));
        fetcher("/setting/about-advisors")
            .then((data) => setAdvisors(data))
            .catch((err) => setAdvisors([]));
    }, []);

    return (
        <div className="about-container flex flex-col items-center justify-center w-full h-full">
            <div className="about-page__mission-section w-full min-h-[100vh] bg-[#F4F4F4] flex flex-col px-[14%] mb-[-50px]">
                <div className="about-page__mission-section__container rounded-[10px]">
                    <div className="about-page__mission-section__container__background relative w-full min-h-[550px] rounded-t-[10px] box-border p-[120px_20px] text-center norepeat bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://res.cloudinary.com/dmajhtvmd/image/upload/v1666876788/assets/images/static_pages/about/about-banner_3x.webp')"
                        }}>
                        <div className="about-page__mission-section__container__background__overlay absolute bottom-0 left-0 w-full h-[282px]  "
                            style={{
                                background: 'linear-gradient(180deg, rgba(75, 50, 153, 0) 0%, rgb(75, 50, 153) 100%)'
                            }}></div>
                        <div className="about-page__mission-section__container__background__content absolute bottom-0 left-0 w-full h-full z-[2] text-center box-border px-[15%] py-[120px] text-center flex flex-col items-center justify-center">
                            <img src="https://res.cloudinary.com/dmajhtvmd/image/upload/v1666877151/assets/images/static_pages/about/logo.webp" alt="" className="h-[140px] w-auto" />
                            <p className="text-white text-[24px]">Give.Asia is the platform for people to come together and move causes forward. More than consolidating random acts of kindness, we are helping givers become more involved and give momentum to causes they care about.</p>
                        </div>
                    </div>
                </div>
                <div className="about-page__mission-section__container__content px-[15%] pt-[50px] py-[120px] h-auto text-center overflow-hidden bg-[#4b3299] rounded-b-[10px] z-[1]">
                    <h1 className="text-[48px] mb-[56px] mt-[50px] text-center text-white font-bold">We are on a mission to change the way giving is done.F</h1>
                    <div className="flex items-center justify-center w-full mt-8 relative">
                        <div className="flex items-center h-[52px] rounded-l-full w-[260px] px-[50px]" style={{ background: 'linear-gradient(to left, #000 80%, rgba(0,0,0,0) 100%)' }}>
                            <span className="text-white font-bold text-[14px]">One-off donations</span>
                        </div>
                        <div className="flex items-center justify-center rounded-r-full bg-black w-[60px] h-[52px] shadow-md mx-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <IoIosArrowRoundForward className="text-white text-[30px]" />
                        </div>
                        <div className="flex items-center h-[52px] w-[260px] rounded-r-full bg-gradient-to-r from-green-400 to-blue-500 px-[50px]">
                            <span className="text-white font-bold text-[14px]">Lasting involvement</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-8 relative">
                        <div className="flex items-center h-[52px] rounded-l-full w-[260px] px-[50px]" style={{ background: 'linear-gradient(to left, #000 80%, rgba(0,0,0,0) 100%)' }}>
                            <span className="text-white font-bold text-[14px]">Individual action</span>
                        </div>
                        <div className="flex items-center justify-center rounded-r-full bg-black w-[60px] h-[52px] shadow-md mx-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <IoIosArrowRoundForward className="text-white text-[30px]" />
                        </div>
                        <div className="flex items-center h-[52px] w-[260px] rounded-r-full bg-gradient-to-r from-yellow-400 to-pink-400 px-[50px]">
                            <span className="text-white font-bold text-[14px]">Collective impact</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-8 relative">
                        <div className="flex items-center h-[52px] rounded-l-full w-[260px] px-[50px]" style={{ background: 'linear-gradient(to left, #000 80%, rgba(0,0,0,0) 100%)' }}>
                            <span className="text-white font-bold text-[14px]">Give support</span>
                        </div>
                        <div className="flex items-center justify-center rounded-r-full bg-black w-[60px] h-[52px] shadow-md mx-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <IoIosArrowRoundForward className="text-white text-[30px]" />
                        </div>
                        <div className="flex items-center h-[52px] w-[260px] rounded-r-full bg-gradient-to-r from-pink-400 to-blue-500 px-[50px]">
                            <span className="text-white font-bold text-[14px]">Give momentum</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-page__intro-section w-full bg-white px-[14%] pt-[120px] pb-[80px] text-center">
                <h2 className="text-[48px] font-bold mb-[40px] mt-[30px] text-black">We are the trusted giving platform</h2>
                <p className="text-[#666] text-[18px] px-[20%]">With over a decade worth of experience in the giving space,
                    we are committed to making sure giving creates the biggest positive impact.</p>
                <div className="about-page__intro-section__row flex pt-[80px]">
                    <div className="about-page__intro-section__row__col js-intro1 flex flex-col items-center justify-center w-1/3 px-[20px]">
                        <svg data-v-178dc0fa=""
                            width="174" height="174"
                            viewBox="0 0 174 174"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle data-v-178dc0fa="" cx="87" cy="87" r="72" stroke="url(#paint0_angular_755_597)" strokeWidth="30"></circle> <rect data-v-178dc0fa="" x="128" y="28" width="31" height="30" rx="15" fill="#FAFA32"></rect> <defs data-v-178dc0fa="">
                                <radialGradient data-v-178dc0fa="" id="paint0_angular_755_597" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87 60) rotate(-20.3411) scale(120.429 100.4481)"><stop data-v-178dc0fa="" stopColor="#EB008C"></stop> <stop data-v-178dc0fa="" offset="0.9" stopColor="#F6BE48"></stop> <stop data-v-178dc0fa="" offset="1" stopColor="#FACE32"></stop></radialGradient></defs></svg>
                        <p className="mt-[20px] text-[24px] font-bold px-[20%]">0% platform fee, 100% to the cause</p>
                        <p className="text-[18px] pb-[50px] my-[18px] text-[#222]">We work with private donors to cover our operating costs so that all donations go to the cause.</p>
                    </div>
                    <div className="about-page__intro-section__row__col js-intro1 flex flex-col items-center justify-center w-1/3 px-[20px]">
                        <svg data-v-178dc0fa="" width="209" height="189" viewBox="0 0 209 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path data-v-178dc0fa="" d="M103.978 104.409C116.378 104.409 128.069 89.117 122.842 70.858C115.767 46.1383 88.7566 15.6651 57.7708 15.6651C26.7851 15.6651 15.7058 43.0605 15.7058 57.6316C15.7058 107.528 76.5236 153.654 103.978 173.3" stroke="url(#paint0_linear_755_593)" strokeWidth="30" strokeMiterlimit="10" strokeLinecap="round"></path>
                            <path data-v-178dc0fa="" d="M103.892 173.3C103.892 173.3 193.294 112.721 193.294 57.4456C193.294 27.3713 172.554 15 154.904 15C123.579 15 94.2492 41.5615 86.0751 72.0384C80.7827 91.7825 94.1937 104.32 103.892 104.32" stroke="url(#paint1_linear_755_593)" strokeWidth="30" strokeMiterlimit="10" strokeLinecap="round"></path>
                            <rect data-v-178dc0fa="" x="88" y="89" width="31" height="31" rx="15.5" fill="#ED078A"></rect>
                            <defs data-v-178dc0fa="">
                                <linearGradient data-v-178dc0fa="" id="paint0_linear_755_593" x1="133.949" y1="173.045" x2="133.949" y2="31.5692" gradientUnits="userSpaceOnUse">
                                    <stop data-v-178dc0fa="" stopColor="#EC008C"></stop>
                                    <stop data-v-178dc0fa="" offset="0.85" stopColor="#4B3299"></stop>
                                </linearGradient>
                                <linearGradient data-v-178dc0fa="" id="paint1_linear_755_593" x1="96.4277" y1="24.3467" x2="96.4277" y2="176.869" gradientUnits="userSpaceOnUse">
                                    <stop data-v-178dc0fa="" stopColor="#F9ED32"></stop>
                                    <stop data-v-178dc0fa="" offset="0.7" stopColor="#EF4372"></stop>
                                    <stop data-v-178dc0fa="" offset="1" stopColor="#EC008C"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className="mt-[20px] text-[24px] font-bold px-[20%]">We keep it real</p>
                        <p className="text-[18px] pb-[50px] my-[18px] text-[#222]">We work with community leaders on the ground to show you the issues at hand and what is needed the most.</p>
                    </div>
                    <div className="about-page__intro-section__row__col js-intro1 flex flex-col items-center justify-center w-1/3 px-[20px]">
                        <svg data-v-178dc0fa="" width="206" height="172" viewBox="0 0 206 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line data-v-178dc0fa="" x1="15" y1="110.762" x2="15" y2="157" stroke="#4B3299" strokeWidth="30" strokeLinecap="round"></line>
                            <line data-v-178dc0fa="" x1="103.261" y1="87.5189" x2="103.261" y2="157" stroke="#00B49B" strokeWidth="30" strokeLinecap="round"></line>
                            <line data-v-178dc0fa="" x1="147.391" y1="38.2432" x2="147.391" y2="157" stroke="#D2D223" strokeWidth="30" strokeLinecap="round"></line>
                            <line data-v-178dc0fa="" x1="191" y1="15" x2="191" y2="157" stroke="url(#paint0_linear_755_589)" strokeWidth="30" strokeLinecap="round"></line>
                            <line data-v-178dc0fa="" x1="59.1304" y1="79.1514" x2="59.1304" y2="157" stroke="#2480C7" strokeWidth="30" strokeLinecap="round"></line>
                            <rect data-v-178dc0fa="" x="176" width="30" height="30" rx="15" fill="#FAFA32"></rect>
                            <defs data-v-178dc0fa="">
                                <linearGradient data-v-178dc0fa="" id="paint0_linear_755_589" x1="176" y1="197.5" x2="176" y2="29.5" gradientUnits="userSpaceOnUse">
                                    <stop data-v-178dc0fa="" stopColor="#EA0A87"></stop>
                                    <stop data-v-178dc0fa="" offset="1" stopColor="#FACC37"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className="mt-[20px] text-[24px] font-bold px-[20%]">We show you the progress</p>
                        <p className="text-[18px] pb-[50px] my-[18px] text-[#222]">Every dollar can make a difference and we show you how, collectively, your involvement has kept causes, communities and individuals moving forward.</p>
                    </div>
                </div>
            </div>
            <div className="about-page__team-section w-full bg-[#F4F4F4] px-[14%] pt-[80px] pb-[100px] text-center">
                <h2 className="my-[50px] text-[48px] font-bold text-black">The Give.Asia team</h2>
                <div className="flex flex-wrap justify-center gap-12 pt-[50px] pb-[100px]">
                    {team.map((member:any) => (
                        <div key={member.id} className="flex flex-col items-center w-[220px]">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-[120px] h-[120px] rounded-full object-cover mb-4 border-4 border-white shadow-lg"
                            />
                            <div className="text-[22px] font-bold text-[#222]">{member.name}</div>
                            <div className="text-[16px] text-[#666]">{member.role}</div>
                        </div>
                    ))}
                </div>
                <h2 className="my-[50px] text-[48px] font-bold text-black">Give.Asia advisors</h2>
                <div className="flex flex-wrap justify-center gap-12 pt-[50px] pb-[100px]">
                    {advisors.map((member:any) => (
                        <div key={member.id} className="flex flex-col items-center w-[220px]">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-[120px] h-[120px] rounded-full object-cover mb-4 border-4 border-white shadow-lg"
                            />
                            <div className="text-[22px] font-bold text-[#222]">{member.name}</div>
                            <div className="text-[16px] text-[#666]">{member.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
