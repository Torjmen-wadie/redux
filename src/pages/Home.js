import React, { Component, useContext, useEffect, useState } from 'react'
import CustomCarousel from '../components/CustomCarousel'
import axios from "axios"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';
import CardImg from 'react-bootstrap/esm/CardImg';
import { carouselImg } from '../constant/carouselImg';
import { CartContext } from '../cartContext';
;

export default function Home(props) {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [carouselData, setCarouselData] = useState(carouselImg);
  const [update, setUpdate] = useState(false);

  const {cart,dispatch} = useContext(CartContext);
  
  const handleAddToCart = (produit) => {
      dispatch({type: "ADD_ITEM", payload : produit})
      // when you call dispath: react call your reducer with the current state and the action you have provided
  }
  console.log(cart, "this is cart")
  // on va filtrer sur card par id, si product.id === item.id, quantity =item.quantiy+1 sinon item
  // bech nlawej fi woet el cart kena l9ite element bech na3mel jomled wadie eli hiya stare 22 sinon bech nkhali le elem, quantity:1
  const fetchAllProducts = () => {
    const response = axios.get("http://localhost:4000/products").then((res) => {
      setProduct(res.data);
      setLoading(true);
    })
      .catch((err) => { console.log(err) })
  }
  // useEffect(() => {
  //   const savedItem = JSON.parse(localStorage.getItem("cart"))
  //   if(savedItem.length) {props.setCart(savedItem)}
  // }, [])
  
  useEffect(() => {
    if(cart.length)localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const handleDelete = (id) => {
    const response = axios.delete(`http://localhost:4000/products/${id}`).then((res) => {
      setUpdate(!update)
    }).catch((err) => { console.log(err) })
  }

  useEffect(() => {
    fetchAllProducts()
  }, [update])
  return (
    <div>
      <CustomCarousel carouselData={carouselImg} />
      {loading === true ? (<div className='d-flex flex-wrap gap-4 justify-content-center mt-4'>
        {products.map((elem, index) => (
          <Card style={{ width: '18rem' }} key={index} >
            <Card.Img variant="top" src={elem.imageUrl} />
            <Card.Body>
              <Card.Title>{elem.productName}</Card.Title>

              <Card.Text>
                {elem.description}
              </Card.Text>
              <h5>{elem.price}</h5>
              <Button variant="primary" onClick={() => handleAddToCart(elem)}>add to cart</Button>
              <Button variant="danger"  onClick={()=>props.newViewFromApp("productDetails",elem)}>View more details</Button>
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
