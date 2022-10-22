import Button from "react-bootstrap/Button";

function ItemBtnRdceAmount({ id, reduceProductAmountByOne }) {
  return (
    <Button
      variant="info"
      className="m-2"
      onClick={() => reduceProductAmountByOne(id)}
    >
      Reducir cantidad en 1
    </Button>
  );
}

export default ItemBtnRdceAmount;
