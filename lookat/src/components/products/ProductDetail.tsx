export default function ProductDetail(props) {
  const { product } = props;

  type props = {
    product: object;
  }

  return (
    <>
      <h1>{product.name}</h1>
      <img src={product.img} /><br />
      <p>{product.description}</p>
    </>
  )
}