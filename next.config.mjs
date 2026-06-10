/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["localhost", "127.0.0.1", "127.0.0.1:8000"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
