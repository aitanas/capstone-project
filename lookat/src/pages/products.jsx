'use client';

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import db from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, getDocs }  from "firebase/firestore";

// import products from '../products';

const products = [{
  name: "Mascot Plush",
  img: '/images/bem.png',
  price: "17.99",
  description: "a cat.",
  id: 1,
  key: 1
},
{
  name: "Luggage Tag",
  img: '/images/backpack.png',
  price: "12.99",
  description: "a cat.",
  id: 2,
  key: 2
},
{
  name: "Luggage Tag",
  img: '/images/tag.png',
  price: "12.99",
  description: "a cat.",
  id: 3,
  key: 3
},
]

export default function Products() {

  const [productList, setProductList] = useState(null);
  // const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setProductList(products);
    console.log(productList)
  }, []);


  return (
    <>
    <div className="flex grid-cols-3 gap-8 justify-evenly">
    {products.map((product) => (
      <div key={product.key} class="max-w-sm rounded overflow-hidden shadow-lg">
        <Image 
          src={product.img}
          className="w-full"
          width="200"
          height="200"
          alt={product.name}
        />
        <p class="font-bold text-xl mb-2 text-center">
          {product.name}
        </p>
        <p class="text-gray-700 text-base text-center">
          {product.price}
        </p>
      </div>
    )
    )}
    </div>
    </>
  );
}