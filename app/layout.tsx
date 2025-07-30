import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
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
  console.log('quang test');
  return (
    <html lang="en" className={lexendDeca.className}>
      <body><Header />{children}<Footer /></body>
    </html>
  );
}
