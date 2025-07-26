"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // No token needed, cookie is set by backend
    router.replace("/");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-600 text-sm">Logging in...</p>
    </div>
  );
}
