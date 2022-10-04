//Componente de presentación
import Item from "./Item";

function ItemList( {productList} ) {
    return (
        <>
        {
            productList.map( item => {
                return(
                    <Item 
                     key={item.id} 
                     id={item.id}
                     product_name={item.product_name}
                     price={item.price}
                     organic={item.organic}
                     stock={item.stock}/>
                )
            })
        }
        </>
    )
}

export default ItemList;