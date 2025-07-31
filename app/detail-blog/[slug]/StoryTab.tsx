import Image from "next/image";

const StoryTab = () => (
    <div className="story-tab-content w-full">
        <p className="text-[14px] font-semibold text-[#666] m-0">In the media</p>
        <div className="media-coverage__list__item py-[16px] border-b border-[#eee]">
            <Image
                src="https://res.cloudinary.com/dmajhtvmd/image/upload/w_300,c_scale/f_auto/dpr_auto/tqmuhhkdstewi0fl68ik"
                width={48}
                height={20}
                alt=""
            />
            <a
                href="https://www.freemalaysiatoday.com/category/leisure/2025/05/23/6-month-old-hana-needs-funds-for-urgent-liver-transplant"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-[14px] font-semibold leading-[20px] text-[#464646] hover:underline hover:text-pink-700"
            >
                6-month-old Hana needs funds for urgent liver transplant
            </a>
            <span className="block text-[12px] font-normal text-[#999] leading-[20px] m-0">May 26, 2025</span>
        </div>
        <h3 className="text-[20px] font-semibold py-[10px] text-[#333] my-[16px]">6-Month-Old Baby Needs Urgent Liver Transplant to Survive</h3>
        <p className="text-[16px] font-normal text-[##333] leading-[20px] m-0">
            A 6-month-old baby is in urgent need of a liver transplant to survive. The family is seeking
            assistance to cover the medical expenses. Every contribution counts and can make a difference
            in this baby's life.
            <br />
            <br />
            When Hana was born, I was overjoyed. I remember holding her for the first time, watching her tiny fingers wrap around mine. I thought we had all the time in the world to learn, to grow, to love. But just weeks later, that world came crashing down.
        </p>
        <Image
                src="https://res.cloudinary.com/dmajhtvmd/image/upload/w_1200,c_scale/f_auto/dpr_auto/l_assets:giveasia-watermark.png,c_scale,w_0.1,fl_relative,g_north_east,x_24,y_18,e_anti_removal/cfnxgsvmaxvm0zaykpfl"
                width={1200}
                height={600}
                alt=""
                className="rounded-lg mt-4"
            />
    </div>
);
export default StoryTab;
