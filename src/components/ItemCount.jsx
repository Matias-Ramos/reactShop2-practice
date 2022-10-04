//style
import "../css/itemCountSt.css";
//bts
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//comp
import {Link} from "react-router-dom";

function ItemCount({desiredAmount, stock, onAddQty, onSubtractQty, buyProduct})
{
    return (
        <>
        <Card
         className="itemCountCardContainer"
         bg="dark" variant="dark"
         style={{ display: 'inline-block' }}>
            <Card.Body>
                <div>
                    <Button variant="primary" onClick={ () => onSubtractQty(desiredAmount) }> - </Button>
                    <span className="desiredAmountSpan"> {desiredAmount} </span>
                    <Button variant="primary" onClick={ () => onAddQty(desiredAmount, stock) }> + </Button>
                </div>
                <Link to={`/cart`}>
                    <Button variant="success" className="mt-2" onClick={ () => buyProduct() }> Comprar! </Button>
                </Link>
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemCount;