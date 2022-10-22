//style
import "../css/ItemDetailSt.css";
//comp.
import ItemCountContainer from "./containers/ItemCountContainer";
import ItemBtnStockEmpty from "./buttons/ItemBtnStockEmpty";
import ItemDetailCard from "./ItemDetailCard";
import { DotSpinner } from "@uiball/loaders";
//hooks
import { useState, useContext } from "react";
import { cartHookCtxt } from "../context/CartContext";

function ItemDetail({ product }) {

  //Modifier fns of ItemCount.jsx
  let onAddQty = (desiredAmount, stock) =>
    desiredAmount < stock && setDesiredAmount(desiredAmount + 1);
  let onSubtractQty = (desiredAmount) =>
    desiredAmount > 1 && setDesiredAmount(desiredAmount - 1);
  //ItemCount.jsx initializer inmutability
  const itemCountInitializer = 1;

  //Hooks
  const [desiredAmount, setDesiredAmount] = useState(itemCountInitializer);
  const [buyConfirmed, setBuyConfirmed] = useState(false);
  const cartContext = useContext(cartHookCtxt);

  //Intermediate fn for product purchase
  function buyProduct() {
    cartContext.addProductToCart(product, desiredAmount);
    setBuyConfirmed(true);
  }

  //comp as a prop
  const ActionButton = () => {
    if (product.stock === 0) 
      return <ItemBtnStockEmpty />;
    else 
      return (
        <ItemCountContainer
          desiredAmount={desiredAmount}
          stock={product.stock}
          onAddQty={onAddQty}
          onSubtractQty={onSubtractQty}
          buyProduct={buyProduct}
          buyConfirmed={buyConfirmed}
        />
      );
  };

  return (
    <div className="ItemDetail">
      {
      product.product_name === undefined ? 
      (
        <div id="dotWaveDiv">
          <DotSpinner size={40} speed={0.9} color="black" />
        </div>
      ) : (
        <ItemDetailCard product={product} ActionButton={ActionButton} />
      )}
    </div>
  );
}
export default ItemDetail;
