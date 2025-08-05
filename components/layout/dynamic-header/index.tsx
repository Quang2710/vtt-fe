"use client";
import { usePathname } from "next/navigation";
import HeaderV2 from "../header-v2";
import Header from "../header";
import HeaderFaq from "../header-faq";

export default function DynamicHeader() {
  const pathname = usePathname();
   if (pathname.includes("/faq") ) {
    return <HeaderFaq />;
  }
  return pathname.includes("/fundraise/new") ? <HeaderV2 /> : <Header />;
}
