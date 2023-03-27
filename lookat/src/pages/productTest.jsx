import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "./../../firebase.js";
import { useEffect, useState } from "react";

export default function ProductTest() {

  const [products, setProducts] = useState([]);

const getData = async () => {
  let array = [];
  const collectionArray = await getDocs(collection(db, "test"));
  collectionArray.forEach((doc) => {
    array.push({ ...doc.data(), id: doc.id });
  });
  setProducts(array);
};

useEffect(() => {
  getData();
  console.log(process.env.NEXT_PUBLIC_FIREBASE_APP_ID);
}, []);

return(
  <p>{products.map((product) => {
    <p>{product.name}</p>
  })}</p>
)

}