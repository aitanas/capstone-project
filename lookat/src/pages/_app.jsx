import './../styles/globals.css'
import Layout from '../components/Layout'
import { DM-Sans } from 'next/font/google'

const dmSans = DMSans({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  
  return (
    <Layout className={dmSans.className}>
      <Component {...pageProps} />
    </Layout>
  )
}
