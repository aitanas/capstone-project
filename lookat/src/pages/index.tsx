import Layout from '../components/Layout';
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app';
import Home from '@/components/Home';

const Page: NextPageWithLayout = () => {
  return <Home />
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