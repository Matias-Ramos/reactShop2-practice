//style
import "../../css/itemListContainerSt.css";
//data
import { getStock, getStockByCat } from "../../data/firestore";
//comp.
import ItemList from "../ItemList";
//hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  //usePrms
  const { categoryId } = useParams();
  //useState
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    switch ( categoryId ) //conditional to define which values from the promise assign into the state-variable.
    { 
      case "fruits":
        getStockByCat("fruits").then((arrayOfProducts) =>
          setProductList(arrayOfProducts)
        );
        break;

      case "vegetables":
        getStockByCat("vegetables").then((arrayOfProducts) =>
          setProductList(arrayOfProducts)
        );
        break;

      default:
        getStock().then((arrayOfProducts) => setProductList(arrayOfProducts));
        break;
    }
  }, [categoryId]);

  return (
    <div id="itemListContainer">
      <ItemList productList={productList} />
    </div>
  );
}

export default ItemListContainer;
