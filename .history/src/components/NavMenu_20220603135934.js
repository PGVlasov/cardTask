import { Navbar, Container, Nav } from "react-bootstrap";

export const NavMenu = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Личный Кабинет</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Карты</Nav.Link>
            <Nav.Link href="/checks">Чеки</Nav.Link>
            <Nav.Link href="/transactions">Транзакции</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
