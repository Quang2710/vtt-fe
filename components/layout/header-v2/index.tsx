import { useRouter } from "next/navigation";
import { IoArrowBack, IoClose } from "react-icons/io5";

export default function HeaderV2() {
  const router = useRouter();
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 border-b border-[#eee] bg-white">
      <button
        onClick={() => router.back()}
        className="flex items-center text-[24px] text-[#333] cursor-pointer"
        aria-label="Quay lại"
      >
        <IoArrowBack />
      </button>
      <button
        onClick={() => router.back()}
        className="flex items-center text-[28px] text-[#333] cursor-pointer"
        aria-label="Đóng"
      >
        <IoClose />
      </button>
    </header>
  );
}
