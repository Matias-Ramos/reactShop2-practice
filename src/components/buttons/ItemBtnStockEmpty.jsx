//BTS
import Button from 'react-bootstrap/Button';
//Comp.
import {Link} from "react-router-dom";

function ItemBtnStockEmpty() {
    return (
        <>
        <span style={{ color: 'red' }}>Producto sin stock</span>
        <Link to={`/`}>
            <Button variant="info" className="m-2">Volver a galería de productos</Button>
        </Link>
        </>
  )
}

export default ItemBtnStockEmpty;