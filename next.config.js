
const nextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any HTTPS hostname
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
