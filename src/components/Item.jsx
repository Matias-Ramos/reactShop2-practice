//Style
import "../css/ItemSt.css";
//Comp.
import ItemCount from "./ItemCount";
//BTS
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Item( {product_name, price, organic, stock,
  itemCountInitializer, onAdd, onSubtract}) {
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
          Stock: {stock}
        </Card.Text>

        <ItemCount 
          initial={itemCountInitializer}
          stock={stock}
          onAdd={onAdd}
          onSubtract={onSubtract}/>

        <Button variant="primary" className="d-inline">Comprar</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item;