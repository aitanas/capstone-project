import Layout from '../components/Layout';
import Head from 'next/head';

export default function Page() {

  return (
    <div>
      <Head>
        <title>Natalie Shough</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>index.jsx</p>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Layout>
        {page}
      </Layout>
    </FirebaseAppProvider>
  )
}