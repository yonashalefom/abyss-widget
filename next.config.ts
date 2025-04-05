import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['unsplash.com'], // this is the actual CDN domain
    },
};

export default nextConfig;
