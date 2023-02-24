import Head from 'next/head';
import { Inter } from 'next/font/google';
import Layout from '../components/Layout';
import App from '../components/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Natalie Shough</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Router>
      <Layout>
        <App />
        {/* content here */}
      </Layout>
    </Router>
    </>
  )
}
