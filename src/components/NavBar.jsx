//style
import "../css/navBarSt.css";
//bts
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

//comp.
import CartWidget from './CartWidget';
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {cartHookCtxt} from "../context/CartContext"

function NavBar() {
  const {productsBought} = useContext(cartHookCtxt);

    return (
      <>
      <Navbar bg="dark" variant="dark" id="navBar">
        <Container className="m-0">
          <Navbar.Brand>
            <CartWidget />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/category/fruits">
              <Button variant="outline-light" className="btnNavBar">Frutas</Button>
            </NavLink>
            <NavLink to="/category/vegetables">
              <Button variant="outline-light" className="btnNavBar">Verduras</Button>
            </NavLink>
          </Nav>
          <NavLink to="/cart">
            <img src="https://icongr.am/feather/shopping-cart.svg?size=30&color=fafafa" alt="cart Icon" />
            <span> {productsBought}</span>
          </NavLink>

        </Container>
      </Navbar>
      </>
  );
}



export default NavBar;