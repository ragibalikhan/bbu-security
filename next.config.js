/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export'
    async headers() {
        return [
          {
            source: '/(.*)', // Apply these headers to all paths
            headers: [
            //   {
            //     key: 'Content-Security-Policy',
            //     value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
            //   },
              {
                key: 'Referrer-Policy',
                value: 'origin-when-cross-origin',
              },
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff',
              },
              {
                key: 'Permissions-Policy',
                value: 'camera=(), microphone=(), geolocation=(), fullscreen=()',
              },
            ],
          },
        ];
      },
    };

module.exports = nextConfig
