import Products from "../../pages/products";

export default function ProductList(props) {

  type props = {
    productList: Array<object>;
  }

  return (
    <>
    {/* {props.productList.map((product) => {
      <Products
        name={product.name}
        img={product.img}
        description={product.description}
        id={product.id}
        key={product.id}
        />
    })} */}
    </>
  )
}
