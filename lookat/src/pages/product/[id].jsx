import { getAllProductIds } from "../products";
import { getProductData } from "../products";
import Image from "next/image";

export default function ProductDetail({ product }) {

  const stockStatus = (quantity) => {
    if (quantity === 0) {
      return "Out of stock! :(";
    } else if (quantity <= 3) {
      return "Low stock";
    } else {
      return null;
    }
  }

  return (
    <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-2 content-center gap-x-8">
      <div className="align-self-center">
        <Image
          src={product.img}
          height="200"
          width="400"
          alt={product.name}
          className="align-self-center rounded-lg ring-ivory ring-4 ring-offset-4 mt-14 mb-20"
        />
      </div>
      <div className="mt-16">
        <div className="block p-1">
          <h1 className="text-4xl">{product.name}</h1>
          <h2 className="text-2xl">${product.price} | {stockStatus(product.quantity)}</h2>

        </div>
        <p className="block bg-ivory rounded-md p-5 text-justify m-3">
          {product.description}
        </p>
        <button className="rounded-md bg-orange-dark text-white py-2 px-5 mx-2 my-5 ring-white ring-1 hover:bg-green transition-colors">Add to cart</button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getProductData(params.id);
  return {
    props: {
      product,
    },
  };
}
