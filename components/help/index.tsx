'use client';
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { GoQuestion } from "react-icons/go";
import HelpFaqs from "./HelpFaqs";
import HelpContact from "./HelpContact";

const HIDDEN_PATHS = [
  "/login",
  "/register",
  "/faq",
];

const HelpButton: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<'faqs' | 'contact'>('faqs');
  const [showPopup, setShowPopup] = useState(false);
  const [visible, setVisible] = useState(false);

  if (HIDDEN_PATHS.some(path => pathname.startsWith(path))) return null;

  React.useEffect(() => {
    if (open) {
      setShowPopup(true);
      setTimeout(() => setVisible(true), 10); 
    } else {
      setVisible(false);
      const timeout = setTimeout(() => setShowPopup(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <div style={{ position: "fixed", bottom: 32, right: 32, zIndex: 50 }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-[#4b3299] flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer text-white"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}
      >
        <GoQuestion className="text-white text-3xl cursor-pointer" style={{ pointerEvents: 'none' }} />
      </button>
      {showPopup && (
        <div
          className={`absolute right-0 mb-3 transition-all duration-500 ease-in-out ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          style={{ minWidth: 240, bottom: '100%' }}
        >
          <button
            className="cursor-pointer absolute -top-5 -right-5 w-10 h-10 flex items-center justify-center rounded-full bg-[#4b3299] hover:bg-[#6c4edb] text-white text-2xl font-bold transition shadow-lg border border-[#fff]"
            style={{ zIndex: 100 }}
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="relative">
            <div className="absolute right-6 -bottom-2 w-4 h-4 bg-white rotate-45 shadow" />
            <div className="bg-white rounded-xl px-0 py-0 text-[#4b3299] text-lg" style={{ height: 650, width: 360, boxShadow: '0 8px 32px 0 rgba(75,50,153,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)' }}>
              <div className="flex border-b border-[#eee]">
                <button
                  className={`cursor-pointer flex-1 py-3 px-4 text-base font-semibold transition-colors ${tab === 'faqs' ? 'text-[#4b3299] border-b-2 border-[#4b3299] bg-white' : 'text-[#888] bg-[#f7f7f7]'}`}
                  onClick={() => setTab('faqs')}
                  style={{ borderRadius: '12px 12px 0 0' }}
                >
                  FAQs
                </button>
                <button
                  className={`cursor-pointer flex-1 py-3 px-4 text-base font-semibold transition-colors ${tab === 'contact' ? 'text-[#4b3299] border-b-2 border-[#4b3299] bg-white' : 'text-[#888] bg-[#f7f7f7]'}`}
                  onClick={() => setTab('contact')}
                  style={{ borderRadius: '12px 12px 0 0' }}
                >
                  Contact us
                </button>
              </div>
              <div className="px-6 pt-4" style={{ position: 'relative', height: '100%' }}>
                <div
                  style={{ position: 'absolute', inset: 0, transition: 'opacity 0.3s, transform 0.3s', opacity: tab === 'faqs' ? 1 : 0, transform: tab === 'faqs' ? 'translateX(0)' : 'translateX(-24px)', pointerEvents: tab === 'faqs' ? 'auto' : 'none' }}
                >
                  <HelpFaqs />
                </div>
                <div
                  style={{ position: 'absolute', inset: 0, transition: 'opacity 0.3s, transform 0.3s', opacity: tab === 'contact' ? 1 : 0, transform: tab === 'contact' ? 'translateX(0)' : 'translateX(24px)', pointerEvents: tab === 'contact' ? 'auto' : 'none' }}
                >
                  <HelpContact />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpButton;
