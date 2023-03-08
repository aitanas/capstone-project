import React, { useEffect, useState } from "react";
import Product from "./product/[id].jsx";
import Image from 'next/image';
import Link from 'next/link';
import db from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, getDocs }  from "firebase/firestore";
import products from '../productData';

export default function Products() {

  return (
    <>
    <div className="flex grid-cols-3 gap-8 justify-evenly">
    {products.map((product) => (
      <div key={product.key} class="max-w-sm rounded overflow-hidden shadow-lg">
        <Link href={`/product/${product.id}`}>
          <Image 
            src={product.img}
            className="w-full"
            width="200"
            height="200"
            alt={product.name}
          />
          <p className="font-bold text-xl mb-2 text-center">
            {product.name}
          </p>
          <p className="text-gray-700 text-base text-center">
            {product.price}
          </p>
        </Link>
      </div>
    )
    )}
    </div>
    </>
  );
}

export function getAllProductIds() {
  return products.map((product) => {
    return {
      params: {
        id: product.id
      },
    };
  })
}

export function getProductData(id) {
  return products.filter(product => product.id === id)[0];
}