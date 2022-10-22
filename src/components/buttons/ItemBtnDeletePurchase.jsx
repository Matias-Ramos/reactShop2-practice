import Button from "react-bootstrap/Button";

function ItemBtnDeletePurchase({ id, clearProductFromCart }) {
  return (
    <Button
      variant="secondary"
      className="m-2"
      onClick={() => clearProductFromCart(id)}
    >
      Eliminar compra del carrito
    </Button>
  );
}

export default ItemBtnDeletePurchase;
