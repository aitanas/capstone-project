import React, { useEffect, useState } from "react";
import ProductList from "./products/ProductList";
import ProductDetail from "./products/ProductDetail";
import db from './../firebase';
import {   
  collection,
  query,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  getDocs, } from "firebase/firestore";

export default function Control() {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducts = async () => {
    let array = [];
    const collectionArray = await getDocs(collection(db, "products"));
    collectionArray.forEach((doc) => {
      array.push({...doc.data(), id: doc.id});
    });
    setProducts(array);
  }

  useEffect(() => {
    getProducts();
  }, []);


  <>
  <ProductDetail product = {selectedProduct} />
  <ProductList productList={products} />
  </>

  return (

    <p>Control component</p>
  )
}