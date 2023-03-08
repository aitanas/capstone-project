import './../styles/globals.css'
import Layout from '../components/Layout'


export default function MyApp({ Component, pageProps }) {
  
  return (
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
