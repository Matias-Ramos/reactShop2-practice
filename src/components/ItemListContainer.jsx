//style
import "../css/itemListContainerSt.css";
// import ItemCount from "./ItemCount";
import getStock from "../data/Mock_Data";
import ItemList from "./ItemList";
//hooks
import {useEffect, useState} from "react";

function ItemListContainer() {
  
  //state-var
  const [productList, setProductList] = useState ( [] );
  //set promise-value into state-var when the app renders.
  useEffect( () => {
    const stock = getStock(); //this returns a promise...
    stock.then( arrayOfProducts => setProductList(arrayOfProducts) )
  } ,[] )

    
  return (
    <div id="itemListContainer">
      <ItemList productList={productList}/>
    </div>
  )
}

export default ItemListContainer;
