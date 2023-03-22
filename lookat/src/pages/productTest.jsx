import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";

export default function ProductTest() {

const querySnapshot = async() => {
  await getDocs(collection(db, "test"));
  querySnapshot.forEach((doc) => {
    console.log({ ...doc.date(), id: doc.id });
  });
};

useEffect(() => {
  querySnapshot();
}, []);

return(
  <p>testing</p>
)

}