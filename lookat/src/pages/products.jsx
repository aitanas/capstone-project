import Image from "next/image";
import Link from "next/link";
import products from "../productData";

export default function Products() {
  return (
    <>
      <h1 className="text-3xl">Shop</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-evenly">
        {products.map((product) => (
          <div key={product.key} class="group max-w-sm overflow-hidden">
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.img}
                className="w-full ring-2 ring-white ring-offset-2 brightness-90 group-hover:brightness-100 rounded-sm transition"
                height="200"
                width="200"
                alt={product.name}
              />
              <p className="font-semibold text-l mb-1 text-center group-hover:text-orange-dark mt-2">
                {product.name}
              </p>
              <p className="text-base text-center group-hover:text-orange-light mb-1">
                ${product.price}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export function getAllProductIds() {
  return products.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });
}

export function getProductData(id) {
  return products.filter((product) => product.id === id)[0];
}
