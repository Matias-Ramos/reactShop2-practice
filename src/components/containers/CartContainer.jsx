//Hooks
import {useContext} from "react";
import {cartHookCtxt} from "../../context/CartContext"
//Comp
import CartList from "../CartList";
import {Link} from "react-router-dom";
//Btsp
import Button from 'react-bootstrap/Button';


function CartContainer() {
  
  const {cart, clearCart, totalExpense} = useContext(cartHookCtxt);

    return (
    <div className="square border border-dark m-3 p-2">
      <h1>Carrito de compras 🛒</h1>

      {
        cart.length===0?
        <>
          <span>Parece que tu carrito se ha quedado sin productos</span>
          <br />
          <Link to="/">
            <Button variant="success" className="mb-2">Volver a la tienda</Button>
          </Link>
        </>
        :
        <CartList 
        cart={cart}
        clearCart={clearCart}
        totalExpense={totalExpense}/>
      }
      
    </div>
  )
}

export default CartContainer