export default function Product({ params }) {

  const { product } = params;
  console.log(params)

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