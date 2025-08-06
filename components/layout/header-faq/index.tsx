import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

const HelpContact = dynamic(() => import("@/components/help/HelpContact"), { ssr: false });

export default function HeaderFaq() {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <header
        className="w-full border-b border-[#ede9f7] bg-white"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          position: "relative",
          paddingRight: 20,
          paddingLeft: 20,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dmajhtvmd/image/upload/v1666583023/assets/images/home/giveasia-logo.webp"
              width={48}
              height={38}
              alt="GiveAsia Logo"
              className="rounded-md"
            />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/faq"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#ede9f7] text-[#4b3299] font-semibold hover:bg-[#e5e7eb] transition"
          >
            Give.Asia
          </Link>
          <button
            className="px-4 py-2 rounded-lg bg-[#4b3299] text-white font-semibold hover:bg-[#6c4edb] transition shadow"
            onClick={() => setShowContact(true)}
          >
            Contact Us
          </button>
        </div>
      </header>
      <AnimatePresence>
        {showContact && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-lg p-4 w-[360px]"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="relative">
              <button
                className="w-[40px] h-[40px] absolute -top-6 -right-6 rounded-[50%] shadow p-1 text-[#fff] font-bold bg-[#4b3299] cursor-pointer hover:bg-[#6c4edb] transition"
                onClick={() => setShowContact(false)}
                aria-label="Close"
              >
                ×
              </button>
              <HelpContact />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
