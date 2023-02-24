import { Inter } from 'next/font/google';
import Layout from './Layout';
import App from '../components/App';
import Link from 'next/link';
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <title>Natalie Shough</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <Layout>
        {page}
      </Layout>
    </>
  )
}

export default Page