import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/ymcalogo.svg";
import "../css/poolNavbar.css";

export function PoolNavbar(): JSX.Element {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="YMCA Logo"
            src={Logo}
            width="60px"
            height="60px"
            className="img-responsive"
          />
          {""}
          YMCA of Delaware Lane Availability
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#pool">
            <strong>Pool Diagram</strong>
          </Nav.Link>
          <Nav.Link href="#schedule">
            <strong>Pool Schedule</strong>
          </Nav.Link>
        </Nav>
        <Nav.Link
          className="ymca-link"
          href="https://www.ymcade.org/"
          target="_blank"
        >
          <strong>YMCA Website</strong>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
