import './../styles/globals.css'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from "react"
import Router from "next/router"
import PageLoader from 'next/dist/client/page-loader'


export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  })
  return loading ?
    // <AnimatePresence mode="wait" initial={false}>
      
      <Layout>
        <p>Loading...</p>
      </Layout> : 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </AnimatePresence>
}
