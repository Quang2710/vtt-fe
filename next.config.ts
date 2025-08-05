import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'wtt-media-test.s3.ap-southeast-2.amazonaws.com' },
    ],
    unoptimized: process.env.NEXT_PUBLIC_UNOPTIMIZED_IMAGES ==='true' || false,
  },
};

export default nextConfig;
