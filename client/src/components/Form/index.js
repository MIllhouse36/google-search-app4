import React from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Formmy({ q, handleInputChange, handleFormSubmit }) {
  return (
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
      <Button
        onClick={handleFormSubmit}
        type="submit"
        className="float-end "
        variant="danger"
      >
        search
      </Button>
    </Form>
  );
}
