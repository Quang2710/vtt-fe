import Image from "next/image";
import Link from "next/link";

const Impact = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-2/3">
                <div className="flex flex-col gap-1.5 p-9 bg-white rounded-[10px] mb-5" style={{ boxShadow: "0 5px 10px 0 rgba(0,0,0,.05)" }}>
                    <Image src={'/group.svg'} width={48} height={48} alt="" />
                    <div className="text-4xl font-bold mt-2">
                        1
                    </div>
                    <div className="text-gray">
                        People helped
                    </div>
                </div>
                <div className="p-9 bg-white rounded-[10px] mb-5" style={{ boxShadow: "0 5px 10px 0 rgba(0,0,0,.05)" }}>
                    <div className="text-2xl font-bold">
                        Monthly Giving
                    </div>
                    <div className="flex h-[52px] -ml-9 w-[320px] relative mt-6 mb-4">
                        <div className="w-[56px]" style={{ background: "linear-gradient(90deg, rgb(0, 130, 255) 0%, rgb(0, 180, 155) 50.55%)" }}>
                        </div>
                        <div className="bg-[#4b3299] w-[52px] h-full flex items-center justify-center rounded-full absolute left-[30px] top-0">
                            <Image src={'/clock.svg'} width={26} height={26} alt="" />
                        </div>
                        <div className="text-white font-semibold px-9 flex items-center gap-4" style={{ background: "linear-gradient(270deg, #D2D223 -2.02%, rgb(235, 0, 140) 100%)", borderRadius: "0 26px 26px 0" }}>
                            <span className="text-4xl font-bold">0</span> Monthly donations
                        </div>
                    </div>
                    <div className="flex gap-6 overflow-auto custom-scroll">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <Image
                                key={idx}
                                src={'https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/movement/badges/common-care-badge_2x.png'}
                                width={124}
                                height={124}
                                alt=""
                            />
                        ))}
                    </div>
                </div>
                <div className="p-9 bg-white rounded-[10px] mb-5" style={{ boxShadow: "0 5px 10px 0 rgba(0,0,0,.05)" }}>
                    <div className="text-2xl font-bold">
                        Giving Journey
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center mt-20 text-center">
                        <div className="rounded-full bg-[#eee] mx-auto w-[76px] h-[76px] flex justify-center items-center">
                            <Image src={"https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/user_profile/heart.png"} width={38} height={36} alt="" />
                        </div>
                        <div className="text-sm text-gray">
                            Dũng has not contributed to a campaign yet.
                        </div>
                        <Link href="/" className="text-pink uppercase text-sm font-bold">
                            SEE TRENDING CAMPAIGNS</Link>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3">
                <Image src={"/giving-tree-sample.png"} width={468} height={495} className="w-full" alt="" />
            </div>
        </div>
    );
}

export default Impact;