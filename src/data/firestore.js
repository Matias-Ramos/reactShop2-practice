// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5ZtPcgC1m1mYvwBuOJpYO_4iIb8uws7w",
  authDomain: "react-shop2.firebaseapp.com",
  projectId: "react-shop2",
  storageBucket: "react-shop2.appspot.com",
  messagingSenderId: "1018110474211",
  appId: "1:1018110474211:web:a11343b11a1abee0fa92d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const myFirestore = getFirestore(app);

//exports all items
export async function getStock(){
  const myCollection = collection(myFirestore, "Comestibles");
  let snapShot = await getDocs(myCollection);
  let arrayOfProducts = snapShot.docs.map( document => {
    let formattedDocs = {...document.data(), id: document.id}
    return formattedDocs;
    })

  return arrayOfProducts;
}

//exports a single item
export async function getProduct(idParams){
  const docRef = doc( myFirestore, "Comestibles", idParams );
  const docSnapShot = await getDoc(docRef);
  const formattedDoc = {...docSnapShot.data(), id: docSnapShot.id};

  return formattedDoc; 
}

//exports items by category
export async function getStockByCat(category){
  category==="fruits"? category=true : category=false;
  const myCollection = collection(myFirestore, "Comestibles");
  const queryCat = query(myCollection, where("isFruit", "==", category) ) 
  let snapShot = await getDocs(queryCat);
  let arrayOfProducts = snapShot.docs.map( document => {
    let formattedDocs = {...document.data(), id: document.id}
    return formattedDocs;
    })

  return arrayOfProducts;
}

//creates a purchase order
export async function createPurchaseOrder(purchaseData)
{
  const collectionRef = collection(myFirestore, "Purchases"); //si la colección no existe, se crea.
  let httpResponse = await addDoc(collectionRef, purchaseData);
  return httpResponse;
}
