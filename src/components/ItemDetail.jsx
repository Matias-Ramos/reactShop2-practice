//style
import "../css/ItemDetailSt.css";
//bts comp.
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//comp.
import ItemCount from "./ItemCount";
import {useState, useContext} from "react";
import {cartHookCtxt} from "../context/CartContext"

function ItemDetail({product}) {

    //Funciones modificadoras del ItemCount.jsx
    let onAddQty = (desiredAmount, stock) => desiredAmount<stock && setDesiredAmount(desiredAmount+1);
    let onSubtractQty = desiredAmount => desiredAmount>1 && setDesiredAmount(desiredAmount-1);
    //Inmutabilidad del inicializador para ItemCount.jsx
    const itemCountInitializer = 1;

    //Variable de estado
    const [desiredAmount, setDesiredAmount] = useState(itemCountInitializer);

    //contexto
    const cartContext = useContext(cartHookCtxt);

    //función intermedia para la compra del producto
    function buyProduct () {
        cartContext.addProductToCart(product, desiredAmount)
    }

    return (
        <div className="ItemDetail">
        <Card className="ItemDetailCard" style={{ width: '18rem' }}>
        <Card.Img src={require("../assets/fruits.jpeg")} alt="Imagen genérica de frutas"/>        
            <Card.Body>
                <Card.Title>{product.product_name}</Card.Title>
                <Card.Text>                
                <i>{product.description}</i>
                </Card.Text>
            </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Es orgánico: {product.organic?"✔":"❌"}</ListGroup.Item>
                    <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
                    <ListGroup.Item>Stock: {product.stock}</ListGroup.Item>
                </ListGroup>
            <Card.Body>
                <ItemCount 
                desiredAmount={desiredAmount}
                stock={product.stock} 
                onAddQty={onAddQty}
                onSubtractQty={onSubtractQty}
                buyProduct={buyProduct}
                />
                
            </Card.Body>
        </Card>
        </div>
    );
}
export default ItemDetail;