import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiMiniShoppingCart } from "react-icons/hi2";
import OffCanvas from '../components/OffCanvas';
export default class CustomNavBar extends Component {
    constructor(props){
        super(props)
        this.state={
            show:false
        }
    }
 handleClose = () => {
    this.setState({show:false})
 };
 handleShow =()=>{
    this.setState({show:true})
 }
  render() {
    return (
        <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" onClick={()=>this.props.newViewFromApp("home")}>Home</Nav.Link>
              <Nav.Link href="#action2" onClick={()=>this.props.newViewFromApp("about")}>About</Nav.Link>
              <Nav.Link href="#" onClick={()=>this.props.newViewFromApp("contact")}>
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
            <HiMiniShoppingCart size={50} className='m-3' onClick={this.handleShow}/>
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
      <OffCanvas handleClose={this.handleClose} show={this.state.show}/>
      </div>
    )
  }
}
