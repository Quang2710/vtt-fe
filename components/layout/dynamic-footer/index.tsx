"use client";
import { usePathname } from "next/navigation";
import Footer from "../footer";

export default function DynamicFooter() {
  const pathname = usePathname();
  const excludedUrls = ["/donate", "/fundraise/new"];
  const isExcluded = excludedUrls.some(url => pathname.includes(url));
  return isExcluded ? '' : <Footer />;
}
