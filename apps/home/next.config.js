const NextFederationPlugin = require("@module-federation/nextjs-mf");

const remotes = (isServer = false) => {
  const location = isServer ? "ssr" : "chunks";

  return {
    'search-engine': `search-engine@ http://localhost:8081/_next/static/${location}/remoteEntry.js`,
    'news': `news@ http://localhost:8083/_next/static/${location}/remoteEntry.js`,
    'page-vite': "page-vite@http://localhost:8088/remoteEntry.js"
  };
};

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
    urlImports: ["http://localhost:8088"],
    esmExternals: true,
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        ...federationConfig,
        remotes: remotes(isServer),
      })
    );
    return config;
  },
};

module.exports = nextConfig;
