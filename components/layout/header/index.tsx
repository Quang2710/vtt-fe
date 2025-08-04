'use client'

import Image from "next/image";
import Link from "next/link";
import SearchInput from "../search-input";
import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex text-sm bg-[#F4F4F4] py-3 px-5 relative">

            {/* mobile menu */}
            <button
                aria-label="Open menu"
                onClick={() => setIsOpen(true)}
                className="lg:hidden absolute top-1/2 transform -translate-y-1/2"
            >
                <Menu size={24} className="text-gray-700" />
            </button>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                onClick={e => e.stopPropagation()} 
            >
                <div className="flex flex-col w-full gap-7 text-base p-4 text-gray">
                    <SearchInput className="!w-full" />
                    <Link href={'/browse'}>
                        Browse
                    </Link>
                    <Link href={'/fundraise'}>
                        Fundraise
                    </Link>
                    <hr />
                    <Link href={'/trust-and-safety'}>
                        Trust & safety
                    </Link>
                    <Link href={'/about'}>
                        About
                    </Link>
                    <Link href={'/faq'}>
                        FAQ
                    </Link>
                    <hr />
                    <Link href={'/login'}>
                        Login
                    </Link>
                    <Link href={'/register'}>
                        Register
                    </Link>
                </div>
            </div>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
            {/* end mobile menu */}
            <div className="hidden lg:flex justify-between w-[40%] items-center">
                <SearchInput />
                <Link href={'/browse'}>
                    Browse
                </Link>
                <Link href={'/fundraise'}>
                    Fundraise
                </Link>
            </div>
            <div className="w-full lg:w-[20%] flex justify-center">
                <Link href={'/'}>
                    <Image src={'https://res.cloudinary.com/dmajhtvmd/image/upload/v1666583023/assets/images/home/giveasia-logo.webp'} width={56} height={45} alt="logo" />
                </Link>
            </div>
            <div className="hidden lg:flex justify-between w-[40%] items-center">
                <Link href={'/trust-and-safety'}>
                    Trust & safety
                </Link>
                <Link href={'/about'}>
                    About
                </Link>
                <Link href={'/'}>
                    FAQ
                </Link>
                <div className="w-px h-6 bg-black" />
                <Link href={'/login'}>
                    Login
                </Link>
                <Link href={'/register'}>
                    Register
                </Link>
            </div>
        </div>
    );
}

export default Header;