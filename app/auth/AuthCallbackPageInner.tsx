"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { fetcher } from "@/libs/fetcher";
import { useUserStore } from "@/stores/userStore";

export default function AuthCallbackPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    async function fetchUserAndRedirect() {
      if (token) {
        console.log("Token received:", token);
        
        Cookies.set("token", token, { path: "/" });
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

  return null;
}