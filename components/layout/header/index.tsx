'use client'

import Image from "next/image";
import Link from "next/link";
import SearchInput from "../search-input";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Cookies from "js-cookie"; 
import { useUserStore } from "@/stores/userStore";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken] = useState<string | undefined>(undefined);
    const [showMenu, setShowMenu] = useState(false);
    const user = useUserStore((state:any) => state.user);

    useEffect(() => {
        const cookieToken = Cookies.get("token");
        setToken(cookieToken ?? "");
    }, []);

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
                <Link href={'/trust-and-safety'}>Trust & safety</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/faq'}>FAQ</Link>
                <div className="w-px h-6 bg-black" />
                {!token ? (
                    <>
                        <Link href={'/login'}>Login</Link>
                        <Link href={'/register'}>Register</Link>
                    </>
                ) : (
                    <div className="relative">
                        <button
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setShowMenu((v) => !v)}
                        >
                            <img
                                src={user?.avatar_id ? user.avatar_id : "/avatar.jpg"}
                                alt="avatar"
                                className="w-8 h-8 rounded-full border border-[#e5e7eb] object-cover"
                            />
                        </button>
                        {showMenu && (
                            <>
                                <div
                                    className="fixed inset-0 z-40"
                                    onClick={() => setShowMenu(false)}
                                ></div>
                                <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50 py-2">
                                    <Link
                                        href="/profile"
                                        className="block px-4 py-2 text-[#4b3299] hover:bg-[#f7f7fa]"
                                        onClick={() => setShowMenu(false)}
                                    >
                                        View Profile
                                    </Link>
                                    <button
                                        className="block w-full text-left px-4 py-2 text-[#d32f2f] hover:bg-[#f7f7fa] cursor-pointer"
                                        onClick={() => {
                                            Cookies.remove("token", { path: "/" });
                                            window.location.reload();
                                        }}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;