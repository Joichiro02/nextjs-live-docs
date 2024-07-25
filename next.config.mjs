/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'img.clerk.com'
    }]
  },
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