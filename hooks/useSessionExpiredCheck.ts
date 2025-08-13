import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";

const protectedRoutes = [
  "/profile",
  "/donate",
];

export function useSessionExpiredCheck() {
  const sessionExpired = useAuthStore((s) => s.sessionExpired);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionExpired &&
      protectedRoutes.some((route) => window.location.pathname.startsWith(route))
    ) {
      window.location.href = "/login";
    }
  }, [sessionExpired]);
}