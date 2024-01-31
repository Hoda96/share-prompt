/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     // hostname: "lh3.googleusercontent.com",
    //     // port: "",
    //     // pathname: "/account123/**",
    //   },
    // ],
    domains: ["lh3.googleusercontent.com"],
  },
  // webpack(config) {
  //   config.experiments = {
  //     ...config.experiments,
  //     topLevelAwait: true,
  //   };
  //   return config;
  // },
};
module.exports = nextConfig;
module.exports = {
  env: {
    customKey: "my-value",
  },
};
