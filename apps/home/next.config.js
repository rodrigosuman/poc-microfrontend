

const federationConfig = {
  name: "home-app",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    //...exposed components
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: ["http://localhost:8088", "https://cdn.skypack.dev"],
  },
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
