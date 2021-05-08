const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
  future: {
    webpack5: true,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
