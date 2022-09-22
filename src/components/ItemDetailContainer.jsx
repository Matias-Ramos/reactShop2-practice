//hooks
import {useEffect, useState} from "react";
//data
import {getProduct} from "../data/Mock_Data"
//comp.
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

    //state-var
    const [product, setProduct] = useState( {} );

    //value from database into state-var
    let productIdToBeReturned = 0;
     useEffect( () => {
        const item = getProduct(productIdToBeReturned);
        item.then( item => setProduct(item) );
     }, [productIdToBeReturned] )

    return (
    <>
        <ItemDetail product={product} />
    </>)
}

export default ItemDetailContainer;