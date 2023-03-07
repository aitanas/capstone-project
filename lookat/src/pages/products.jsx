import React, { useEffect, useState } from "react";
import Product from "./[product]/detail.jsx";
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
          <p class="font-bold text-xl mb-2 text-center">
            {product.name}
          </p>
          <p class="text-gray-700 text-base text-center">
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