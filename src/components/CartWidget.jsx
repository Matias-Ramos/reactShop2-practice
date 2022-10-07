//comp.
import {NavLink} from "react-router-dom";

function CartWidget({qtyOfBoughtProducts}) {

    return (
        <NavLink to="/cart">
            <img src="https://icongr.am/feather/shopping-cart.svg?size=30&color=fafafa" alt="cart Icon" />
            <span> {qtyOfBoughtProducts}</span>
        </NavLink>
    )
}

export default CartWidget;