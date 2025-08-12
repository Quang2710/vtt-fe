"use client";
import { useAuthStore } from "@/stores/authStore";

const SessionExpiredModal = () => {
  const sessionExpired = useAuthStore((s) => s.sessionExpired);

  if (!sessionExpired) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl shadow-lg p-8 min-w-[320px] flex flex-col items-center">
        <div className="text-pink-600 font-semibold text-lg mb-2">
          Your session has expired
        </div>
        <div className="text-[#333] mb-4">
          Please log in again to continue using the service.
        </div>
        <button
          className="px-5 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 cursor-pointer"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Log in again
        </button>
      </div>
    </div>
  );
};

export default SessionExpiredModal;