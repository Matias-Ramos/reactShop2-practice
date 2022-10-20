//estilos
import "../../css/purchaseConfirmedContainer.css"

//hooks
import {useParams} from "react-router-dom";
import {cartHookCtxt} from "../../context/CartContext"
import { useContext, useEffect, useState, useRef } from "react";

//BTS
import Container from 'react-bootstrap/Container';

//Components
import PurchaseConfirmedTable from "../PurchaseConfirmedTable";
import PurchaseConfirmedBtnBackToHome from "../buttons/PurchaseConfirmedBtnBackToHome";
import PurchaseConfirmedBtnPrint from "../buttons/PurchaseConfirmedBtnPrint";
import PurchaseConfirmedH1 from "../PurchaseConfirmedH1";
import PurchaseConfirmedCode from "../PurchaseConfirmedCode";
import PurchaseConfirmedAddress from "../PurchaseConfirmedAddress";
import PurchaseConfirmedDate from "../PurchaseConfirmedDate";
import PurchaseConfirmedExpense from "../PurchaseConfirmedExpense";

function PurchaseConfirmedContainer() {  

    //ctxt
    const {cart, totalExpense, clearCart} = useContext(cartHookCtxt);
    //url-params
    const {orderId} = useParams();
    //state
    const [ finalPurchaseDetail ] = useState ( cart );
    const [ finalExpense ] = useState ( totalExpense );
    //ref
    const purchaseTicketRef = useRef();

    //functions
    function getDate() {
        const today = new Date().toLocaleDateString();
        return today;
    }

    /*This component, when renderized, empties the cart. 
    (bc the purchase is now finished and also bc such purchase has been properly duplicated to be render within this comp).*/
    useEffect( () => {
        clearCart();
    }, [] )
    
    return (        
        <>
        <div id="purchaseContainer">
            <Container ref={purchaseTicketRef} className="square border border-dark rounded m-2 w-75" id="purchaseTicket"> 
                <PurchaseConfirmedH1 orderId={orderId} />
                <PurchaseConfirmedCode orderId={orderId} />
                <PurchaseConfirmedAddress />
                <PurchaseConfirmedDate getDate={getDate} />
                <PurchaseConfirmedTable cart={finalPurchaseDetail} />
                <PurchaseConfirmedExpense finalExpense={finalExpense} />
            </Container>
            <div id="btnsPurchaseConfirmedOuterContainer">
                <div id="btnsPurchaseConfirmedInnerContainer">
                    <PurchaseConfirmedBtnPrint purchaseTicketRef={purchaseTicketRef}/>
                    <PurchaseConfirmedBtnBackToHome />
                </div>
            </div>
        </div>
        </>
    )
}
export default PurchaseConfirmedContainer;