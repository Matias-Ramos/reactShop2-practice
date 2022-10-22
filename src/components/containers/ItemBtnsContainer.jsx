//Comp.
import ItemBtnDeletePurchase from "../buttons/ItemBtnDeletePurchase";
import ItemBtnRdceAmount from "../buttons/ItemBtnRdceAmount";
import ItemBtnShowDetails from "../buttons/ItemBtnShowDetails";
//Context
import { useContext } from "react";
import { cartHookCtxt } from "../../context/CartContext";

function ItemBtnsContainer({ id, desiredAmount }) {
  const { clearProductFromCart, reduceProductAmountByOne } = useContext(cartHookCtxt);
  
  return (
    <>
      {
        desiredAmount ? 
        ( <ItemBtnDeletePurchase 
          id={id}
          clearProductFromCart={clearProductFromCart}
        /> ) //desiredAmount truthy = CartContainer route
        : 
        ( <ItemBtnShowDetails id={id} />) //desiredAmount falsy = ItemListContainer route
      }

      {
        desiredAmount > 1 && 
        <ItemBtnRdceAmount
         id={id}
         reduceProductAmountByOne={reduceProductAmountByOne} 
         /> //CartContainer route
      }
    </>
  );
}

export default ItemBtnsContainer;
