'use client'

import Image from "next/image";
import { useState } from "react";
import Impact from "./impact";
import Settings from "./settings";
import Donated from "./donated";
import Fundraised from "./fundraised";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState<number>(1)
    const renderTabContent = () => {
        if (activeTab === 1) {
            return <Impact />
        }
        if (activeTab === 2) {
            return <Settings />
        }
        if (activeTab === 3) {
            return <Donated />
        }
        if (activeTab === 4) {
            return <Fundraised />
        }
    }
    return (
        <div className="px-5 md:px-[5%] bg-bg-gray">
            <div className="flex gap-9 items-center py-8">
                <Image src="/avatar.jpg" width={165} height={165} alt="" className="object-cover rounded-full" />
                <div>
                    <div className="font-bold text-3xl mb-2.5">
                        Dũng Hoàng
                    </div>
                    <div className="text-xl">
                        Dũng has been a Giver since Jul 21, 2025.
                    </div>
                </div>
            </div>
            <div className="flex border-b border-gray-200 md:pr-[30%] lg:pr-[50%]">
                <button
                    onClick={() => setActiveTab(1)}
                    className={`cursor-pointer text-sm md:text-base w-1/2 py-3 text-center font-semibold ${activeTab === 1
                        ? 'text-pink-600 border-b-2 border-pink-600'
                        : 'text-gray-500'
                        }`}
                >
                    Impact
                </button>
                <button
                    onClick={() => setActiveTab(2)}
                    className={`cursor-pointer text-sm md:text-base w-1/2 py-3 text-center font-semibold ${activeTab === 2
                        ? 'text-pink-600 border-b-2 border-pink-600'
                        : 'text-gray-500'
                        }`}
                >
                    Settings
                </button>
                <button
                    onClick={() => setActiveTab(3)}
                    className={`cursor-pointer text-sm md:text-base w-1/2 py-3 text-center font-semibold ${activeTab === 3
                        ? 'text-pink-600 border-b-2 border-pink-600'
                        : 'text-gray-500'
                        }`}
                >
                    Donated
                </button>
                <button
                    onClick={() => setActiveTab(4)}
                    className={`cursor-pointer text-sm md:text-base w-1/2 py-3 text-center font-semibold ${activeTab === 4
                        ? 'text-pink-600 border-b-2 border-pink-600'
                        : 'text-gray-500'
                        }`}
                >
                    Fundraised
                </button>
            </div>

            {/* Tab Content */}
            <div className="py-8">
                {/* Tab content */}
                {renderTabContent()}
            </div>
        </div>
    );
}

export default ProfilePage;