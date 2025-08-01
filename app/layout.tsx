import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import DynamicHeader from "@/components/layout/dynamic-header";
const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  display: "swap",
});

export const metadata = {
  title: "WTT FE",
  description: "WTT FE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lexendDeca.className}>
      <body><DynamicHeader />{children}<Footer /></body>
    </html>
  );
}
