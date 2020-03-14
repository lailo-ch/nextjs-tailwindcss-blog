import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface LayoutProps {
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`Lailog ${title ? ` | ${title}` : ''}`}</title>
      </Head>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <header className="flex items-center justify-center p-4 mb-4">
          <Link href="/">
            <a className="font-black">
              Lai<span className="font-light">log</span>
            </a>
          </Link>
        </header>
        <main className="container max-w-3xl flex-grow">{children}</main>
        <footer className="text-xs text-center text-gray-600 py-4 px-3">
          Made with ♥ by{' '}
          <a href="https://www.twitter.com/lailo_ch">@lailo_ch</a>
        </footer>
      </div>
    </>
  )
}
export default Layout