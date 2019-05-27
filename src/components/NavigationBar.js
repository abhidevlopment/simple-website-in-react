import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #999;
  }

  .navbar-brand,
  .navbar-nav,
  nav-link {
    color: #666;
    &:hover {
      color: white;
    }
  }
`;

export default function NavigationBar() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">code Life</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-Navbar-Nav" />
        <Navbar.Collapse id="basik-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              {" "}
              <Nav.Link href="/">Home </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}