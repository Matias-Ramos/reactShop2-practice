import { NavLink } from "react-router-dom";

function CartWidget() {
  return (
    <>
      <NavLink to="/">
        <img src="https://icongr.am/simple/aerlingus.svg?size=40&color=ebffef&colored=false" className="img-fluid" alt="Brand icon" />  
        <span> TiendaMia </span>
      </NavLink>
    </>
    )
}

export default CartWidget;