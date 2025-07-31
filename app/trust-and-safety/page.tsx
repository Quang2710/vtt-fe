"use client";
import Image from "next/image";
import { BsShieldLock, BsUmbrella } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { RiShieldStarLine, RiUserSearchLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

const TrustAndSafety = () => (
  <section className="trust-and-safety-page">
    <div className="trust-and-safety-page__section flex justify-center items-end h-[450px] bg-[#F4F4F4]">
      <div className="bg-[#4b3299] w-[80%] h-[98%] rounded-[16px] p-8 mt-8 flex justify-center items-center flex-col">
        <svg
          data-v-5fbcb44f=""
          width="100"
          height="79"
          viewBox="0 0 100 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            data-v-5fbcb44f=""
            d="M37.043 21.805C37.043 26.2796 37.0311 30.7518 37.043 35.2236C37.1024 42.6358 42.325 49.9251 49.825 52.058C50.0483 52.1197 50.2383 52.2337 50.5423 52.1577C57.9283 50.2055 63.669 43.0255 63.6903 35.1288V27.5166C63.6974 27.3599 63.695 27.3219 63.7235 27.1675C63.9682 25.8517 65.8183 25.1464 66.8776 26.1106C67.2671 26.4645 67.4737 26.9846 67.4998 27.5166V35.1331C67.476 44.3127 61.1559 53.0527 52.0578 55.689C51.8013 55.7626 51.5448 55.8315 51.2859 55.8956L50.8275 56.012C50.1197 56.1592 49.3977 55.898 48.6757 55.689C40.1114 53.2048 33.5377 44.9395 33.2453 35.8171C33.2381 35.5891 33.2358 35.3611 33.2334 35.1331V19.902C33.2809 18.8808 34.1121 18.0448 35.1381 17.9973C37.2733 17.9973 39.4131 18.1018 41.4176 17.508C44.5194 16.5889 47.196 14.354 48.6589 11.4446C48.6589 11.4446 48.7088 11.3544 48.7349 11.3045C49.5187 10.1288 51.421 10.1502 52.0931 11.4802C52.1169 11.5277 52.1406 11.5729 52.1644 11.6204C54.1475 15.3966 58.2608 17.9855 62.6858 17.9946H65.5928C67.0986 18.0635 68.0771 19.9968 66.9988 21.1795C66.7209 21.4859 66.3481 21.6925 65.9419 21.7685C65.7876 21.797 65.7472 21.7947 65.5928 21.8018C63.1608 21.8018 60.7288 21.8635 58.4251 21.2128C55.2616 20.3198 52.3973 18.4055 50.3642 15.8215C47.4809 19.4838 42.8426 21.7923 38.0473 21.8018H37.0403L37.043 21.805ZM56.1476 29.419C57.5584 29.5045 58.6034 31.3736 57.4871 32.6016C57.4657 32.6253 57.4443 32.6443 57.4253 32.6681L49.8113 40.2821C49.5691 40.5148 49.4741 40.5623 49.296 40.6478C48.6452 40.9661 47.814 40.8687 47.2511 40.4032C47.1893 40.351 47.1751 40.3391 47.1181 40.2821L43.311 36.4773C42.5272 35.6532 42.6388 34.1617 43.634 33.5275C44.356 33.0668 45.3677 33.1808 46.0042 33.7864L48.4647 36.2469L54.7326 29.9791C54.7326 29.9791 55.495 29.4138 56.1481 29.4233L56.1476 29.419Z"
            fill="white"
          ></path>{" "}
          <g data-v-5fbcb44f="" clip-path="url(#clip0_1198_1953)">
            <path
              data-v-5fbcb44f=""
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.3715 9.13536C17.1219 15.553 12.6942 21.9391 18.2074 30.518C17.7162 18.862 24.3208 19.5177 20.3715 9.13536ZM20.0606 12.3403C19.0784 18.4972 15.2354 21.6081 17.6137 27.2109C16.2652 18.9041 19.0528 20.5848 20.0606 12.3403Z"
              fill="white"
            ></path>{" "}
            <path
              data-v-5fbcb44f=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.1667 21.2318C10.1638 28.8605 9.51786 37.3555 17.7109 41.7472C12.3084 31.4073 17.8754 28.1814 10.1667 21.2318ZM11.306 24.3923C13.2257 30.4653 11.353 35.4733 15.6529 39.5237C10.9328 32.8135 14.0188 32.3336 11.306 24.3923Z"
              fill="white"
            ></path>{" "}
            <path
              data-v-5fbcb44f=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.06152 38.0109C10.4195 45.086 13.4051 52.9542 22.0192 52.3776C13.0332 46.1171 16.3692 40.0228 7.06152 38.0109ZM9.39232 40.1611C13.5054 44.6059 14.1624 50.3235 19.6784 51.2737C12.9237 47.8835 15.3052 45.8581 9.39232 40.1611Z"
              fill="white"
            ></path>{" "}
            <path
              data-v-5fbcb44f=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.6558 55.1571C17.4927 59.4868 23.4034 65.1841 30.361 59.5072C20.3078 59.0794 20.3095 51.4539 11.6558 55.1571ZM14.4583 55.7935C19.875 57.4637 22.8989 62.2001 27.5476 59.9142C20.4686 60.7705 21.6853 57.6724 14.4583 55.7935Z"
              fill="white"
            ></path>{" "}
            <path
              data-v-5fbcb44f=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.9205 67.7389C29.5281 68.3964 36.941 69.8758 40.0423 60.7232C31.55 66.1203 28.2788 59.3689 22.9205 67.7389ZM25.5602 66.6848C30.6555 64.9727 35.1535 67.58 38.2929 62.9262C32.8858 67.8408 32.2056 64.2104 25.5602 66.6848Z"
              fill="white"
            ></path>
          </g>{" "}
          <g data-v-5fbcb44f="" clip-path="url(#clip1_1198_1953)">
            <path
              data-v-5fbcb44f=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M80.3628 9.13536C83.6124 15.553 88.0402 21.9391 82.527 30.518C83.0182 18.862 76.4136 19.5177 80.3628 9.13536ZM80.6738 12.3403C81.656 18.4972 85.499 21.6081 83.1206 27.2109C84.4692 18.9041 81.6816 20.5848 80.6738 12.3403Z"
              fill="white"
            ></path>{" "}
            <path
              data-v-5fbcb44f=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M90.5676 21.2318C90.5706 28.8605 91.2165 37.3555 83.0235 41.7472C88.426 31.4073 82.8589 28.1814 90.5676 21.2318ZM89.4284 24.3923C87.5087 30.4653 89.3813 35.4733 85.0815 39.5237C89.8016 32.8135 86.7156 32.3336 89.4284 24.3923Z"
              fill="white"
            ></path>{" "}
            <path
              data-v-5fbcb44f=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M93.6729 38.0109C90.3149 45.086 87.3293 52.9542 78.7152 52.3776C87.7011 46.1171 84.3651 40.0228 93.6729 38.0109ZM91.3421 40.1611C87.229 44.6059 86.572 50.3235 81.056 51.2737C87.8107 47.8835 85.4292 45.8581 91.3421 40.1611Z"
              fill="white"
            ></path>{" "}
            <path
              data-v-5fbcb44f=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M89.0785 55.1571C83.2416 59.4868 77.3309 65.1841 70.3734 59.5072C80.4265 59.0794 80.4248 51.4539 89.0785 55.1571ZM86.2761 55.7935C80.8593 57.4637 77.8355 62.2001 73.1867 59.9142C80.2658 60.7705 79.0491 57.6724 86.2761 55.7935Z"
              fill="white"
            ></path>{" "}
            <path
              data-v-5fbcb44f=""
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M77.8139 67.7389C71.2063 68.3964 63.7934 69.8758 60.692 60.7232C69.1844 66.1203 72.4556 59.3689 77.8139 67.7389ZM75.1742 66.6848C70.0789 64.9727 65.5809 67.58 62.4414 62.9262C67.8485 67.8408 68.5287 64.2104 75.1742 66.6848Z"
              fill="white"
            ></path>
          </g>{" "}
          <defs data-v-5fbcb44f="">
            <clipPath data-v-5fbcb44f="" id="clip0_1198_1953">
              <rect
                data-v-5fbcb44f=""
                width="55.6257"
                height="65.9746"
                fill="white"
                transform="translate(0.734375 14.397) rotate(-15)"
              ></rect>
            </clipPath>{" "}
            <clipPath data-v-5fbcb44f="" id="clip1_1198_1953">
              <rect
                data-v-5fbcb44f=""
                width="55.6257"
                height="65.9746"
                fill="white"
                transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 100 14.397)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        <h2 className="text-[62px] font-bold mb-4 bg-gradient-to-b from-[#FFF] via-[#B9A3FF] to-[#B9A3FF] bg-clip-text text-transparent">
          Trust and Safety
        </h2>
        <p className="text-[24px] text-[#fff] w-[80%] text-center opacity-70">
          Since 2009, Give.Asia has raised more than $100 million in donations
          for our beneficiaries. Learn how we protect our donors and keep our
          community safe.
        </p>
      </div>
    </div>
    <div className="trust-and-safety-page__section bg-white w-full flex flex-col justify-center items-center pt-[130px] pb-[80px]">
      <div className="trust-and-safety-page__section__row w-[75%] flex justify-around items-center mb-[60px]">
        <div className="trust-and-safety-page_item w-[80px] h-[80px] rounded-full bg-white overflow-hidden shadow-[0px_1px_12px_0px_rgba(0,0,0,0.11)] flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/footer/charities/sos.jpg"
            alt="sos"
            width={80}
            height={80}
            quality={100}
            className="object-contain w-[70%] h-[70%]"
          />
        </div>
        <div className="trust-and-safety-page_item w-[80px] h-[80px] rounded-full bg-white overflow-hidden shadow-[0px_1px_12px_0px_rgba(0,0,0,0.11)] flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/footer/charities/redcross.jpg"
            alt="sos"
            width={80}
            height={80}
            className="object-contain w-[70%] h-[70%]"
          />
        </div>
        <div className="trust-and-safety-page_item w-[80px] h-[80px] rounded-full bg-white overflow-hidden shadow-[0px_1px_12px_0px_rgba(0,0,0,0.11)] flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/footer/charities/wfp.jpg"
            alt="sos"
            width={80}
            height={80}
            className="object-contain w-[70%] h-[70%]"
          />
        </div>
        <div className="trust-and-safety-page_item w-[80px] h-[80px] rounded-full bg-white overflow-hidden shadow-[0px_1px_12px_0px_rgba(0,0,0,0.11)] flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/footer/charities/charity-4.jpg"
            alt="sos"
            width={80}
            height={80}
            className="object-contain w-[70%] h-[70%]"
          />
        </div>
      </div>
      <h1 className="w-[50%] text-[48px] font-bold mb-0 bg-gradient-to-b from-[#967DE2] to-[#4E349F] bg-clip-text text-transparent text-center">
        Trusted by millions of donors and thousands of non-profits
      </h1>
      <div className="trust-and-safety-page__section__row w-[75%] flex justify-around items-center mt-[60px]">
        <div className="trust-and-safety-page_item w-[80px] h-[80px] rounded-full bg-white overflow-hidden shadow-[0px_1px_12px_0px_rgba(0,0,0,0.11)] flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/footer/charities/sc-usa.jpg"
            alt="sos"
            width={80}
            height={80}
            quality={100}
            className="object-contain w-[70%] h-[70%]"
          />
        </div>
        <div className="trust-and-safety-page_item w-[80px] h-[80px] rounded-full bg-white overflow-hidden shadow-[0px_1px_12px_0px_rgba(0,0,0,0.11)] flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/footer/charities/sa.jpg"
            alt="sos"
            width={80}
            height={80}
            className="object-contain w-[70%] h-[70%]"
          />
        </div>
        <div className="trust-and-safety-page_item w-[80px] h-[80px] rounded-full bg-white overflow-hidden shadow-[0px_1px_12px_0px_rgba(0,0,0,0.11)] flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/footer/charities/wwf.jpg"
            alt="sos"
            width={80}
            height={80}
            className="object-contain w-[70%] h-[70%]"
          />
        </div>
        <div className="trust-and-safety-page_item w-[80px] h-[80px] rounded-full bg-white overflow-hidden shadow-[0px_1px_12px_0px_rgba(0,0,0,0.11)] flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/home/footer/charities/spca.jpg"
            alt="sos"
            width={80}
            height={80}
            className="object-contain w-[70%] h-[70%]"
          />
        </div>
      </div>
    </div>
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

    <div className="past-story-container w-full px-[80px] py-[8%] flex flex-col items-center">
      <h1 className="w-[70%] text-[48px] font-bold mb-0 bg-gradient-to-b from-[#967DE2] to-[#4E349F] bg-clip-text text-transparent text-center">
        Past Stories
      </h1>
      <p className="w-[70%] text-center text-[20px] text-[#4b3299] mx-[12px] my-[24px]">
        More than 2 million givers have given hope to over 20 thousand
        campaigns. Here are some of the stories that evoke our collective
        humanity.
      </p>

      <div className="trust-and-safety-banners flex gap-4 justify-start items-start">
        <div className="banner-items w-1/3 min-w-[320px] max-w-[380px] rounded-[16px] overflow-hidden shadow bg-white flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <div className="relative h-[180px] w-full">
            <img
              src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/static_pages/how_we_work/kaylee_kayla.png"
              alt="Kaylee and Kayla"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4b3299]"></div>
          </div>
          <div className="bg-[#4b3299] flex flex-col pt-4 flex-1">
            <div className="flex justify-center items-center gap-2 mb-3 px-5">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/women/3.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
              </div>
              <div className="ml-2 flex flex-col leading-tight  px-5">
                <p className="text-white font-semibold text-[14px] mb-0">
                  S$510,390 Raised
                </p>
                <span className="text-white text-[12px] opacity-50 mt-[-2px]">
                  8,316 Givers
                </span>
              </div>
            </div>
            <div className="flex items-start mb-2  px-5">
              <span className="text-[40px] leading-[1] text-white mr-2 select-none">
                “
              </span>
              <span className="text-white text-[16px] font-bold leading-snug">
                We will forever be indebted to you for making a positive
                difference in our lives when we needed it the most.
                <div className="text-white text-[12px] mb-3">
                  <br />
                  <span className="font-semibold">Dante</span>
                  <br />
                  <span className="font-medium opacity-50">
                    Father of Kaylee and Kayla
                  </span>
                </div>
              </span>
            </div>

            <button className="w-full border-t border-[#ffffff26] text-white text-center py-3 text-[16px] font-semibold flex items-center justify-between gap-2 cursor-pointer transition  px-5">
              Read Kaylee and Kayla’s story
              <IoIosArrowForward className="text-[20px]" />
            </button>
          </div>
        </div>
        <div className="banner-items w-1/3 min-w-[320px] max-w-[380px] rounded-[16px] overflow-hidden shadow bg-white flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <div className="relative h-[180px] w-full">
            <img
              src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/static_pages/how_we_work/ciaran.png"
              alt="Ciaran"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4b3299]"></div>
          </div>
          <div className="bg-[#4b3299] flex flex-col pt-4 flex-1">
            <div className="flex justify-center items-center gap-2 mb-3 px-5">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/women/3.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
              </div>
              <div className="ml-2 flex flex-col leading-tight  px-5">
                <p className="text-white font-semibold text-[14px] mb-0">
                  S$210,844 Raised
                </p>
                <span className="text-white text-[12px] opacity-50 mt-[-2px]">
                  2,338 Givers
                </span>
              </div>
            </div>
            <div className="flex items-start mb-2  px-5">
              <span className="text-[40px] leading-[1] text-white mr-2 select-none">
                “
              </span>
              <span className="text-white text-[16px] font-bold leading-snug">
                We are so happy to finally have him home with us.
                <div className="text-white text-[12px] mb-3">
                  <br />
                  <span className="font-semibold">Brandon Moran</span>
                  <br />
                  <span className="font-medium opacity-50">
                    Father of Ciaran
                  </span>
                </div>
              </span>
            </div>

            <button className="w-full border-t border-[#ffffff26] text-white text-center py-3 text-[16px] font-semibold flex items-center justify-between gap-2 cursor-pointer transition  px-5">
              Read Ciaran's story
              <IoIosArrowForward className="text-[20px]" />
            </button>
          </div>
        </div>
        <div className="banner-items w-1/3 min-w-[320px] max-w-[380px] rounded-[16px] overflow-hidden shadow bg-white flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <div className="relative h-[180px] w-full">
            <img
              src="https://res.cloudinary.com/dmajhtvmd/image/upload/assets/images/static_pages/how_we_work/yu-xuan.png"
              alt="Ciaran"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4b3299]"></div>
          </div>
          <div className="bg-[#4b3299] flex flex-col pt-4 flex-1">
            <div className="flex justify-center items-center gap-2 mb-3 px-5">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/women/3.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                  className="w-7 h-7 rounded-full border-2 border-white"
                  alt=""
                />
              </div>
              <div className="ml-2 flex flex-col leading-tight  px-5">
                <p className="text-white font-semibold text-[14px] mb-0">
                  S$366,884 Raised
                </p>
                <span className="text-white text-[12px] opacity-50 mt-[-2px]">
                  6,577 Givers
                </span>
              </div>
            </div>
            <div className="flex items-start mb-2  px-5">
              <span className="text-[40px] leading-[1] text-white mr-2 select-none">
                “
              </span>
              <span className="text-white text-[16px] font-bold leading-snug">
                It is so amazing, it’s the first time I can feel her heartbeat.
                <div className="text-white text-[12px] mb-3">
                  <br />
                  <span className="font-semibold">Felicia Wong</span>
                  <br />
                  <span className="font-medium opacity-50">
                    Mother of Yu Xuan
                  </span>
                </div>
              </span>
            </div>

            <button className="w-full border-t border-[#ffffff26] text-white text-center py-3 text-[16px] font-semibold flex items-center justify-between gap-2 cursor-pointer transition  px-5">
              Read Yu Xuan's story
              <IoIosArrowForward className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>

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
