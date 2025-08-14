"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { fetcher } from "@/libs/fetcher";
import { useUserStore } from "@/stores/userStore";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchUserAndRedirect() {
      const token = searchParams.get("token");
      if (token) {
        Cookies.set("token", token, { path: "/", expires: 7 });
      }
      try {
        const user = await fetcher("/auth/get-user");
        useUserStore.getState().setUser(user);
        router.replace("/");
      } catch {
        router.replace("/login");
      }
    }
    fetchUserAndRedirect();
  }, [router, searchParams]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-600 text-sm">Logging in...</p>
    </div>
  );
}
