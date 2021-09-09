import React, {useState, useEffect} from "react";
import Jumbotron  from "react-bootstrap/Jumbotron";
import Card  from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import API from "../utils/API";
import { set } from "mongoose";

export default function Saved (){
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.getSavedBooks();
    })
    
  const getSavedBooks = ()=>{
    API.getSavedBooks()
    .then(res=> 
      setBooks(res.data))
      .catch(err=>console.log(err))
  }
  return(
    <div>
    </div>
  )
}