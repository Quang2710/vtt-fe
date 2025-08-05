import React, { useState, useEffect } from "react";
import { fetcher } from "../../libs/fetcher";

const HelpFaqs: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  const fetchFaqs = async (searchValue = "") => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page: "1", pageSize: "100" });
      if (searchValue) params.append("search", searchValue);
      const data = await fetcher(`/setting/faqs?${params.toString()}`);
      setFaqs(Array.isArray(data) ? data : []);
    } catch {
      setFaqs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  useEffect(() => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    const timeout = setTimeout(() => {
      fetchFaqs(search);
    }, 400);
    setDebounceTimeout(timeout);
  }, [search]);


  return (
    <div className="faqs-container p-5 flex flex-col h-[92%]">
      <div className="font-bold text-xl mb-4">Popular Questions</div>
      <div
        className="flex-1 overflow-y-auto mb-4"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#4b3299 #f7f7f7',
        }}
      >
        {loading ? (
          <div className="text-[#888] text-sm mt-8">Loading...</div>
        ) : faqs.length === 0 ? (
          <div className="text-[#888] text-sm mt-8">No questions found.</div>
        ) : (
          faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id || idx}
                className={`mb-6 bg-white rounded cursor-pointer border border-[#e5e7eb] hover:border-[#4b3299] transition-all duration-300`}
                style={{
                  borderRadius: 4,
                  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                  transition: 'box-shadow 0.3s'
                }}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 4px 12px, rgba(0, 0, 0, 0.28) 0px 2px 8px'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}
              >
                <div className="font-semibold text-[#4b3299] mb-1 text-base px-4 pt-3">{faq.question}</div>
                <div className="text-[#333] text-sm opacity-80 px-4 pb-3">This is a short description for FAQ. Click to view more.</div>
                {isOpen && (
                  <div className="text-[#333] text-sm px-4 pb-3 pt-1 border-t border-[#eee] animate-fadein" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                )}
              </div>
            );
          })
        )}
        <style>{`
          .faqs-container .overflow-y-auto::-webkit-scrollbar {
            width: 6px;
            background: #f7f7f7;
            border-radius: 8px;
          }
          .faqs-container .overflow-y-auto::-webkit-scrollbar-thumb {
            background: #cfc6e6;
            border-radius: 8px;
          }
          .faqs-container .overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: #4b3299;
          }
        `}</style>
      </div>
      <div className="w-full flex items-center mt-auto">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Type to search questions..."
          className="w-full px-4 py-3 border border-[#e5e7eb] rounded-2xl bg-[#f7f7f7] text-base focus:outline-none focus:border-[#4b3299] shadow-sm"
          style={{ boxSizing: 'border-box', fontSize: '16px', borderRadius: '24px' }}
        />
      </div>
    </div>
  );
};

export default HelpFaqs;
