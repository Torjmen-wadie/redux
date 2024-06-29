import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBBadge } from 'mdb-react-ui-kit';
import { HiMiniShoppingCart } from "react-icons/hi2";
import OffCanvas from '../components/OffCanvas';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../cartContext';

export default function CustomNavBar() {

  const {cart, setCart} = useContext(CartContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary z-3 " style={{height:"30",width:"100%",position:"fixed",top:0}} >
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={()=>navigate("/")}>Home</Nav.Link>
              <Nav.Link  onClick={()=>navigate("/about")}>About</Nav.Link>
              <Nav.Link onClick={()=>navigate("/contact")}>
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <div className='position-relative d-inline-block mx-5 mt-3'>
                <HiMiniShoppingCart size={35} className='m-3' onClick={handleShow} />
                <MDBBadge color='danger' pill className='position-absolute translate-middle'>
                  {cart.reduce((acc, elem)=>elem.quantity+acc ,0)}

                </MDBBadge>
              </div>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <OffCanvas handleClose={handleClose} show={show}/>
    </div>
  )
}
