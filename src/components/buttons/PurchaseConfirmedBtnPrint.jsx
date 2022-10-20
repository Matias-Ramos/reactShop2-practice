//BTS
import Button from "react-bootstrap/Button";
//Comp
import ReactToPrint from "react-to-print";

function PurchaseConfirmedBtnPrint({ purchaseTicketRef }) {
  return (
    <ReactToPrint
      trigger={() => <Button className="m-2">Imprimir ticket</Button>}
      content={() => purchaseTicketRef.current}
    />
  );
}

export default PurchaseConfirmedBtnPrint;
