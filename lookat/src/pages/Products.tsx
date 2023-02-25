import React, { useEffect, useState } from "react";
import db from './../firebase';
import {   
  collection,
  // query,
  // addDoc,
  // onSnapshot,
  // doc,
  // updateDoc,
  getDocs, } from "firebase/firestore";

export default function Products() {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducts = async () => {
    let array = [];
    const collectionArray = await getDocs(collection(db, "products"));
    collectionArray.forEach((doc) => {
      array.push({...doc.data(), id: doc.id});
    });
    console.log(collectionArray);
    setProducts(array);
  }

  useEffect(() => {
    getProducts();
  }, []);

  // type props = {
  //   name: string;
  //   img: string;
  //   price: number;
  //   description: string;
  //   id: string;
  // };

  return (
    <>
    {products.map((product) => {
      <div key={product.id}>
        <p>{product.name}</p>
        <p>{product.img}</p>
        <p>{product.description}</p>
      </div>
    })}
    </>
  );
}