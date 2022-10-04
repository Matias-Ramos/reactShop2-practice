//Style
import "../css/ItemSt.css";
//BTS
import Card from 'react-bootstrap/Card';
//Comp.
import ItemActnBtn from "./ItemActnBtn";

function Item( {id, product_name, price, organic, stock, desiredAmount }) {
  return (
    <>
    <Card className="productCard">
      <Card.Body>
        <Card.Title>{product_name}</Card.Title>
        <Card.Text>
          Valor: ${price}
          <br />
          Orgánico: {organic?"✔":"❌"}
          <br />
          <ItemActnBtn id={id} stock={stock} desiredAmount={desiredAmount} />
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item;