import Links from "./links/Links";
import "../styles/NavBar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

function ContainerOutsideExample() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="white">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Navbar.Brand>
                {" "}
                <img
                  src="/img/logo horizontal colorido.png"
                  width="245px"
                  height="62px"
                  className="justify-content-space-between"
                />
              </Navbar.Brand>
              <Nav.Link className="LinkUser" href="#">
                Olá, usuário |
              </Nav.Link>
              <button className="btnExit">sair</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ContainerOutsideExample;
