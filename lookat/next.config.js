/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  experimental: {
    fontLoaders: [
      { loader: 'next/font/google', options: { weight: ('400' | '500' | '700'), style: 'normal' | 'italic' }}
    ]
  }
}
