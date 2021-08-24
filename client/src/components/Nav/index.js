import './style.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Button } from "react-bootstrap"
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useState, useEffect } from 'react';


function Nav() {
    
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  
  let updateWidth = () => {
    const newState = { width: window.innerWidth};

    if(open && newState.width > 991){
      newState.open = false;
    }
    setWidth(newState);
  }

  let toggleNav = () => {
    setOpen(!open)
  }

  useEffect(() => {
  window.addEventListener("resize", updateWidth)
  window.removeEventListener("resize", updateWidth)
  })

  return (
    <Navbar expand="lg" variant="light" bg="light" className="mb-2" >
     <Navbar.Brand as={Link}>
       Google Books
     </Navbar.Brand>
    <NavbarToggle 
    onClick={toggleNav}
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-label="Toggle navigation"
    >
      <span></span>
    </NavbarToggle>
    </Navbar>
    
  );
}

export default Nav;
