//Btsp
import Button from "react-bootstrap/Button";

function CartBtnPurchaseConf({ confirmPurchase }) {
  return (
    <Button variant="success" className="m-2" onClick={() => confirmPurchase()}>
      Finalizar compra
    </Button>
  );
}

export default CartBtnPurchaseConf;
