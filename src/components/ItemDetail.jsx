//style
import "../css/ItemDetailSt.css";
//bts comp.
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//comp.
import ItemCountContainer from "./containers/ItemCountContainer";
import ItemBtnStockEmpty from "./buttons/ItemBtnStockEmpty";
import { DotSpinner } from '@uiball/loaders'
//hooks
import {useState, useContext} from "react";
import {cartHookCtxt} from "../context/CartContext"


function ItemDetail({product}) {

    //contexto
    const cartContext = useContext(cartHookCtxt);
    
    //Funciones modificadoras del ItemCount.jsx
    let onAddQty = (desiredAmount, stock) => desiredAmount<stock && setDesiredAmount(desiredAmount+1);
    let onSubtractQty = desiredAmount => desiredAmount>1 && setDesiredAmount(desiredAmount-1);

    //Inmutabilidad del inicializador para ItemCount.jsx
    const itemCountInitializer = 1;
    
    //Variable de estado
    const [desiredAmount, setDesiredAmount] = useState(itemCountInitializer);
    const [buyConfirmed, setBuyConfirmed] = useState(false);

    //función intermedia para la compra del producto
    function buyProduct () {
        cartContext.addProductToCart(product, desiredAmount);
        setBuyConfirmed(true);
    }

    return (
        <div className="ItemDetail">
        {
            product.product_name === undefined ? 
            <div id="dotWaveDiv"> 
                <DotSpinner 
                size={40}
                speed={0.9} 
                color="black" 
                />
            </div>
            :
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
                        <ListGroup.Item >Stock: {product.stock}</ListGroup.Item>
                    </ListGroup>
                <Card.Body>
                    {
                        product.stock===0 ? 
                        <ItemBtnStockEmpty />
                        :
                        <ItemCountContainer 
                        desiredAmount={desiredAmount}
                        stock={product.stock} 
                        onAddQty={onAddQty}
                        onSubtractQty={onSubtractQty}
                        buyProduct={buyProduct}
                        buyConfirmed={buyConfirmed}
                        />
                    }
    
                    
                </Card.Body>
            </Card>
        }
        </div>
    );
}
export default ItemDetail;