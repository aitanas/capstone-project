import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Deer from "./../../public/images/TH2-deer.png"

export default function Page() {


  return (
    <>
      <Head>
        <title>Lookat by Natalie Shough</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-2">
        <div className="self-center">
          <h1 className="text-6xl text-center -mt-20">Welcome</h1>
          <p className="block bg-gradient-to-r from-white to-ivory p-5 rounded-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ipsam
            atque quae ad dolor corrupti officiis voluptatum ex magnam. Deleniti
            hic eum delectus optio fuga similique, neque tempore dolorem
            voluptates.
            <br /><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ipsam
            atque quae ad dolor corrupti officiis voluptatum ex magnam. Deleniti
            hic eum delectus optio fuga similique, neque tempore dolorem
            voluptates.
            <br /><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ipsam
            atque quae ad dolor corrupti officiis voluptatum ex magnam. Deleniti
            hic eum delectus optio fuga similique, neque tempore dolorem
            voluptates.
          </p>
        </div>
        <div>
          <Image
            src={Deer}
            width="550"
            alt="Deer"
            className="rounded-full my-4"
          />
        </div>
      </div>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return (
      <Layout>{page}</Layout>
  );
};
