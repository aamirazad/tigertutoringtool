import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="/prescript.js" strategy="beforeInteractive" />
      </head>
      <body>
        {children}
        <Script src="/postscript.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}