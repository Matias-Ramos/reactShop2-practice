//style
import "../css/itemListContainerSt.css";
//comp.
import ItemCount from "./ItemCount";

//Funciones modificadoras
let onAdd = (desiredAmount,setDesiredAmount, stock) => {
  if(desiredAmount<stock)
  setDesiredAmount(desiredAmount+1);
}
let onSubtract = (desiredAmount, setDesiredAmount) => {
  if(desiredAmount>1)
  setDesiredAmount(desiredAmount-1);
}

//Inmutabilidad para el inicializador
const itemCountInitializer = 1;

function ItemListContainer(prop) {
  return (
    <>
      <div id="itemListContainer">
        {prop.greeting}
        <br/>
        <br/>
        <ItemCount 
          initial={itemCountInitializer}
          stock={3}
          onAdd={onAdd}
          onSubtract={onSubtract}/>
        </div>
    </>
  )
}

export default ItemListContainer;