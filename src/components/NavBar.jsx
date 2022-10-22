//style
import "../css/navBarSt.css";
//bts
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
//comp.
import HomeWidget from "./HomeWidget";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
//hook
import { useContext, useState } from "react";
import { cartHookCtxt } from "../context/CartContext";

function NavBar() {

  const [categoryHighlight, setCategoryHighlight] = useState(null);

  const { calculateQtyOfBoughtProducts } = useContext(cartHookCtxt);
  const qtyOfBoughtProducts = calculateQtyOfBoughtProducts();

  return (
    <>
      <Navbar bg="dark" variant="dark" id="navBar">
        <Container className="m-0">
          <Navbar.Brand onClick={ () => setCategoryHighlight(null) }>
            <HomeWidget />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/category/fruits">
              <Button
                variant="outline-light"
                className={ categoryHighlight === "fruits" ? "btnNavBar active" : "btnNavBar" }
                onClick={() => setCategoryHighlight("fruits")}
              >
                Frutas
              </Button>
            </NavLink>
            <NavLink to="/category/vegetables">
              <Button
                variant="outline-light"
                className={ categoryHighlight === "vegetables" ? "btnNavBar active" : "btnNavBar" }
                onClick={() => setCategoryHighlight("vegetables")}
              >
                Verduras
              </Button>
            </NavLink>
          </Nav>
          {
            //shows CartWidget.jsx only if one or more products have been bought.
              qtyOfBoughtProducts > 0 && (
              <CartWidget qtyOfBoughtProducts={qtyOfBoughtProducts} />
            )
          }
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
