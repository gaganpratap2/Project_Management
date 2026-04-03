import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:[
      'uploadthings.com',
      'utfs.io',
      'img.clerk.com',
      'sundomain',
      'files.stripe.cpm'
    ],
  },
  reactStrictMode : false,
};

export default nextConfig;
