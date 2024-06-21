/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: true,
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['localhost'],
    },
    env: {
        API_URL: process.env.API_URL
    },

    compiler: {
        
        styledComponents: true,

        removeConsole: process.env.NODE_ENV === 'production',

        // removeConsole: true,
    },

    experimental: {
        serverActions:true
    }
};

export default nextConfig;
