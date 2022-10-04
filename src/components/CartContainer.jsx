//Hooks
import {useContext} from "react";
import {cartHookCtxt} from "../context/CartContext"
//Comp
import Item from "./Item";
//Btsp
import Button from 'react-bootstrap/Button';


function CartContainer() {
  const {cart, clearCart} = useContext(cartHookCtxt);
  
  return (
    <div className="square border border-dark m-3 p-2">
      <h1>CartSection</h1>
      <br />
      {
        cart.length>0 && 
        <Button variant="danger" className="mb-2" onClick={ () => clearCart() } >Vaciar carrito ☠</Button>
      }

      { cart.map( product => <Item 
                                key={product.id} 
                                id={product.id}
                                product_name={product.product_name}
                                price={product.price}
                                organic={product.organic}
                                stock={product.stock}
                                desiredAmount={product.desiredAmount}/>
       )}
    </div>
  )
}

export default CartContainer