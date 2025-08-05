"use client";
import Image from "next/image";
import PastStoriesSection from "./PastStoriesSection";
import { BsShieldLock, BsUmbrella } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { RiShieldStarLine, RiUserSearchLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

const TrustAndSafety = () => (
  <section className="trust-and-safety-page">
    {/* ...existing code... */}
    <div className="trust-and-safety-page__section bg-[#4b3299] px-[80px] py-[8%] flex justify-between items-center gap-8">
      <div className="giving-title w-[45%]">
        <div className="logo h-[64px] w-[64px] bg-white rounded-full flex items-center justify-center mb-4">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/v1663123698/assets/images/static_pages/giving_guarantee/giving-guarantee-purple.png"
            width={36}
            height={36}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <h2 className="text-[48px] mt-[20px] mb-[4px] bg-gradient-to-b from-[#FFF] to-[#B9A3FF] bg-clip-text text-transparent font-bold">
          Giving Guarantee
        </h2>
        <p className="text-[20px] text-white opacity-60">
          In the rare situation when something isn’t right, we guarantee you a
          refund for your donation.
        </p>
      </div>
      <div className="giving-content w-[45%] flex flex-col gap-6">
        <div className="rounded-[10px] p-5 flex items-center gap-3 border border-[#ffffff26]">
          <span className="w-[40px] h-[40px] flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#4b3299] font-bold text-[18px] shrink-0">
            12
          </span>
          <div>
            <div className="font-bold text-[14px] leading-[1.25] text-left text-white">
              12 Months of Donation Protection from Fraudulent campaigns
            </div>
            <div className="font-normal text-[14px] leading-[18px] text-left text-white pt-[2px] opacity-70">
              Every donation is protected and refundable up to 12 months from
              the day of the donation.
            </div>
          </div>
        </div>
        <div className="rounded-[10px] p-5 flex items-center gap-3 border border-[#ffffff26]">
          <span className="w-[40px] h-[40px] flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#4b3299] font-bold text-[18px] shrink-0">
            <TbWorld />
          </span>
          <div>
            <div className="font-bold text-[14px] leading-[1.25] text-left text-white">
              Worldwide Coverage
            </div>
            <div className="font-normal text-[14px] leading-[18px] text-left text-white pt-[2px] opacity-70">
              It doesn’t matter where you donate from, you are protected.
            </div>
          </div>
        </div>
        <div className="rounded-[10px] p-5 flex items-center gap-3 border border-[#ffffff26]">
          <span className="w-[40px] h-[40px] flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#4b3299] font-bold text-[18px] shrink-0">
            <BsUmbrella />
          </span>
          <div>
            <div className="font-bold text-[14px] leading-[1.25] text-left text-white">
              Protection for Any Fundraising Campaign
            </div>
            <div className="font-normal text-[14px] leading-[18px] text-left text-white pt-[2px] opacity-70">
              Whether it is a fundraising campaign for an individual or a
              charity, we will guarantee you a donation refund if something
              isn’t right.
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ...existing code... */}

    <div className="practice-developed-container w-full px-[80px] py-[8%] flex flex-col items-center">
      <h1 className="w-[70%] text-[48px] font-bold mb-0 bg-gradient-to-b from-[#967DE2] to-[#4E349F] bg-clip-text text-transparent text-center">
        Co-developed Code of Practice in Singapore
      </h1>
      <p className="w-[70%] text-center text-[20px] text-[#4b3299] mx-[12px] my-[24px]">
        Together with the Commissioner of Charities, we developed a set of best
        practices for crowdfunding platforms in Singapore. The Code is based on
        ensuring the legitimacy, accountability, and transparency of charitable
        appeals hosted on our platform.
      </p>
      <button className="cursor-pointer flex justify-center items-center text-[#4b3299] mx-auto px-6 py-2 rounded-[10px] border border-[#4b3299] text-[14px] font-semibold leading-6">
        READ CODE OF PRACTICE
      </button>
    </div>

    <div className="trust-and-safety-page__section bg-[#4b3299] px-[80px] py-[8%] flex justify-between items-center gap-8">
      <div className="giving-title w-[45%]">
        <div className="logo h-[64px] w-[64px] bg-white rounded-full flex items-center justify-center mb-4">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/v1660033455/assets/images/static_pages/trust_safe/stars.png"
            width={36}
            height={36}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <h2 className="text-[48px] mt-[20px] mb-[4px] bg-gradient-to-b from-[#FFF] to-[#B9A3FF] bg-clip-text text-transparent font-bold">
          Highest Standards
        </h2>
        <p className="text-[20px] text-white opacity-60">
          We follow a stringent code of practice that we co-created with the
          Commissioner of Charities in Singapore. We verify documents manually
          and conduct site visits to ensure that the needs of our beneficiaries
          are authentic.
        </p>
      </div>
      <div className="giving-content w-[45%] flex flex-col gap-6">
        <div className="rounded-[10px] p-5 flex items-center gap-3 border border-[#ffffff26]">
          <span className="w-[40px] h-[40px] flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#4b3299] font-bold text-[18px] shrink-0">
            <RiUserSearchLine />
          </span>
          <div>
            <div className="font-bold text-[14px] leading-[1.25] text-left text-white">
              100% Human-verified
            </div>
            <div className="font-normal text-[14px] leading-[18px] text-left text-white pt-[2px] opacity-70">
              All campaigns and documents are manually verified by Give.Asia
              team before any payout is processed.
            </div>
          </div>
        </div>
        <div className="rounded-[10px] p-5 flex items-center gap-3 border border-[#ffffff26]">
          <span className="w-[40px] h-[40px] flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#4b3299] font-bold text-[18px] shrink-0">
            <BsShieldLock />
          </span>
          <div>
            <div className="font-bold text-[14px] leading-[1.25] text-left text-white">
              Secured Encrypted Payments
            </div>
            <div className="font-normal text-[14px] leading-[18px] text-left text-white pt-[2px] opacity-70">
              Your credit card information is encrypted and not stored in our
              system. We partnered with leading payment processors to ensure
              your information is safe.
            </div>
          </div>
        </div>
        <div className="rounded-[10px] p-5 flex items-center gap-3 border border-[#ffffff26]">
          <span className="w-[40px] h-[40px] flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#4b3299] font-bold text-[18px] shrink-0">
            <FaRegHandshake />
          </span>
          <div>
            <div className="font-bold text-[14px] leading-[1.25] text-left text-white">
              1000+ Verified Nonprofit Organisations
            </div>
            <div className="font-normal text-[14px] leading-[18px] text-left text-white pt-[2px] opacity-70">
              Thousands of charities raise funds on our platform including Red
              Cross, World Food Programme and more.
            </div>
          </div>
        </div>
      </div>
    </div>

    <PastStoriesSection />

    <div className="get-to-now-container bg-[#F4F4F4] w-full px-[80px] py-[8%] flex flex-col items-center">
      <h1 className="w-[75%] text-[48px] font-bold mb-0 bg-gradient-to-b from-[#967DE2] to-[#4E349F] bg-clip-text text-transparent text-center">
        Get to know us better
      </h1>
      <p className="w-[70%] text-center text-[20px] text-[#4b3299] mx-[12px] my-[24px]">
        Read our weekly blog, get answers to frequently asked questions, or
        email us if you have more questions about trust and safety
      </p>
      <div className="blog-container w-[75%] flex justify-center items-start gap-4">
        <div className="content-left">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/static_pages/trust_safe/agent-orange.png"
            alt="sos"
            width={540}
            height={540}
          />
        </div>
        <div className="content-right">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/static_pages/trust_safe/how-we-work-bg.png"
            alt="sos"
            width={560}
            height={341}
            className="rounded-[8px]"
          />
          <div className="action-more flex gap-4 mt-6">
            <div className="questions w-[49%] rounded-[8px] p-[20px] bg-[#4b3299] cursor-pointer">
              <GoQuestion className="text-white text-[20px]" />
              <div className="text-white text-[16px] flex justify-between items-center gap-2">
                <div>
                  <p>
                    <b>Have more questions</b>
                  </p>
                  <span>Browse our FAQs</span>
                </div>
              <IoIosArrowForward className="text-[24px] flex-shrink-0 font-bold" />
              </div>
            </div>
            <div className="mail w-[49%] rounded-[8px] p-[20px] bg-[#4b3299] cursor-pointer">
              <MdMailOutline className="text-white text-[20px]" />
              <div className="text-white text-[16px] flex justify-between items-center gap-2">
                <div>
                  <p>
                    <b>Need more help?</b>
                  </p>
                  <span>Email us</span>
                </div>
              <IoIosArrowForward className="text-[24px] flex-shrink-0 font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TrustAndSafety;
