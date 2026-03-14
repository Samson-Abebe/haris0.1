import type { Metadata } from 'next'
import { MarketingLayout } from '#components/layout'
import "leaflet/dist/leaflet.css"

export const metadata: Metadata = {
  title: 'Haris Pharmaceuticals Import',
  description:
    'Trusted pharmaceutical importer in Ethiopia providing high-quality medicines and healthcare solutions.',

  // Open Graph metadata (for Facebook, Telegram, LinkedIn, etc.)
  openGraph: {
    title: 'Haris Pharmaceuticals Import',
    description:
      'Trusted pharmaceutical importer in Ethiopia providing high-quality medicines and healthcare solutions.',
    url: 'https://haris0-1.vercel.app', // Your live site
    siteName: 'Haris Pharmaceuticals',
    images: [
      {
        url: 'https://haris0-1.vercel.app/og-image.png', // FULL URL is required
        width: 1200,
        height: 630,
        alt: 'Haris Pharmaceuticals Import',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Haris Pharmaceuticals Import',
    description:
      'Trusted pharmaceutical importer in Ethiopia providing high-quality medicines and healthcare solutions.',
    images: ['https://haris0-1.vercel.app/og-image.png'], // FULL URL
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MarketingLayout>
      {children}
    </MarketingLayout>
  )
}
