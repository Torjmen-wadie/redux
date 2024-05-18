import React, { Component } from 'react'
import CustomCarousel from '../components/CustomCarousel'
import axios from "axios"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';
import CardImg from 'react-bootstrap/esm/CardImg';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      carouselData: [{ imgUrl: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg", title: "First slide label", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { imgUrl: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg", title: "Secound slide label", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { imgUrl: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg", title: "Third slide label", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }]
      , products: [],
      loading: false,
      update: false
    };
  }
  fetchAllProducts = () => {
    const response = axios.get("http://localhost:4000/products").then((res) => {
      this.setState({
        products: res.data,
        loading: true
      })
    })
      .catch((err) => { console.log(err) })
  }
  handleDelete = (id) => {
    const response = axios.delete(`http://localhost:4000/products/${id}`).then((res) => {
      this.setState({
        update: !this.state.update 
      })
    }).catch((err) => { console.log(err) })
  }
  componentDidMount() {
    this.fetchAllProducts()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.update !== prevState.update) {
      this.fetchAllProducts()
    }
  }

  render() {
    console.log(this.state.update," update")
    return (
      <div>
        <CustomCarousel carouselData={this.state.carouselData} />
        {this.state.loading === true ? (<div className='d-flex flex-wrap gap-4 justify-content-center mt-4'>
          {this.state.products.map((elem, index) => (
            <Card style={{ width: '18rem' }} key={index} >
              <Card.Img variant="top" src={elem.image} />
              <Card.Body>
                <Card.Title>{elem.productName}</Card.Title>
                <Card.Text>
                  {elem.description}
                </Card.Text>
                <h5>{elem.price}</h5>
                <Button variant="primary">buy</Button>
                <Button variant="danger" onClick={() => this.handleDelete(elem.id)}>Delete</Button>
              </Card.Body>
            </Card>
          ))}
        </div>) : (<div className='d-flex flex-wrap gap-4 justify-content-center mt-4'>
          {Array.from({ length: 3 }).map((_, index) => (

            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.cdot.in/cdotweb/assets/img/products/placeholder.png" />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
              </Card.Body>
            </Card>

          ))}
        </div>
        )}

      </div>
    )
  }
}
