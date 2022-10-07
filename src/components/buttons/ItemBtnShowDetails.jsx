//Comp.
import {Link} from "react-router-dom";
//BTS
import Button from 'react-bootstrap/Button';

function ItemBtnDetailDelete( {id} ) {

    return (
    <>
      <Link to={`/item/${id}`}>
        <Button variant="info" className="m-2">Ver detalle</Button>
      </Link>
    </>
  )
}

export default ItemBtnDetailDelete;