import React, {useState, useEffect} from "react";
import Jumbotron  from "react-bootstrap/Jumbotron";
import Card  from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import API from "../utils/API";

export default function Saved (){
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getSavedBooks();
    })
    
  const getSavedBooks = ()=>{
    API.getSavedBooks()
    .then(res=> 
      setBooks(res.data))
      .catch(err=>console.log(err))
  }
  const handleBookDelete = id =>{
    API.deleteBook(id).then(res => getSavedBooks())
  }
  return(
    <Container>
      <Row>
        <Col md={12}>
          <Jumbotron>
            <h1 className="text-center">
              <strong>(React) Google Books Search</strong>
            </h1>
            <h2 className="text-center">Search for and Save Books of Interest.</h2>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card title="Saved Books" icon="download">

          </Card>
        </Col>
      </Row>
    </Container>
  )
}