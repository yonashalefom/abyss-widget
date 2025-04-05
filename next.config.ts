import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['unsplash.com'],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/widgets', // Change to '/widgets-details' if needed
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
