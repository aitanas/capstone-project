import { getAllProductIds } from "../products";
import { getProductData } from "../products";
import Image from "next/image";

export default function ProductDetail({ product }) {

  return (
    <div className="flex-initial-screen columns-2 content-center items-stretch gap-x-8">
      <div className="">
        <Image
          src={product.img}
          height="200"
          width="575"
          alt={product.name}
          className="align-self-center rounded-lg ring-ivory ring-4 ring-offset-4 my-2"
          />
      </div>
      <div>
        <div className="block p-1 items-center">
          <h1 className="text-4xl">{product.name}</h1>
          <h2 className="text-xl">{product.price}</h2>
        </div>
        <p className="block bg-ivory rounded-md p-5 text-justify">{product.description}</p>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const product = getProductData(params.id);
  return {
    props: {
      product
    },
  };
}