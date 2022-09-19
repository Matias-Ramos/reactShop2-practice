//Presentational-component
import Item from "./Item";

//Funciones modificadoras
let onAdd = (desiredAmount,setDesiredAmount, stock) => desiredAmount<stock && setDesiredAmount(desiredAmount+1);
let onSubtract = (desiredAmount, setDesiredAmount) => desiredAmount>1 && setDesiredAmount(desiredAmount-1);

//Inmutabilidad para el inicializador
const itemCountInitializer = 1;
  

function ItemList( {productList} ) {
    return (
        <>
        { productList.map( item => 
            <Item 
             key={item.id}
             product_name={item.product_name}
             price={item.price}
             organic={item.organic}
             stock={item.stock}
             onAdd={onAdd}
             onSubtract={onSubtract}
             itemCountInitializer={itemCountInitializer}
            />
             )}
        </>
  )
}

export default ItemList;