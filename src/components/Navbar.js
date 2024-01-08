import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#" rel="canonical">
          <img src="manaliLogoTransparent.png" width={"70px"} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto">
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#volunteer">Volunteering</Nav.Link>
            <Nav.Link href="#awards">Awards</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/manali-biswas" rel="nofollow"><i class="bi bi-linkedin"></i></Nav.Link>
            <Nav.Link href="https://www.youtube.com/@procoder3771" rel="nofollow"><i class="bi bi-youtube"></i></Nav.Link>
            <Nav.Link href="https://github.com/manali-biswas" rel="nofollow"><i class="bi bi-github"></i></Nav.Link>
            <Nav.Link href="https://www.buymeacoffee.com/manalibiswas" rel="nofollow"><i class="bi bi-cup-hot-fill"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
