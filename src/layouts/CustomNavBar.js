import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import { HiMiniShoppingCart } from "react-icons/hi2";
import OffCanvas from '../components/OffCanvas';
export default function CustomNavBar(props) {
  const [show, setShow] = useState(false);

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
              <Nav.Link href="#action1" onClick={() => props.newViewFromApp("home")}>Home</Nav.Link>
              <Nav.Link href="#action2" onClick={() => props.newViewFromApp("about")}>About</Nav.Link>
              <Nav.Link href="#" onClick={() => props.newViewFromApp("contact")}>
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <div className='position-relative d-inline-block mx-5 mt-3'>
                <HiMiniShoppingCart size={35} className='m-3' onClick={handleShow} />
                <MDBBadge color='danger' pill className='position-absolute translate-middle'>
                  {props.cart.length}

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
      <OffCanvas handleClose={handleClose} show={show} cart={props.cart} setCart={props.setCart} />
    </div>
  )
}
