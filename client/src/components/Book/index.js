import React from "react";
import { ListItem } from "../List";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// function Book({ title, subtitle, authors, link, description, image, Btn }) {
//   return (
//     <ListItem>
//       <Row className="flex-wrap-reverse">
//         <Col md={8}>
//           <h3 className="font-italic">{title}</h3>
//           {subtitle && <h5 className="fontitalic">{subtitle}</h5>}
//         </Col>
//         <Col md={4}>
//           <div className="btn-container">
//             <Button
//               variant="light"
//               target="_blank"
//               rel="noopener noreferrer"
//               href={link}
//             >
//               View
//             </Button>
//             <Btn />
//           </div>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={6}>
//           <p className="font-italic small">Written by {authors}</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={2} sm={4}>
//           <Image className="w-100" fluid thumbnail src={image} alt={title} />
//         </Col>
//         <Col md={10} sm={8}>
//           <p>{description}</p>
//         </Col>
//       </Row>
//     </ListItem>
//   );
// }
// export default Book;

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col className="col-md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col className="col-md-4">
          <div className="btn-container">
            <a
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-sm-4 col-md-2">
          <img
            className="img-thumbnail img-fluid w-100"
            src={image}
            alt={title}
          />
        </Col>
        <Col className="col-12 col-sm-8 col-md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
