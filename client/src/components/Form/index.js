import React from "react";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

export default function Form({q, handleInputChange, handleFormSubmit}){
  return(
    <Form>
      <FormGroup>
      <label htmlFor="Query">
        <strong>Book</strong>
      </label>
      <FormControl 
      id="Title"
      type="text"
      value={q}
      placeholder="Ready Player One"
      name="q"
      onChange={handleInputChange}
      required      
      />
      </FormGroup>
      
    </Form>
  )
}