export default function Product({ name, price, description }) {

  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <p>{description}</p>
    </div>
  );
}