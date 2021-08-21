import './style.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';


function Nav() {
  return (
    <Navbar expand="lg" variant="light" bg="light" className="mb-2" >
     <Navbar.Brand as={Link}>
       Google Books
     </Navbar.Brand>
    </Navbar>
  );
}

export default Nav;
