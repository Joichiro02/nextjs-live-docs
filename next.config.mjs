/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint:{
    ignoreDuringBuilds: true
  },
  experimental: {
    serverActions: { 
      allowedOrigins: ["xxxx.com", "localhost:3000"], 
    }
  }
};

export default nextConfig;