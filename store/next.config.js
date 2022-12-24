/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env : {
    NEXT_PUBLIC_HOSTNAME: process.env.NEXT_PUBLIC_HOSTNAME,
    NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT,
  }
}
