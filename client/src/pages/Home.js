import React from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Card from "../components/Card";
import Form from "../components/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { useState } from "react";
import API from "../utils/API";
import Book from "../components/Book";
import Button from "react-bootstrap/Button";
import { List } from "../components/List";
import Footer from "../components/Footer";
import "./style.css";

function Home() {
  let [books, setBooks] = useState([]);
  let [query, setQuery] = useState("");
  let [message, setMessage] = useState("Search For A Book to Begin");

  // const handleInputChange = (event) => {
  //   let { name, value } = event.target;
  //   setQuery((name = value));
  // };



  const handleInputChange = (event) => {
    console.log(event.target.value);
    setQuery(event.target.value);
  };

  const getBooks = () => {
    console.log(query)
    API.getBooks(query)
      .then((res) => setBooks(res.data))
      .catch(() => setBooks([]));
    setMessage("No New Books Found, Try a Different Query");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getBooks();
  };

  const handleBookSave = (id) => {
    const book = books.find((book) => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(() => getBooks());
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <Jumbotron className="rounded-3 mt-4">
              <h1 className="text-center ">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">
                Search for and Save Books of Interest.
              </h2>
            </Jumbotron>
          </Col>
          <Col md={12}>
            <Card title="Book Search" icon=" fa-book">
              <Form
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                q={query}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card title="Results">
              {books.length ? (
                <List>
                  {books.map((book) => (
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
              ) : (
                <h2 className="text-center">{message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}

export default Home;
