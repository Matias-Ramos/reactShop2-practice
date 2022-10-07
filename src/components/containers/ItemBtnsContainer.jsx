//Comp.
import ItemBtnDeletePurchase from "../buttons/ItemBtnDeletePurchase";
import ItemBtnRdceAmount from "../buttons/ItemBtnRdceAmount";
import ItemBtnShowDetails from "../buttons/ItemBtnShowDetails";

function ItemBtnsContainer( {id, desiredAmount} ) {
  return (
    <>
        {
            desiredAmount? //desiredAmount truthy = CartContainer route
            <ItemBtnDeletePurchase id={id} />
            :
            <ItemBtnShowDetails id={id} /> //desiredAmount falsy = ItemListContainer route
        }

        {
            desiredAmount > 1 &&
            <ItemBtnRdceAmount id={id} /> //CartContainer route
        }

    </>
  )
}

export default ItemBtnsContainer