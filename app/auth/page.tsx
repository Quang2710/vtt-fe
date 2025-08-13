"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetcher } from "@/libs/fetcher";
import { useUserStore } from "@/stores/userStore";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    async function fetchUserAndRedirect() {
      try {
        const user = await fetcher("/auth/get-user");
        useUserStore.getState().setUser(user);
        router.replace("/");
      } catch {
        router.replace("/login");
      }
    }
    fetchUserAndRedirect();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-600 text-sm">Logging in...</p>
    </div>
  );
}
