//bts comp.
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ItemDetailCard({ product, ActionButton }) {
  return (
    <>
      <Card className="ItemDetailCard" style={{ width: "18rem" }}>
        <Card.Img
          src={require("../assets/fruits.jpeg")}
          alt="Imagen genérica de frutas"
        />
        <Card.Body>
          <Card.Title>{product.product_name}</Card.Title>
          <Card.Text>
            <i>{product.description}</i>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Es orgánico: {product.organic ? "✔" : "❌"}
          </ListGroup.Item>
          <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
          <ListGroup.Item>Stock: {product.stock}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <ActionButton />
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemDetailCard;
