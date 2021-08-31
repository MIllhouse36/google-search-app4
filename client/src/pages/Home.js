import React from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
import { Row } from "react-bootstrap"
import Card  from "../components/Card";
import Form from "../components/Form";
import Col from "react-bootstrap/Col"
import  Container  from "react-bootstrap/Container";
import { useState } from "react";
import API from "../utils/API"
import Book from "../components/Book"
import  Button  from "react-bootstrap/Button";
import {List} from "../components/List"
import Footer from "../components/Footer"
import "./style.css"

export default function Home(){
  let [books, setBooks] = useState([]);
  let [q, setQ] = useState("");
  let [message, setMessage] = useState("Search For A Book to Begin");
  
  let handleInputChange = event =>{
    let { name, value } = event.target;
    setQ({
      [name]:value
    });
  }

  let getBooks = ()=>{
    API.getBooks(q)
    .then(res => 
      setBooks(res.data
        ))
    .catch(()=>
    setBooks([]));
    setMessage("No New Books Found, Try a Different Query");
  }

  let handleFormSubmit = event => {
    event.preventDefault();
    getBooks();
  }

  let handleBookSave = id => {
    const book = books.find(book => book.id === id);
    
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(()=> getBooks());
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="jumbotron rounded-3 mt-4">
              <h1 className="text-center ">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </div>
          </Col>
          <Col md={12}>
            <Card title="Book Search" icon=" fa-book">
              <Form
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
              q={q}
              />
              
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card title="Results">
              {books.length ? (

              <List>
              {books.map(book =>(
                <Book
                key={book.id}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                link={book.volumeInfo.infolink}
                authors={book.volumeInfo.authors.join(", ")}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                Btn={() => (
                  <Button
                  onClick={() => handleBookSave(book.id)}
                  variant="primary"
                  className="ml-2"
                  >
                    Save
                  </Button>
                )}
                />
              ))}
              </List>
              ) : (<h2 className="text-center">{message}</h2>)}
            </Card>
          </Col>
        </Row>
        <Footer/>
      </Container>
    </div>
  )
}
