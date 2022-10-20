//comp
import ItemCount from "../ItemCount";
import PostPurchaseRouting from "../PostPurchaseRouting";
//Bts
import Card from "react-bootstrap/Card";

function ItemCountContainer({
  desiredAmount,
  stock,
  onAddQty,
  onSubtractQty,
  buyProduct,
  buyConfirmed,
}) {
  return (
    <Card
      className="itemCountCardContainer"
      bg="dark"
      variant="dark"
      style={{ display: "inline-block" }}
    >
      <Card.Body>
        {buyConfirmed === false ? (
          <ItemCount
            desiredAmount={desiredAmount}
            stock={stock}
            onAddQty={onAddQty}
            onSubtractQty={onSubtractQty}
            buyProduct={buyProduct}
          />
        ) : (
          <PostPurchaseRouting />
        )}
      </Card.Body>
    </Card>
  );
}

export default ItemCountContainer;
