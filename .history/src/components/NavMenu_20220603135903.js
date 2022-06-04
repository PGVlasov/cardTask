import { Navbar, Container, Nav } from "react-bootstrap";

export const NavMenu = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/checks">Личный Кабинет</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Карты</Nav.Link>
            <Nav.Link href="#features">Чеки</Nav.Link>
            <Nav.Link href="#pricing">Транзакции</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
