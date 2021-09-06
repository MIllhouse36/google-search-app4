import React from "react";
import Form from "react-bootstrap/Form";


function Formmy({q, handleInputChange, handleFormSubmit }) {
  return (
    // <Form>
    //   <Form.Group>
    //     <label htmlFor="Query">
    //       <strong>Book</strong>
    //     </label>
    //     <Form.Control
    //       id="Title"
    //       type="text"
    //       value={q}
    //       placeholder="Ready Player One"
    //       name="q"
    //       onChange={handleInputChange}
    //       required
    //     />
    //   </Form.Group>
    //   <Button
    //     onClick={handleFormSubmit}
    //     type="submit"
    //     className="float-end "
    //     variant="danger"
    //   >
    //     search
    //   </Button>
    // </Form>
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="float-end">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}
export default Formmy;