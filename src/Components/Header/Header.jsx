import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          SAFIA AHMED
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home" className="text-light">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Skills
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              My Projects
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Contect Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
