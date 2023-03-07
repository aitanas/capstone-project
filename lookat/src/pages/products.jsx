'use client';

import React, { useEffect, useState } from "react";
import db from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, getDocs }  from "firebase/firestore";
// import products from '../products';

const products = [{
  name: "product name",
  img: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  price: "12.99",
  description: "a cat.",
  id: 1,
  key: 1
},
{
  name: "product name",
  img: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
  price: "12.99",
  description: "a cat.",
  id: 2,
  key: 2
},
]

function Products() {

  const [productList, setProductList] = useState(null);
  // const [selectedProduct, setSelectedProduct] = useState(null);


  // const getProducts = async () => {
  //   let products = [];
  //   const collectionArray = await getDocs(collection(db, "test"));
    
  //   console.log(collectionArray);
  //   collectionArray.forEach((doc) => {
  //     products.push({... doc.data(), id: doc.id});
  //   });
  //   setProductList(products);
  //   console.log(productList);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);
  useEffect(() => {
    setProductList(products);
    console.log(productList)
  }, []);


  return (
    <div>
    {products.map((product) => (
      <div key={product.key}>
        {product.name}
      </div>
    )
    )}
    </div>
  );
}

export default Products;