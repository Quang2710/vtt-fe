"use client";
import Blog from "@/components/blog";
import Dropdown from "@/components/dropdown";
import { div } from "framer-motion/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const campaigns = [
  {
    id: 1,
    title: "From a Mother’s Heart: Help Leticia Fight for Her Life Elisabeth Macpal",
    author: "Henry Pascal",
    verified: true,
    raised: "₫6,349,295,031",
    goal: "₫6,926,988,281",
    percent: 91.65,
    description:
      "From a Mother’s Heart: Help Leticia Fight for Her Life My name is Elisabeth Macpal, and I am the mother of a beautiful little girl named Leticia Briella Magaline. She is just 1 yea...",
    image:
      "https://res.cloudinary.com/dmajhtvmd/image/upload/w_1200,h_630,c_fill,g_faces/q_auto/psj9wecittjtc3axwcum.jpg",
  },
  {
    id: 2,
    title: "Help Us Bring Our Father Home After a Sudden Stroke Abroad",
    author: "Aileen Koh",
    verified: true,
    raised: "₫1,199,175,690",
    goal: "₫1,471,218,750",
    percent: 81.54,
    description:
      "Help Us Bring Our Father Home After a Sudden Stroke Abroad On 27 June, I took my 89-year-old father on a short trip to Johor Bahru. It was meant to be a simple getaway of rest & re...",
    image:
      "https://res.cloudinary.com/dmajhtvmd/image/upload/w_1200,h_630,c_fill,g_faces/q_auto/vgjgd7c26c9uojiwrdyu.jpg",
  },
  {
    id: 3,
    title: "Two Tiny Fighters: Ethan and Evan’s Battle for Survival",
    author: "Louis Gan",
    verified: true,
    raised: "₫1,506,952,405",
    goal: "₫2,349,863,281",
    percent: 64.12,
    description:
      "Two Tiny Fighters: Extremely Premature Twins Ethan and Evan’s Battle for Survival Hi, my name is Louis. I’m a technician working in a pharmaceutical company, and my wife, Juliana, ...",
    image:
      "https://res.cloudinary.com/dmajhtvmd/image/upload/w_1200,h_630,c_fill,g_faces/q_auto/nqwn1x8wyqqoq1yjkvhk.jpg",
  },
  {
    id: 4,
    title: "Two Tiny Fighters: Ethan and Evan’s Battle for Survival",
    author: "Louis Gan",
    verified: true,
    raised: "₫1,506,952,405",
    goal: "₫2,349,863,281",
    percent: 64.12,
    description:
      "Two Tiny Fighters: Extremely Premature Twins Ethan and Evan’s Battle for Survival Hi, my name is Louis. I’m a technician working in a pharmaceutical company, and my wife, Juliana, ...",
    image:
      "https://res.cloudinary.com/dmajhtvmd/image/upload/w_1200,h_630,c_fill,g_faces/q_auto/nqwn1x8wyqqoq1yjkvhk.jpg",
  },
];

const categoriesOptions = [
  { key: "all", label: "All" },
  { key: "animals", label: "Animals" },
  { key: "education", label: "Education" },
  { key: "medical", label: "Medical" },
];

const statusOptions = [
  { key: "onGoing", label: "Ongoing" },
  { key: "almostThere", label: "Almost there" },
  { key: "finished", label: "Finished" },
  { key: "endingSoon", label: "Ending Soon" },
];
const sortByOptions = [
  { key: "trending", label: "Trending" },
  { key: "newest", label: "Newest" },
  { key: "lastUpdate", label: "Last Update" },
];
const contryOptions = [
  { key: "all", label: "All" },
  { key: "china", label: "China" },
  { key: "hongKong", label: "Hong Kong" },
  { key: "indonesia", label: "Indonesia" },
  { key: "japan", label: "Japan" },
  { key: "malaysia", label: "Malaysia" },
  { key: "singapore", label: "Singapore" },
  { key: "thailand", label: "Thailand" },
  { key: "vietnam", label: "Vietnam" },
];
const Browse = () => {
  const router = useRouter();
  const [filterObject, setFilterObject] = useState<any>({
    category: "all",
    sortBy: null,
    status: null,
    country: null,
  });

  return (
    <div className="mx-[18%] p-[20px]">
      <div className="personal w-full flex border-pink-600">
        <div className="p-[10px] text-pink-600 font-bold border-pink-600">
          PERSONAL CAUSES
        </div>
      </div>
      <div className="filter-container flex w-full p-[10px] mb-[25px]">
        <div className="filter-categories w-full">
          <label className="block text-[12px] font-medium text-[#999] mb-1">
            CATEGORIES
          </label>
          <div className="flex gap-2 cursor-pointer h-[40px]">
            {categoriesOptions.map((cat) => (
              <button
                key={cat.key}
                className={`px-3 py-1 rounded-[24px] transition-colors duration-150 border border-[#b4b4b4] cursor-pointer ${
                  filterObject.category === cat.key
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() =>
                  setFilterObject({ ...filterObject, category: cat.key })
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-dropdown flex gap-2 w-full">
          <Dropdown
            label="STATUS"
            options={statusOptions}
            selected={filterObject.status}
            onSelect={(value) =>
              setFilterObject({ ...filterObject, status: value })
            }
          />
          <Dropdown
            label="SORT BY"
            options={sortByOptions}
            selected={filterObject.sortBy}
            onSelect={(value) => setFilterObject({ ...filterObject, sortBy: value })}
          />
          <Dropdown
            label="COUNTRY"
            options={contryOptions}
            selected={filterObject.country}
            onSelect={(value) =>
              setFilterObject({ ...filterObject, country: value })
            }
          />
        </div>
      </div>
      <div className="content-container ">
        <div className="flex flex-wrap items-stretch">
          {campaigns.map((cat) => (
            <Blog
              onClick={() => {
                router.push(`/detail-blog/${cat.id}`);
              }}
              key={cat.id}
              classes="basis-1/3 min-w-[240px] p-2 min-h-[420px] cursor-pointer"
              item={cat}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
