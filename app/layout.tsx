
import { ReactNode } from 'react'
import { ColorModeScript, theme } from '@chakra-ui/react'
import { Provider } from './provider'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* This ensures server and client color mode match */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        {/* Favicon and manifest */}
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/log1.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/log1.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/log1.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
         <title>Haris pharmaceuticals import </title>
      </head>
      <body>
        {/* Your app provider */}
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
