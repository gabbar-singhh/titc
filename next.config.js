/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/about_us',
        destination: '/about-us',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
