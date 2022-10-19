//Btsp
import Button from 'react-bootstrap/Button';
//data
import { createPurchaseOrder } from "../../data/firestore";
//Hooks
import {useContext} from "react";
import {cartHookCtxt} from "../../context/CartContext"
import { useNavigate } from "react-router-dom";

function CartBtnPurchaseConf({ cart }) {

    const {totalExpense} = useContext(cartHookCtxt);
    const navigate = useNavigate();
    
    function confirmPurchase()
    {
        const purchaseData = {
            buyer: {
                name: "Juan Perez",
                phone: 1122334455,
                email: "towerSlayer77@gmail.com"
            },
            items: cart,
            totalExpense: totalExpense //first totalExpense is the name I deciced give to this obj, second one is the value from the context.
        }
        createPurchaseOrder(purchaseData).then( httpResponse => {
            navigate(`/purchaseConfirmed/${httpResponse.id}`)
        } )
    }

    return (
    <Button variant="success" className="m-2" onClick={ ()=> confirmPurchase() }>Finalizar compra</Button>
    )
}

export default CartBtnPurchaseConf;