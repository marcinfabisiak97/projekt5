import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
const FormComponent = () => {
  const [textarea, setTextarea] = useState("");
  const [noSpacesString, setNoSpacesString] = useState("");
  const removeSpaces = (value: string): string => {
    return value.replace(/\s/g, "");
  };
  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    setNoSpacesString(removeSpaces(textarea));
  };
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 8, offset: 2 }}>
          <Form onSubmit={handleSubmit} className="d-grid gap-3 ">
            <Form.Group
              className="mt-5"
              controlId="exampleForm.ControlTextarea1"
            >
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Please write only strings"
              >
                <Form.Control
                  value={textarea}
                  onChange={(event) => setTextarea(event.target.value)}
                  as="textarea"
                  placeholder="Please insert string"
                  style={{ height: "100px" }}
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <Button className="col-12" variant="primary" type="submit">
              Submit
            </Button>
            <Button
              className="col-12"
              variant="primary"
              onClick={() => {
                setTextarea("");
                setNoSpacesString("");
              }}
            >
              Reset
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm={{ span: 8, offset: 2 }}>
          <p>{noSpacesString}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
