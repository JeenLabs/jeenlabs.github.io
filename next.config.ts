const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/jeenlabs.github.io/' : '',
  basePath: isProd ? '/jeenlabs.github.io' : '',
  output: 'export'
};

export default nextConfig;