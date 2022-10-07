//Context
import {useContext} from "react";
import {cartHookCtxt} from "../../context/CartContext"
//BTS
import Button from 'react-bootstrap/Button';


function ItemBtnDeletePurchase({id}) {
    const {clearProductFromCart} = useContext(cartHookCtxt);

    return (
        <Button variant="secondary" className="m-2" onClick={ () => clearProductFromCart(id) } >
            Eliminar compra del carrito
        </Button>
    )
}

export default ItemBtnDeletePurchase