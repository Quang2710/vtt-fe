"use client";
import Blog from "@/components/blog";
import Dropdown from "@/components/dropdown";
import { div } from "framer-motion/client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { fetcher } from "@/libs/fetcher";

type Campaign = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const statusOptions = [
  { key: "ongoing", label: "Ongoing" },
  { key: "almost", label: "Almost there" },
  { key: "finished", label: "Finished" },
  { key: "ending_soon", label: "Ending Soon" },
];
const sortByOptions = [
  { key: "trending", label: "Trending" },
  { key: "newest", label: "Newest" },
  { key: "last_update", label: "Last Update" },
];

const Browse = () => {
  const router = useRouter();
  const [filterObject, setFilterObject] = useState<any>({
    category: "all",
    sortBy: "trending",
    status: "ongoing",
    country: null,
  });
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalItem, setTotalItem] = useState(0);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setPage(1);
    const filterParam = filterObject.status ? `&filter=${filterObject.status}` : "";
    const sortParam = filterObject.sortBy ? `&sort=${filterObject.sortBy}` : "";
    fetcher(`/setting/browser?page=1&pageSize=6${filterParam}${sortParam}`)
      .then((res) => {
        setCampaigns(res.data || []);
        setTotalItem(res.meta?.totalItem || 0);
        setLoading(false);
      })
      .catch(() => {
        setError("Error loading campaigns");
        setLoading(false);
      });
  }, [filterObject.status, filterObject.sortBy]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !isFetchingMore &&
        campaigns.length < totalItem
      ) {
        setIsFetchingMore(true);
        const nextPage = page + 1;
        const filterParam = filterObject.status ? `&filter=${filterObject.status}` : "";
        const sortParam = filterObject.sortBy ? `&sort=${filterObject.sortBy}` : "";
        fetcher(`/setting/browser?page=${nextPage}&pageSize=6${filterParam}${sortParam}`)
          .then((res) => {
            setCampaigns((prev) => [...prev, ...(res.data || [])]);
            setPage(nextPage);
            setIsFetchingMore(false);
          })
          .catch(() => {
            setIsFetchingMore(false);
          });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [campaigns, totalItem, page, isFetchingMore, filterObject.status, filterObject.sortBy]);

  return (
    <div className="w-full px-2 sm:px-4 md:px-8 lg:px-[10%] xl:px-[10%] py-4">
      <div className="personal w-full flex border-pink-600 mb-2">
        <div className="p-2 sm:p-[10px] text-pink-600 font-bold border-pink-600 text-base sm:text-lg">
          PERSONAL CAUSES
        </div>
      </div>
      <div className="filter-container flex flex-col sm:flex-row w-full gap-4 sm:gap-4 p-2 sm:p-[10px] mb-4 sm:mb-[25px]">
        <div className="filter-dropdown flex justify-end items-end flex-row gap-2 sm:gap-2 w-full">
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
        </div>
      </div>
      <div className="content-container w-full">
        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : campaigns.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <svg width="64" height="64" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#F3F3F3"/>
              <path d="M32 20v16" stroke="#B4B4B4" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="32" cy="44" r="2" fill="#B4B4B4"/>
            </svg>
            <div className="mt-4 text-lg font-semibold">No campaigns found</div>
            <div className="mt-2 text-sm">Try changing your filter or check back later.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4">
            {campaigns.map((cat, idx) => (
              <Blog
                onClick={() => {
                  router.push(`/detail-blog/${cat.id}`);
                }}
                key={`${cat.id}-${idx}`}
                classes="w-full min-w-[220px] md:min-w-[240px] p-2 min-h-[420px] cursor-pointer"
                item={{
                  ...cat,
                  title: cat.name,
                }}
              />
            ))}
          </div>
        )}
        {isFetchingMore && (
          <div className="text-center py-4 text-gray-500">Loading more...</div>
        )}
      </div>
    </div>
  );
};

export default Browse;
