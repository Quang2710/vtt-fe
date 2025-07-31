
// Tab content components

// pages/detail/[id].tsx
'use client';
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import StoryTab from "./StoryTab";
import UpdatesTab from "./UpdatesTab";
import PayoutsTab from "./PayoutsTab";
import DonationsTab from "./DonationsTab";
import TestimonialsTab from "./TestimonialsTab";
import Top10Tab from "./Top10Tab";
import { MdCurrencyExchange } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import { PiShieldCheckeredFill } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import { IoMdCopy } from "react-icons/io";
import { LiaUserShieldSolid } from "react-icons/lia";
import { LuUserSearch } from "react-icons/lu";
import { PiAmbulanceBold } from "react-icons/pi";
import { TbShieldLock } from "react-icons/tb";
import { VscVerifiedFilled } from "react-icons/vsc";

const DetailPage = () => {


  //   useEffect(() => {
  //     if (id) {
  //       fetch(`/api/campaigns/${id}`)
  //         .then(res => res.json())
  //         .then(setData);
  //     }
  //   }, [id]);

  // if (!data) return <div>Loading...</div>;

  return (
    <div className="blog-container w-full bg-gray-100">
      <div className="campaign-page__container mx-[18%] p-[20px] flex gap-4 ">
        <div className="campaign-container w-[68%]">
          <div className="categori-name flex gap-2 mt-[30px]">
            <div className="w-[fit-content] px-[8px] py-[4px] text-[#535353] text-[12px] font-medium rounded-[25px] border border-[#eee]">Baby</div>
            <div className="w-[fit-content] px-[8px] py-[4px] text-[#535353] text-[12px] font-medium rounded-[25px] border border-[#eee]">Children</div>
          </div>
          <h1 className="text-2xl font-medium mb-2 p-[10px] my-[20px]">[Urgent] Baby Hana Needs a Liver Transplant by August 2025 to Survive</h1>
          <div className="media-campaign rounded-[10px] w-full">
            <div className="video-campaign rounded-tl-[10px] rounded-tr-[10px] w-full overflow-hidden">
              <iframe
                width="100%"
                height="632px"
                src="https://www.youtube.com/embed/CsCgX0Cm44g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="image-campaign bg-white rounded-bl-[10px] rounded-br-[10px] w-full flex px-[15px] py-[10px] flex justify-between items-center">
              <div className="img-container flex gap-3 w-[50%]">
                <img
                  className="w-[80px] h-[50px] object-cover rounded-[10px] cursor-pointer"
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Campaign Image"
                />
                <img
                  className="w-[80px] h-[50px] object-cover rounded-[10px] cursor-pointer"
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Campaign Image"
                />
                <img
                  className="w-[80px] h-[50px] object-cover rounded-[10px] cursor-pointer"
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                  alt="Campaign Image"
                /></div>
              <div className="w-[30%] object-cover cursor-pointer flex justify-end items-center">
                <span className="p-[10px] h-[50px] text-pink-600 font-medium flex justify-center items-center whitespace-nowrap rounded-[10px] border border-gray-300">
                  SEE MORE PHOTOS
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full px-[25px] py-[18px] rounded-[10px] bg-white mt-[20px]">
            <Image
              src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/movement/childmed/square-logo.png"
              alt="donate"
              width={80}
              height={80}
              className="object-cover rounded-[10px]"
            />

            <div className="upsell-content flex-1 px-4">
              <h3 className="text-[18px] font-medium text-[#666]">
                We believe <b>every child deserves a chance</b> to live beyond the confines of the hospital walls.
              </h3>
              <p className="text-[16px] font-bold text-pink-600">
                Help HANA CHIN ZI YING and other children live normal lives
              </p>
            </div>

            <div className="flex-none">
              <IoIosArrowForward className="text-[32px] text-gray-500 cursor-pointer" />
            </div>
          </div>
          <div className="w-full mt-6">
            {(() => {
              const [tab, setTab] = useState('story');
              const tabList = [
                { key: 'story', label: 'Story' },
                { key: 'updates', label: 'Updates' },
                { key: 'payouts', label: 'Payouts' },
                { key: 'donations', label: 'Donations' },
                { key: 'testimonials', label: 'Testimonials' },
                { key: 'top10', label: 'Top 10' },
              ];
              return (
                <div className="bg-white rounded-[10px] p-4">
                  <div className="flex gap-2 border-b border-gray-200 mb-4">
                    {tabList.map((t) => (
                      <button
                        key={t.key}
                        className={`cursor-pointer px-4 py-2 font-medium text-[15px] border-b-2 transition-colors duration-150 ${tab === t.key ? 'border-pink-600 text-pink-600' : 'border-transparent text-gray-500'}`}
                        onClick={() => setTab(t.key)}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  <div className="min-h-[120px] rounded-[10px] p-4">
                    {tab === 'story' && <StoryTab />}
                    {tab === 'updates' && <UpdatesTab />}
                    {tab === 'payouts' && <PayoutsTab />}
                    {tab === 'donations' && <DonationsTab />}
                    {tab === 'testimonials' && <TestimonialsTab />}
                    {tab === 'top10' && <Top10Tab />}
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
        <div className="campaign-side w-[31%]">
          <div className="w-full bg-white rounded-[10px] shadow p-[20px] " >
            <h3 className="text-[28px] font-medium mb-2 bg-gradient-to-l from-[#EDA774] to-[#EB008C] bg-clip-text text-transparent" >
              ₫2,341,366,440 Raised
            </h3>
            <MdCurrencyExchange className="text-[#333]" />

            <p className="text-[14px] font-normal text-[#999] leading-[20px] mt-2">
              (Inc ₫140,150,232 Raised Offline)
              <br />
              Of ₫3,351,418,604 Goal
            </p>
            <div className="w-full h-3 bg-gray-200 rounded-full mt-4 mb-2 overflow-hidden">
              <div className="h-full bg-gradient-to-l from-[#EDA774] to-[#EB008C] rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-[14px] font-normal text-[#999] leading-[20px] mt-2">
              from 2,089 Givers
            </p>

            <div className="trending flex items-center rounded-[30px] my-4 border border-[#a0d8bd] bg-[#e5fff3] p-2 box-border">
              <div className="flex -space-x-3 mr-3">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User 1"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User 2"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="User 3"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <span className="text-[14px] font-medium text-[#026d3a] flex flex-col justify-start ">
                <p className="flex gap-2 justify-start items-center"><FaArrowTrendUp />Trending</p>
                <span>
                  943 givers in the past week
                </span>
              </span>
            </div>

            <div className="py-[15px] border-b border-[#eee]">
              <span className="text-[14px] font-normal leading-[20px] text-[#666]">Donations will go to <b>HANA CHIN ZI YING</b> via <b>GIVE Healthcare</b></span>
            </div>

            <div className="flex gap-3 mt-6">
              <div className="flex flex-col gap-3 w-full">
                <button className="w-full cursor-pointer bg-[#EB008C] text-white font-semibold py-2 rounded-[8px] shadow transition duration-200 hover:bg-[#c20074] hover:scale-105 flex items-center justify-center gap-2">
                  <GiSelfLove className="text-[20px]" />
                  Please Donate
                </button>
                <button className="w-full cursor-pointer bg-[#00b49b] text-white font-semibold py-2 rounded-[8px] shadow transition duration-200 hover:bg-[#008f7a] hover:scale-105 flex items-center justify-center gap-2">
                  <IoMdCopy className="text-[20px]" />
                  Copy Link Share
                </button>
              </div>
            </div>
            <div className="campaign-trust-labels-container py-[20px] my-[20px] justify-start flex flex-col gap-2 border-y border-[#eee]">
              <div className="w-fit flex items-center gap-2 rounded-full border border-[#bfb2e6] bg-[#ece7fc] py-1 px-3 text-[12px] font-medium text-[#4b3299]">
                <MdOutlineVerified className="text-[#4b3299] text-[16px]" />
                Verified on 15/07/2025
              </div>
              <div className="w-fit flex items-center gap-2 rounded-full border border-[#bfb2e6] bg-[#ece7fc] py-1 px-3 text-[12px] font-medium text-[#4b3299]">
                <PiShieldCheckeredFill className="text-[#4b3299] text-[16px]" />
                Donation protected
              </div>
            </div>
            <div className="campaign-fundraiser-stats flex items-center justify-between w-full rounded-[10px] bg-white mt-[20px]">
              <Image
                src="https://res.cloudinary.com/dmajhtvmd/image/upload/w_300,c_scale/q_auto/ltmsradh7daa0kyurbm2.jpg"
                alt="info"
                width={36}
                height={40}
                className="object-cover rounded-[10px]"
              />

              <div className="upsell-content flex-1 pl-4">
                <h3 className="text-[16px] font-medium text-pink-600">
                  CCEP FOUNDATION
                </h3>
                <p className="text-[16px] font-medium text-[#999]">
                  24 Campaigns · Fundraiser since 2023
                </p>
              </div>
            </div>
          </div>

          <div className="trust-and-safety trust-and-safety--campaign bg-[#4b3299] p-[16px] rounded-[10px] mt-[20px]">
            <h3 className="text-[20px] text-white font-semibold mb-4">Trust and Safety</h3>
            <div className="flex flex-col">
              <div className="text-[14px] text-white rounded-[8px] border border-white/15 p-4 my-2 flex items-center gap-4">
                <span className="min-w-[40px] min-h-[40px] w-10 h-10 grid place-items-center rounded-full bg-white"><LiaUserShieldSolid className="text-[24px] text-[#4b3299]" /></span>
                Your donation is protected for 12 months by our Giving Guarantee
              </div>
              <div className="text-[14px] text-white rounded-[8px] border border-white/15 p-4 my-2 flex items-center gap-4">
                <span className="min-w-[40px] min-h-[40px] w-10 h-10 grid place-items-center rounded-full bg-white"><LuUserSearch className="text-[24px] text-[#4b3299]" /></span>
                This campaign was verified on 15.07.2025
              </div>
              <div className="text-[14px] text-white rounded-[8px] border border-white/15 p-4 my-2 flex items-center gap-4">
                <span className="min-w-[40px] min-h-[40px] w-10 h-10 grid place-items-center rounded-full bg-white"><PiAmbulanceBold className="text-[24px] text-[#4b3299]" /></span>
                All donations go directly to the hospital or nonprofit organisation
              </div>
              <div className="text-[14px] text-white rounded-[8px] border border-white/15 p-4 my-2 flex items-center gap-4">
                <span className="min-w-[40px] min-h-[40px] w-10 h-10 grid place-items-center rounded-full bg-white"><TbShieldLock className="text-[24px] text-[#4b3299]" /></span>
                All donations go directly to the hospital or nonprofit organisation
              </div>
            </div>
          </div>

          <div className="campaign-cta-testimonials bg-white p-[16px] rounded-[10px] mt-[20px]">
            <h3 className="text-[20px] font-semibold text-[#333] mb-4">Testimonials</h3>
            <div className="testimonial-item bg-white py-3 rounded-[10px] mb-4 flex items-start gap-4">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Donor 1" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <span className="block text-[15px] font-semibold text-[#333]">Nguyen Thi Hoa</span>
                <p className="text-[14px] text-gray-700 mt-1">
                  "This campaign has changed our lives. Thank you for your support!"
                </p>
              </div>
            </div>
            <div className="testimonial-item bg-white py-3 rounded-[10px] mb-4 flex items-start gap-4">
              <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="Donor 2" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <span className="block text-[15px] font-semibold text-[#333]">Tran Van Binh</span>
                <p className="text-[14px] text-gray-700 mt-1">
                  "I am so happy to see the impact of my donation."
                </p>
              </div>
            </div>
          </div>

          <div className="campaign-cta-donors bg-white p-[16px] rounded-[10px] mt-[20px]">
            <h3 className="text-[20px] font-semibold text-[#333] mb-4">Recent Donors</h3>
            <div className="testimonial-item bg-white py-3 rounded-[10px] mb-4 flex items-start gap-4">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Donor 1" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <span className="block text-[15px] font-semibold text-[#333]">Nguyen Thi Hoa</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[15px] font-bold text-[#666]">₫1,000,000</span>
                  <span className="text-[13px] text-gray-500">2 hours ago</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-white py-3 rounded-[10px] mb-4 flex items-start gap-4">
              <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="Donor 2" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <span className="block text-[15px] font-semibold text-[#333]">Tran Van Binh</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[15px] font-bold text-[#666]">₫500,000</span>
                  <span className="text-[13px] text-gray-500">5 hours ago</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item bg-white py-3 rounded-[10px] mb-4 flex items-start gap-4">
              <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="Donor 2" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <span className="block text-[15px] font-semibold text-[#333]">Trunglb</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[15px] font-bold text-[#666]">₫10,000</span>
                  <span className="text-[13px] text-gray-500">2 hours ago</span>
                </div>
              </div>
            </div>
            <div className="text-[14px] text-[#666] font-semibold text-center mt-2"><b>+ 2092 givers</b> have donated to this campaign</div>
          </div>

          <div className="campaign-extra-details__section bg-white p-[16px] rounded-[10px] mt-[20px]">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <VscVerifiedFilled className="text-[16px] text-[#74ae3b]" />
                <span className="text-[14px] font-bold text-[#74ae3b]">Verified by</span>
                <span className="text-[14px] font-bold text-[#eb008c]">GIVE Healthcare</span>
              </div>
              <div className="text-[14px] text-[#666]">
                Our verification process involves contacting and meeting the fundraiser as well as the beneficiary, reviewing financial, medical, and other applicable documents that offer evidence of the need.
                <b className="text-[#eb008c] cursor-pointer"> LEARN MORE</b>
              </div>
            </div>
          </div>

          <div className="campaign-support bg-white p-[16px] rounded-[10px] mt-[20px] flex items-center justify-between p-[15px] cursor-pointer">
            <h3 className="text-[16px] text-[#444] font-bold">Contact Support</h3>
            <IoIosArrowForward className="text-[32px] text-gray-500 cursor-pointer" />
          </div>

        </div>
      </div>
    </div>


  );
};

export default DetailPage;
