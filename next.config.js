/** @type {import('next').NextConfig} */

// On GitHub Pages a project site is served under /<repo>, so we prefix paths
// only in that build (set via the deploy workflow). Local dev/build stay at root.
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isPages ? "/1-Blueprint" : "",
};

module.exports = nextConfig;
