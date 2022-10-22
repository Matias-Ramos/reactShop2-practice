//Comp
import Item from "./Item";
import CartBtnPurchaseConf from "./buttons/CartBtnPurchaseConf";
//Btsp
import Button from "react-bootstrap/Button";

function CartList({ cart, clearCart, totalExpense, confirmPurchase }) {
  return (
    <>
      <br />
      <h2>Total a abonar: ${totalExpense}</h2>

      {cart.length > 0 && (
        <>
          <Button variant="danger" className="m-2" onClick={() => clearCart()}>
            Vaciar carrito ☠
          </Button>
          <CartBtnPurchaseConf confirmPurchase={confirmPurchase} />
        </>
      )}

      {cart.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          product_name={product.product_name}
          price={product.price}
          organic={product.organic}
          stock={product.stock}
          desiredAmount={product.desiredAmount}
        />
      ))}
    </>
  );
}

export default CartList;
