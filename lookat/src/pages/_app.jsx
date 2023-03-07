import './../styles/globals.css'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
