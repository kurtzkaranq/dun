import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Header({ data }) {
  const titles = Object.keys(data);
  const style = {
    backgroundColor: "grey",
  };
  return (
    <Navbar style={style}>
      <Container>
        <Navbar.Brand href="#home">Lessons</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-around">
          {titles &&
            titles.map((e, i) => (
              <Nav.Link key={i} href={`/${e}`}>
                {e}
              </Nav.Link>
            ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
