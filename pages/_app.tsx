import React from 'react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

import '../styles/tailwind.css'
import '../styles/nprogress.css'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default App
