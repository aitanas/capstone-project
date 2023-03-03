import React, { useEffect, useState } from "react";
import db from '../firebase';
import {   
  collection,
  // query,
  // addDoc,
  // onSnapshot,
  // doc,
  // updateDoc,
  getDocs,
  onSnapshot, } from "firebase/firestore";
  import Product from './Product';

export default function Products() {

  const [products, setProducts] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducts = async () => {
    let products = [];
    const collectionArray = await getDocs(collection(db, "products"));
    collectionArray.forEach((doc) => {
      products.push({... doc.data(), id: doc.id});
    });
    console.log(collectionArray);
    setProducts(products);
    console.log(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  // ticketList way
  // useEffect(() => {
  //   const unSubscribe = onSnapshot(
  //     collection(db, "products"),
  //     (collectionSnapshot) => {
  //       const products = [];
  //       collectionSnapshot.forEach((doc) => {
  //         products.push({
  //           ...doc.data(),
  //           id: doc.id
  //         });
  //       });
  //       setProducts(products);
  //     }
  //   );
  //   return () => unSubscribe();
  // }, []);

  return (
    <>
    <div>
    {products.map((product) => {
      <Product
        key={product.id}
        name={product.name}
        description={product.description}
      />
    })}
    </div>
    </>
  );
}