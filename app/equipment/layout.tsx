import type { Metadata } from 'next'
import { MarketingLayout } from '#components/layout'
import "leaflet/dist/leaflet.css"

export const metadata: Metadata = {
  title: 'Haris Pharmaceuticals Import',
  description:
    'Trusted pharmaceutical importer in Ethiopia providing high-quality medicines and healthcare solutions.',
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
