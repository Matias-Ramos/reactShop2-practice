//Comp.
import {Link} from "react-router-dom";
//Context
import {useContext} from "react";
import {cartHookCtxt} from "../context/CartContext"
//BTS
import Button from 'react-bootstrap/Button';



function ItemActnBtn( {id, stock, desiredAmount } ) {

    const {clearProductFromCart} = useContext(cartHookCtxt);
    
    return (
    <>
    {
        //define cual btn mostrar en base a si la propiedad desiredAmount es null o no.
        //"Ver detalle" si se accedió a Item.jsx desde ItemList.jsx
        //"Eliminar producto" si se accedió a Item.jsx desde CartContainer.jsx
        desiredAmount? 
        <>
          <span>Comprarás: {desiredAmount}</span>
          <br />
          <Button variant="secondary" className="mt-2" onClick={ () => clearProductFromCart(id) } >Eliminar compra del carrito</Button>
        </> 
        :
        <>
          Stock: {stock}
          <br />
          <Link to={`/item/${id}`}>
            <Button variant="info" className="mt-2">Ver detalle</Button>
          </Link>
        </>
      }
    </>
  )
}

export default ItemActnBtn