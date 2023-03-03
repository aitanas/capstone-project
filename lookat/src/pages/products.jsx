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
  import Product from './Product';

export default async function Products() {

  const [products, setProducts] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState(null);


  const getProducts = async () => {
    let products = [];
    const collectionArray = await getDocs(collection(db, "products"));
    console.log(collectionArray)
    collectionArray.forEach((doc) => {
      products.push({...doc.data(), id: doc.id});
    });
    setProducts(products);
    console.log(products);
  }

  getProducts();
  // useEffect(() => {
  //   getProducts();
  // }, []);
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

  useEffect(() => {
    getProducts();
  }, []);

  // const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });


  return (
    <>
    <div>
    {/* {products.map((product) => {
      <Product
        key={product.id}
        name={product.name}
        description={product.description}
      />
    })} */}
  {products}
    </div>
    </>
  );
}