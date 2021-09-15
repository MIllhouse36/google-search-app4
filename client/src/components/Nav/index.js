import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { useState, useEffect } from "react";

function Nav() {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  let updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (open && newState.width > 991) {
      newState.open = false;
    }
    setWidth(newState);
  };

  let toggleNav = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    window.removeEventListener("resize", updateWidth);
  });

  return (
    // <Navbar expand="lg" variant="light" bg="light" className="mb-2 p-2 brad">
    //   <Navbar.Brand as={Link}>Google Books</Navbar.Brand>
    //   <NavbarToggle
    //     onClick={toggleNav}
    //     data-toggle="collapse"
    //     data-target="#navbarNav"
    //     aria-controls="navbarNav"
    //     aria-label="Toggle navigation"
    //   >
    //     <span></span>
    //   </NavbarToggle>
    // </Navbar>

    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
    <Link className="navbar-brand" to="/">
      Google Books
    </Link>
    <button
      onClick={toggleNav}
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className={`${open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            onClick={toggleNav}
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            to="/"
          >
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link
            onClick={toggleNav}
            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            to="/saved"
          >
            Saved
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;
