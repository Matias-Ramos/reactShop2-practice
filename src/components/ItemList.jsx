import {Link} from "react-router-dom";
//Componente de presentación
import Item from "./Item";

//Funciones modificadoras del ItemCount.jsx
let onAdd = (desiredAmount,setDesiredAmount, stock) => desiredAmount<stock && setDesiredAmount(desiredAmount+1);
let onSubtract = (desiredAmount, setDesiredAmount) => desiredAmount>1 && setDesiredAmount(desiredAmount-1);

//Inmutabilidad del inicializador para ItemCount.jsx
const itemCountInitializer = 1;
  

function ItemList( {productList} ) {
    return (
        <>
        {
            productList.map( item => {
                return(
                <Link to={`/item/${item.id}`} key={item.id}>
                    <Item 
                        product_name={item.product_name}
                        price={item.price}
                        organic={item.organic}
                        stock={item.stock}
                        onAdd={onAdd}
                        onSubtract={onSubtract}
                        itemCountInitializer={itemCountInitializer}/>
                </Link>)
            })
        }
        </>
    )
}

export default ItemList;