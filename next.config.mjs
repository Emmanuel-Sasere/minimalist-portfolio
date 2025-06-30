/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    // Ensure proper handling of client-side navigation
    experimental: {
        scrollRestoration: true
    }
};

export default nextConfig;