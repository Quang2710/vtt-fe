import { useRouter, usePathname } from "next/navigation";
import { IoArrowBack, IoClose } from "react-icons/io5";

export default function HeaderV2() {
  const router = useRouter();
  const pathname = usePathname();

  const isThanksSharing =
    pathname.includes("/thanks-sharing") || pathname.includes("/thank-sharing");

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 border-b border-[#eee] bg-white">
      <div>
        {!isThanksSharing && (
          <button
            onClick={() => router.back()}
            className="flex items-center text-[24px] text-[#333] cursor-pointer"
            aria-label="Quay lại"
          >
            <IoArrowBack />
          </button>
        )}
      </div>
      <button
        onClick={() => {
          router.push("/fundraise");
          localStorage.removeItem("fundraiseAnswers");
        }}
        className="flex items-center text-[28px] text-[#333] cursor-pointer"
        aria-label="Đóng"
      >
        <IoClose />
      </button>
    </header>
  );
}
