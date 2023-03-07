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
      <div className="columns-2 gap-8">
        <div>
          <h1 className="text-5xl">Welcome to Lookat</h1>
        </div>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ipsam atque quae ad dolor corrupti officiis voluptatum ex magnam. Deleniti hic eum delectus optio fuga similique, neque tempore dolorem voluptates.</p>
        </div>
      </div>
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