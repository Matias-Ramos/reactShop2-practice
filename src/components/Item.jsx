//Style
import "../css/ItemSt.css";
//BTS
import Card from "react-bootstrap/Card";
//Comp.
import ItemBtnsContainer from "./containers/ItemBtnsContainer";

function Item({ id, product_name, price, organic, stock, desiredAmount }) {
  return (
    <>
      <Card className="productCard">
        <Card.Body>
          <Card.Title>{product_name}</Card.Title>
          <Card.Text>
            Valor: ${price}
            <br />
            Orgánico: {organic ? "✔" : "❌"}
            <br />
            {
              desiredAmount !== undefined ? 
              ( <span>Cantidad: {desiredAmount}</span> ) //desiredAmount undefined = CartContainer route
              : 
              ( <span>Stock: {stock}</span> ) //desiredAmount !undefined = ItemListContainer route
            }
            <br />
            <ItemBtnsContainer
              id={id}
              stock={stock}
              desiredAmount={desiredAmount}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
