'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
    const menuLinks = [
        "About Give.Asia",
        "Blog",
        "Tech for Good",
        "Chính sách bảo mật",
        "Điều khoản & Quy định",
        "An ninh",
        "General feedback",
        "Contact us",
    ];

    const pathname = usePathname();
    const isContactPage = pathname.includes('contact'); // kiểm tra


    return (
        <div>
            {!isContactPage && <>
                <div className="flex-col lg:flex-row flex gap-12 mx-[5%] py-10">
                    <div className="flex gap-4 w-full">
                        <Image src={'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/giveasia-logo.webp'} width={74} height={45} alt="" className="w-[74px] h-[45px] shrink-0" />
                        <div>
                            <div className="mb-1 text-[18px] font-bold">
                                100% free fundraising platform
                            </div>
                            <div className="text-sm">
                                Founded in 2009, Give.Asia is Asia’s leading free fundraising platform for fundraisers to raise money for their causes. We have helped more than 20,000 campaigns across APAC, raising more than SGD$100 million.
                            </div>
                        </div>
                    </div>
                    <div className="gap-4 w-full hidden lg:flex">
                        <Image src={'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/footer/raise.webp'} width={81} height={65} alt="" className="w-[81px] h-[65px] shrink-0" />
                        <div>
                            <div className="mb-1 text-[18px] font-bold">
                                Member of RAISE
                            </div>
                            <div className="text-sm">
                                Give.Asia is Social Enterprise member of RAISE a platform for businesses that achieve social impact alongside sustainable financial return.
                            </div>
                        </div>
                    </div>
                    <div className="gap-4 w-full hidden lg:flex">
                        <Image src={'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/footer/heart.webp'} width={98} height={70} alt="" className="w-[98px] h-[70px] shrink-0" />
                        <div>
                            <div className="mb-1 text-[18px] font-bold">
                                Know someone in need?
                            </div>
                            <div className="text-sm mb-5">
                                Do let us know and we'll reach out to the person in need on your behalf to help.
                            </div>
                            <Link href={'/'} className="text-[#EB008C] text-sm font-bold">
                                LET US KNOW
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f4f4f4] pt-10">
                    <div className="flex gap-4 justify-center mb-8">
                        <Image src={'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/social_media/x.png'} width={39} height={39} alt="" />
                        <Image src={'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/social_media/fb.png'} width={39} height={39} alt="" />
                        <Image src={'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/social_media/youtube.png'} width={39} height={39} alt="" />
                        <Image src={'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/social_media/instagram.png'} width={39} height={39} alt="" />
                    </div>

                    <div className="mx-[5%] text-center mb-10">
                        {menuLinks.map((item, index) => (
                            <Link key={index} href={'/'} className={`text-sm text-gray px-2 relative after:content-["•"] after:ml-4 ${index === menuLinks.length - 1 ? "after:content-none" : ""
                                }`}>{item}</Link>
                        ))}
                    </div>
                    <div className="text-gray text-2xl mx-[5%] mb-2.5 text-center">
                        "It's not how much we give but how much love we put into giving."
                    </div>
                    <div className="text-gray text-sm mx-[5%] text-center">
                        Mother Teresa
                    </div>
                    <div className="flex flex-col items-center py-12 mx-[5%]">
                        <Image src={'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/giveasia-logo.webp'} width={108} height={70} alt="" />
                        <div className="text-xs text-gray my-2.5 text-center">
                            All content Copyright © 2025, Give.Asia Pte Ltd. All Rights Reserved
                        </div>
                    </div>
                </div></>}

        </div>
    );
}

export default Footer;