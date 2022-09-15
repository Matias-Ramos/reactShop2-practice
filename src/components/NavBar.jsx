//bts
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//comp.
import CartWidget from './CartWidget';

function NavBar() {
  
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container className="m-0">
          <Navbar.Brand href="#home">
            <CartWidget />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Contacto</Nav.Link>
            <Nav.Link href="#features">Faq</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}



export default NavBar;