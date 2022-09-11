import ItemListContainerSt from "../css/itemListContainerSt.css";

function ItemListContainer(prop) {
  return (
    <div id="itemListContainer">{prop.greeting}</div>
  )
}

export default ItemListContainer;