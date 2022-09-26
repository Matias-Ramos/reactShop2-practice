//style
import "../css/itemListContainerSt.css";
//data
import getStock from "../data/Mock_Data";
//comp.
import ItemList from "./ItemList";
//hooks
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


function ItemListContainer() {
   
  //usePrms
  const {categoryId} = useParams();

  //useState
  const [productList, setProductList] = useState ( [] );
  
  useEffect( () => {
    const stock = getStock(); //this returns a promise...

    //conditional to define which values from the promise assign into the state-variable.
    switch(categoryId)
    {
      case "fruits":
        stock.then( arrayOfProducts => 
          {
            setProductList( arrayOfProducts.filter( product => product.isFruit) ); //t
          })
        break;

      case "vegetables":
        stock.then( arrayOfProducts => 
          {
            setProductList( arrayOfProducts.filter( product => !product.isFruit) ); //f
          })
        break;
      
      default:
        stock.then( arrayOfProducts => setProductList(arrayOfProducts) );
        break;
    }
    
  } ,[categoryId] )

  return (
    <div id="itemListContainer">
      <ItemList productList={productList}/>
    </div>
  ) 

}

export default ItemListContainer;




  //ASYNC AWAIT VERSION
/*   useEffect( () => {
    getData2();
  },[] )

  async function getData2()
  {
    try{
      let promiseAnswer = await getStock();
      setProductList(promiseAnswer);
    }
    catch (errorMsg) {
      console.error(errorMsg);
    }

  } */