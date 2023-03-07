'use client';

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import db from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, getDocs }  from "firebase/firestore";
import Backpack from './../assets/photos/backpack.png'
import Bem from './../assets/photos/Bem.png'
// import products from '../products';

const products = [{
  name: "product name",
  img: {Backpack},
  price: "12.99",
  description: "a cat.",
  id: 1,
  key: 1
},
{
  name: "product name",
  img: {Bem},
  price: "12.99",
  description: "a cat.",
  id: 2,
  key: 2
},
]

export default function Products() {

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
    <div className="grid-cols-3">
    {products.map((product) => (
      <div key={product.key} class="max-w-sm rounded overflow-hidden shadow-lg">
        <Image 
          src={product.img}
          className="w-full"
        />
        <div class="font-bold text-xl mb-2">
          {product.name} / {product.price}
        </div>
        <p class="text-gray-700 text-base">
          {product.description}
        </p>
      </div>
    )
    )}
    </div>
  );
}