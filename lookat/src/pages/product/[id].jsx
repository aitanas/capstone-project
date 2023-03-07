import { getAllProductIds } from "../products";
import { getProductData } from "../products";
import Image from "next/image";

export default function ProductDetail({ product }) {


  return (
    <div>
      <Image
        src={product.img}
        height="200"
        width="200"
        alt={product.name}
        />
      <h1>Detail for {product.name}</h1>
      <p>{product.description}</p>
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
      product,
    },
  };
}