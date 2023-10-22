/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export'
    async headers() {
        return [
            {
                source: '/', // Apply these headers to all paths
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: " 'self'; 'self' 'unsafe-inline' style-src 'self' 'unsafe-inline';",
                      },
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
                  {
                    key: 'X-Frame-Options',
                    value: 'DENY',
                  },
                  {
                    key: 'X-XSS-Protection',
                    value: '1; mode=block',
                  },
                  {
                    key: 'Strict-Transport-Security',
                    value: 'max-age=63072000; includeSubDomains; preload'
                  },
                  {
                    key: "Cache-Control",
                    value: "public, max-age: 31536000, immutable",
                },
                ],
                
              },
          {
            source: '/(.*)', // Apply these headers to all paths
            headers: [
                {
                    key: 'Content-Security-Policy',
                    value: " 'self'; 'self' 'unsafe-inline' style-src 'self' 'unsafe-inline';",
                  },
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
              {
                key: 'X-Frame-Options',
                value: 'DENY',
              },
              {
                key: 'X-XSS-Protection',
                value: '1; mode=block',
              },
              {
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload'
              },
              {
                key: "Cache-Control",
                value: "public, max-age: 31536000, immutable",
            },
            ],
            
          },
        ];
      },
    };

module.exports = nextConfig
