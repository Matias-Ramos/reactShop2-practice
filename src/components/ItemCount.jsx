//style
import "../css/itemCountSt.css";
//bts
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//hook
import {useState} from "react";

function ItemCount({initial, stock, onAdd, onSubtract})
{
    const [desiredAmount, setDesiredAmount] = useState(initial);

    return (
        <>
        <Card
         className="itemCountCardContainer"
         bg="dark" variant="dark"
         style={{ display: 'inline-block' }}>
            <Card.Body>
                <div>
                    <Button variant="primary" onClick={ () => onSubtract(desiredAmount, setDesiredAmount) }> - </Button>
                    <span className="desiredAmountSpan"> {desiredAmount} </span>
                    <Button variant="primary" onClick={ () => onAdd(desiredAmount, setDesiredAmount, stock) }> + </Button>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemCount;