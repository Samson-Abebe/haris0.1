import type { Metadata } from 'next'
import { MarketingLayout } from '#components/layout'
import "leaflet/dist/leaflet.css"

export const metadata: Metadata = {
  title: 'Haris Pharmaceuticals Import',
  description:
    'Trusted pharmaceutical importer in Ethiopia providing high-quality medicines and healthcare solutions.',

  openGraph: {
    title: 'Haris Pharmaceuticals Import',
    description:
      'Trusted pharmaceutical importer in Ethiopia providing high-quality medicines and healthcare solutions.',
    url: 'https://harispharma.com',
    siteName: 'Haris Pharmaceuticals',
    images: [
      {
        url: 'https://harispharma.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Haris Pharmaceuticals Import',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Haris Pharmaceuticals Import',
    description:
      'Trusted pharmaceutical importer in Ethiopia providing high-quality medicines and healthcare solutions.',
    images: ['https://harispharma.com/og-image.png'],
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
