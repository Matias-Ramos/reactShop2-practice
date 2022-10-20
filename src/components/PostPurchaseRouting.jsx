//comp
import { Link } from "react-router-dom";
//bts
import Button from "react-bootstrap/Button";

function PostPurchaseRouting() {
  return (
    <>
      <Link to={`/`}>
        <Button variant="success" className="mt-2 w-100">
          Seguir comprando
        </Button>
      </Link>
      <Link to={`/cart`}>
        <Button variant="secondary" className="mt-2 w-100">
          Ver carrito
        </Button>
      </Link>
    </>
  );
}

export default PostPurchaseRouting;
