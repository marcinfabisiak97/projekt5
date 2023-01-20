import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [textarea, setTextarea] = useState("");
  const [noSpacesString, setNoSpacesString] = useState("");
  const removeSpaces = (value: string) => {
    return value.split(" ").join("");
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setNoSpacesString(removeSpaces(event.target.textarea.value));
  };
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="text-align-center">
                  Please input right string
                </Form.Label>
                <Form.Control
                  id="textarea"
                  value={textarea}
                  onChange={(e) => setTextarea(e.target.value)}
                  as="textarea"
                  rows={4}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <p>{noSpacesString}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
