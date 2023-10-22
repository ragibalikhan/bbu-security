import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const crypto = require('crypto')
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', cspHeader.replace(/\s{2,}/g, ' ').trim())
  requestHeaders.set('X-Content-Type-Options', 'nosniff')
  requestHeaders.set('X-Frame-Options', 'DENY')
  requestHeaders.set('X-XSS-Protection', '1; mode=block')
  requestHeaders.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')

  return NextResponse.next({
    headers: requestHeaders,
    request: {
      headers: requestHeaders,
    },
  })
}
