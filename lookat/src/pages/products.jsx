'use client';

import React, { useEffect, useState } from "react";
import db from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, getDocs }  from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from 'reactfire';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Products() {

  const [productList, setProductList] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState(null);

    // reactfire function to get our firestore instance
    const firestore = useFirestore();
    const testCollection = collection(firestore, 'test');

    // use reactfire hook useFirestoreCollectionData to get our collection and deconstruct into data variable
    const { status, data } = useFirestoreCollectionData(testCollection, { idField: 'id' });

    if (status === 'loading') {
      return <p>Loading...</p>;
    }

    console.log(data);


  // const getProducts = async () => {
  //   let products = [];
  //   const collectionArray = await getDocs(collection(db, "test"));
    
  //   console.log(collectionArray);
  //   collectionArray.forEach((doc) => {
  //     // console.log(doc.id, " => ", doc.data());
  //     products.push({... doc.data(), id: doc.id});
  //   });
  //   setProductList(products);
  //   console.log(productList);
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // ticketList way
  // useEffect(() => {
  //   const unSubscribe = onSnapshot(
  //     collection(db, "test"),
  //     (collectionSnapshot) => {
  //       const products = [];
  //       collectionSnapshot.forEach((doc) => {
  //         products.push({
  //           ... doc.data(),
  //           id: doc.id
  //         });
  //       });
  //       setProductList(products);
  //     },
  //     (error) => {
  //       setError(error.message);
  //     }
  //   );
  //   return () => unSubscribe();
  // }, []);

  return (
    <>
    {/* <div>
    {productList.map((product) => {
      <Product
        key={product.id}
        name={product.name}
        description={product.description}
      />
    })}
    </div> */}
    </>
  );
}

export default Products;