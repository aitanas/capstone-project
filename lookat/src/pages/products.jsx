import React, { useEffect, useState } from "react";
import db from '../firebase';
import {   
  collection,
  // query,
  // addDoc,
  // onSnapshot,
  // doc,
  // updateDoc,
  getDocs, } from "firebase/firestore";

export default async function Products() {

  // const [products, setProducts] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  let products = [];
  const collectionArray = await getDocs(collection(db, "products"));
  collectionArray.forEach((doc) => {
    products.push({...doc.data(), id: doc.id});
  });

  console.log(products);


  // const getProducts = async () => {
  //   let array = [];
  //   const collectionArray = await getDocs(collection(db, "products"));
  //   collectionArray.forEach((doc) => {
  //     array.push({...doc.data(), id: doc.id});
  //   });
  //   console.log(collectionArray);
  //   setProducts(array);
  //   console.log(array);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // type props = {
  //   name: string;
  //   img: string;
  //   price: number;
  //   description: string;
  //   id: string;
  // };

  // const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });


  return (
    <div>
    {products.map((product) => {
      <div key={product.id}>
        <p>{product.name}</p>
        <p>{product.img}</p>
        <p>{product.description}</p>
      </div>
    })}
    </div>
  );
}