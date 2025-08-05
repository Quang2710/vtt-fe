import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeaderFaq() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 border-b border-[#eee] bg-white">
      <div className="w-full lg:w-[20%] flex justify-center">
                <Link href={'/#'}>
                    <Image src={'https://res.cloudinary.com/dmajhtvmd/image/upload/v1666583023/assets/images/home/giveasia-logo.webp'} width={56} height={45} alt="logo" />
                </Link>
            </div>
    </header>
  );
}
