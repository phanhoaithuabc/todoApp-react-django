import React from "react";
import { Navbar } from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap/Container";
function App() {
  return (
    <div>
      <Navbar bg="light" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="">
            Todo App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
