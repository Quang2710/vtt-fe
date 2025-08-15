import { useAuthStore } from "@/stores/authStore";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetcher<T = any>(
  endpoint: string,
  init: RequestInit & { skipAuth?: boolean } = {},
): Promise<T> {
  let token: string | undefined = undefined;
  if (typeof document !== "undefined") {
    const match = document.cookie.match(/(^| )token=([^;]+)/);
    token = match ? match[2] : undefined;
  }

  const { skipAuth, ...restInit } = init as any;

  const headers = {
    ...(restInit.headers || {}),
    ...(token && !skipAuth ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...restInit,
    headers,
    credentials: "include"
  });

  if (res.status === 401 || res.status === 403) {
    if (typeof window !== "undefined") {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      const { useAuthStore } = await import("@/stores/authStore");
      useAuthStore.getState().setSessionExpired(true);
      window.location.href = "/login"; 
    }
    throw new Error("Unauthorized");
  }

  if (!res.ok) {
    const message = `Fetch error: ${res.status} ${res.statusText}`;
    throw new Error(message);
  }

  return res.json();
}
