/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental', // Enable incremental pre-rendering for specific routes
    }
};

export default nextConfig;
