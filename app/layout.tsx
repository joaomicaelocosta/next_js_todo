import Link from 'next/link';
import '@/styles/base/index.scss';
import '@/styles/base/index.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <main>
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/notes">
              Notes
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
