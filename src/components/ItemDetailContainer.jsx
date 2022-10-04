//hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//data
import { getProduct } from "../data/Mock_Data";
//comp.
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  //usePrms
  const { productId } = useParams();

  //useSt
  const [product, setProduct] = useState({});

  //value from database into state-var
  useEffect(() => {
    const item = getProduct(productId);
    item.then((item) => setProduct(item));
  }, [productId]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
}

export default ItemDetailContainer;
