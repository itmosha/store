/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env : {
    NEXT_PUBLIC_HOSTNAME: process.env.NEXT_PUBLIC_HOSTNAME,
    NEXT_PUBLIC_PROTOCOL: process.env.NEXT_PUBLIC_PROTOCOL,
  }
}
