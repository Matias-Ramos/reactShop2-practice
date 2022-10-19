//estilos
import "../../css/purchaseConfirmedContainer.css"

//hooks
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {cartHookCtxt} from "../../context/CartContext"
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from 'react';

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

    /*Este componente, al ser renderizado, vacía el carrito 
    (ya que la compra fue completada y debidamente duplicada para su actual renderización).*/
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