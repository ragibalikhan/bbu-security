import type { MiddlewareRequest } from "@netlify/next";
import { NextResponse } from "next/server";

export async function middleware(req: MiddlewareRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader =  `
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

   // Add the generated nonce to the request headers
   req.headers.set('x-nonce', nonce);

   // Set various security headers
   req.headers.set('Content-Security-Policy', cspHeader.replace(/\s{2,}/g, ' ').trim());
   req.headers.set('X-Content-Type-Options', 'nosniff');
   req.headers.set('X-Frame-Options', 'DENY');
   req.headers.set('X-XSS-Protection', '1; mode=block');
   req.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
 
   // Return the response with updated headers
   return NextResponse.next();
 }
