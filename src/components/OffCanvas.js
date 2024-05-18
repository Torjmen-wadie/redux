import React, { Component } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
export default class OffCanvas extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
         <Offcanvas show={this.props.show} onHide={this.props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    )
  }
}
