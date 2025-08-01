"use client";
import { usePathname } from "next/navigation";
import HeaderV2 from "../header-v2";
import Header from "../header";

export default function DynamicHeader() {
  const pathname = usePathname();
  return pathname.includes("/fundraise/new") ? <HeaderV2 /> : <Header />;
}
