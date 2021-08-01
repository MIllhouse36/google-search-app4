import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
export default function NoMatch() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
