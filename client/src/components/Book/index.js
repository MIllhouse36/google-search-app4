import React from "react";
import { ListItem } from "../List";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Book({title, subtitle, authors, link, description, image, Button}){
  return(
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col md={8}>
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="fontitalic">{subtitle}</h5>}
        </Col>
      </Row>
    </ListItem>
  )
}
export default Book