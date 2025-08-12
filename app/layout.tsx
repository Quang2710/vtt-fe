import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import DynamicHeader from "@/components/layout/dynamic-header";
import DynamicFooter from "@/components/layout/dynamic-footer";
import HelpButton from "@/components/help";
import SessionExpiredModal from "@/components/SessionExpiredModal";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "WTT FE",
  description: "WTT FE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lexendDeca.className}>
      <body>
        <SessionExpiredModal /> 
        <DynamicHeader />
        {children}
        <DynamicFooter />
        <HelpButton />
      </body>
    </html>
  );
}
