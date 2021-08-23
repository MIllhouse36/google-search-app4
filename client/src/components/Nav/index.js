import './style.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Button } from "react-bootstrap"


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

  return (
    <Navbar expand="lg" variant="light" bg="light" className="mb-2" >
     <Navbar.Brand as={Link}>
       Google Books
     </Navbar.Brand>
    </Navbar>
  );
}

export default Nav;
