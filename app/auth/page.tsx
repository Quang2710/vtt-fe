"use client";

import { Suspense } from "react";
import AuthCallbackPageInner from "./AuthCallbackPageInner";

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen"><p className="text-gray-600 text-sm">Logging in...</p></div>}>
      <AuthCallbackPageInner />
    </Suspense>
  );
}
