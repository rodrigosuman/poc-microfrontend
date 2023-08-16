const NextFederationPlugin = require("@module-federation/nextjs-mf");

const remotes = (isServer = false) => ({});

const federationConfig = {
  name: "news",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./News": "./src/components/News"
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
