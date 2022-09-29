//Style
import "../css/ItemSt.css";
//Comp.
import {Link} from "react-router-dom";
//BTS
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Item( {id, product_name, price, organic, stock }) {
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
        <Link to={`/item/${id}`}>
          <Button variant="info" className="mt-2">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item;