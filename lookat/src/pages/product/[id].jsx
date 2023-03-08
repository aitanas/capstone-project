import { getAllProductIds } from "../products";
import { getProductData } from "../products";
import Image from "next/image";

export default function ProductDetail({ product }) {

  return (
    <div className="flex columns-2">
      <div>
        <Image
          src={product.img}
          height="200"
          width="400"
          alt={product.name}
          className="align-self-center"
          />
      </div>
      <div>
        <div className="block p-1">
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