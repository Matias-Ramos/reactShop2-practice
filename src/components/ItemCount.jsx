//style
import "../css/itemCountSt.css";
//bts
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//comp
import {Link} from "react-router-dom";

function ItemCount({desiredAmount, stock, onAdd, onSubtract, addPurchase})
{
    return (
        <>
        <Card
         className="itemCountCardContainer"
         bg="dark" variant="dark"
         style={{ display: 'inline-block' }}>
            <Card.Body>
                <div>
                    <Button variant="primary" onClick={ () => onSubtract(desiredAmount) }> - </Button>
                    <span className="desiredAmountSpan"> {desiredAmount} </span>
                    <Button variant="primary" onClick={ () => onAdd(desiredAmount, stock) }> + </Button>
                </div>
                <Link to={`/cart`}>
                    <Button variant="success" className="mt-2" onClick={ () => addPurchase(desiredAmount) }> Comprar! </Button>
                </Link>
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemCount;