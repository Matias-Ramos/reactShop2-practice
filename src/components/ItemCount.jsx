//style
import "../css/itemCountSt.css";
//bts
import Button from "react-bootstrap/Button";

function ItemCount({
  desiredAmount,
  stock,
  onAddQty,
  onSubtractQty,
  buyProduct,
}) {
  return (
    <>
      <div>

        <Button variant="primary" onClick={() => onSubtractQty(desiredAmount)}>
          {" "} - {" "}
        </Button>

        <span className="desiredAmountSpan"> {desiredAmount} </span>

        <Button variant="primary" onClick={() => onAddQty(desiredAmount, stock)} >
          {" "} + {" "}
        </Button>

      </div>
      
      <Button variant="success" className="mt-2" onClick={() => buyProduct()}>
        Comprar!
      </Button>
    </>
  );
}

export default ItemCount;
