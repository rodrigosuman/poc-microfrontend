const NextFederationPlugin = require("@module-federation/nextjs-mf");

const remotes = (isServer = false) => ({});

const federationConfig = {
  name: "search-engine",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./SearchEngine": "./src/components/SearchEngine"
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        ...federationConfig,
        remotes: remotes(isServer),
        // ...
      })
    );
    return config;
  },
};

module.exports = nextConfig;
