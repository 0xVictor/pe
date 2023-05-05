/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  }, 
  images: {
    domains: ['jeztdqneychcszojmlyh.supabase.co', 'i.pravatar.cc'],
  },
}

module.exports = nextConfig
