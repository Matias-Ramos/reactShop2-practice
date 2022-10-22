//Hooks
import { useContext } from "react";
import { cartHookCtxt } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
//Comp
import CartList from "../CartList";
import { Link } from "react-router-dom";
//Btsp
import Button from "react-bootstrap/Button";
//fetch
import { createPurchaseOrder } from "../../data/firestore";


function CartContainer() {
  const { cart, clearCart, calculateTotalExpense } = useContext(cartHookCtxt);
  const totalExpense = calculateTotalExpense(cart);

  //CartBtnPurchaseConf.jsx usage
  const navigate = useNavigate();
  function confirmPurchase() {
    const purchaseData = {
      buyer: {
        name: "Juan Perez",
        phone: 1122334455,
        email: "towerSlayer77@gmail.com",
      },
      items: cart,
      totalExpense: totalExpense, 
    };
    createPurchaseOrder(purchaseData).then((httpResponse) => {
      navigate(`/purchaseConfirmed/${httpResponse.id}`);
    });
  }

  return (
    <div className="square border border-dark m-3 p-2">
      <h1>Carrito de compras 🛒</h1>

      {cart.length === 0 ? (
        <>
          <span>Parece que tu carrito se ha quedado sin productos</span>
          <br />
          <Link to="/">
            <Button variant="success" className="mb-2">
              Volver a la tienda
            </Button>
          </Link>
        </>
      ) : (
        <CartList
          cart={cart}
          clearCart={clearCart}
          totalExpense={totalExpense}
          confirmPurchase={confirmPurchase}
        />
      )}
    </div>
  );
}

export default CartContainer;
