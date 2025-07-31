import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/**'), new URL('https://randomuser.me/**')],
    unoptimized: process.env.NEXT_PUBLIC_UNOPTIMIZED_IMAGES ==='true' || false,
  },
};

export default nextConfig;
