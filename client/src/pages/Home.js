import React from "react";
import {Jumbotron, Row} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap"
import { Container } from "react-bootstrap";
import { useState } from "react";

export default function Home(){
  let [books, setBooks] = useState([]);
  let [q, setQ] = useState("");
  let [message, setMessage] = useState("Search For A Book to Begin");
  
  let handleInputChange = event =>{
    const { name, value } = event.target;
    setQ({
      [name]:value
    });
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <Jumbotron>
              <h1 className="text-center">
                <strong></strong>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
