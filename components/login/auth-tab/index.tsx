'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

export default function AuthTabs() {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<'login' | 'register' | string>(pathname.replace('/', '') ?? 'login');

    const loginButtons = () => {
        return (
            <>
                <div className="space-y-4 text-sm">
                    <button className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#3b5998] text-white py-2 rounded-md font-semibold shadow">
                        <FaFacebookF />
                        LOGIN WITH FACEBOOK
                    </button>
                    <button className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#db4437] text-white py-2 rounded-md font-semibold shadow">
                        <FaGoogle />
                        LOGIN WITH GOOGLE
                    </button>
                </div>

                {/* Divider */}
                <div className="my-4 text-center text-gray-500 text-sm">Or log in with email address</div>

                {/* Email login */}
                <button className="w-full cursor-pointer bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md shadow">
                    LOGIN WITH EMAIL
                </button>
            </>
        )
    }

    const registerButtons = () => {
        return <>
            <div className="space-y-4 text-sm">
                <button className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#3b5998] text-white py-2 rounded-md font-semibold shadow">
                    <FaFacebookF />
                    REGISTER WITH FACEBOOK
                </button>
                <button className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#db4437] text-white py-2 rounded-md font-semibold shadow">
                    <FaGoogle />
                    REGISTER WITH GOOGLE
                </button>
            </div>

            {/* Divider */}
            <div className="my-4 text-center text-gray-500 text-sm">Or register with email address</div>

            {/* Email login */}
            <button className="w-full cursor-pointer bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md shadow">
                REGISTER WITH EMAIL
            </button>
        </>

    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
                <button
                    onClick={() => setActiveTab('register')}
                    className={`cursor-pointer w-1/2 py-3 text-center font-semibold ${activeTab === 'register'
                        ? 'text-pink-600 border-b-2 border-pink-600'
                        : 'text-gray-500'
                        }`}
                >
                    REGISTER
                </button>
                <button
                    onClick={() => setActiveTab('login')}
                    className={`cursor-pointer w-1/2 py-3 text-center font-semibold ${activeTab === 'login'
                        ? 'text-pink-600 border-b-2 border-pink-600'
                        : 'text-gray-500'
                        }`}
                >
                    LOGIN
                </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
                {/* Social buttons */}
                {activeTab === 'login' ? loginButtons() : registerButtons()}

                {/* Forgot password */}
                <p className="mt-4 text-sm text-center text-gray-500">
                    Forgot password? Click{' '}
                    <Link href="/recover-password" className="text-pink-600 hover:underline">
                        here
                    </Link>{' '}
                    to reset password.
                </p>
            </div>
        </div>
    );
}
