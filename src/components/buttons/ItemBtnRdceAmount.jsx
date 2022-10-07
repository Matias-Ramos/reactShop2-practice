//BTS
import Button from 'react-bootstrap/Button';
//Context
import {useContext} from "react";
import {cartHookCtxt} from "../../context/CartContext"

function ItemBtnRdceAmount({id}) {

    const {productAmountUpdate} = useContext(cartHookCtxt);
    
    return (
        <Button variant="info" className="m-2" onClick={ () => productAmountUpdate(id) } >
            Reducir cantidad en 1
        </Button>
    )
}

export default ItemBtnRdceAmount;