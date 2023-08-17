import connectDB from '@/DataBase/db'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  connectDB()
  return <Component {...pageProps} />
}
