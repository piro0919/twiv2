module.exports = {
  experimental: {
    optimizeFonts: true,
  },
  webpack: (config) => {
    config.resolve.alias.firebaseui = "firebaseui-ja";

    return config;
  },
};
