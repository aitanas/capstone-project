import Image from "next/image";
import Link from "next/link";
import products from "../productData";

export default function Products() {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-evenly">
        {products.map((product) => (
          <div
            key={product.key}
            class="group max-w-sm rounded-lg overflow-hidden shadow-lg bg-stonewash hover:bg-orange-dark ring-ivory ring-2 ring-offset-2 transition"
          >
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.img}
                className="w-full shadow-md brightness-90 group-hover:brightness-100 overflow-clip"
                width="200"
                height="200"
                alt={product.name}
              />
              <p className="font-bold text-xl mb-1 text-center group-hover:text-ivory mt-2 text-brown">
                {product.name}
              </p>
              <p className="text-gray-700 text-base text-center group-hover:text-white mb-1 text-brown">
                {product.price}
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
