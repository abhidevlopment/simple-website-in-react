import React from "react";
import { Container } from "react-bootstrap";

export default function Layout(props) {
  return (
    <Container>
      <div>{props.children}</div>
    </Container>
  );
}
