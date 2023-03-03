import Layout from '../components/Layout';
import Home from '@/components/Home';

export default function Page() {

  return (
    <>
      <title>Natalie Shough</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}