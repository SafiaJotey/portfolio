import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark p-4">
      <Container>
        <Navbar.Brand href="#home" className="text-light fw-bold">
          SAFIA AHMED
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className="text-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-auto">
            <Nav.Link href="#about" className="text-light mx-2">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="text-light mx-2">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="text-light mx-2">
              My Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light mx-2">
              Contect Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
