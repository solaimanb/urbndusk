/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pinimg.com", "www.pinterest.com"],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.glsl$/,
      use: "raw-loader",
    });

    return config;
  },
};

export default nextConfig;
