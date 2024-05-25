import React, { Component, useEffect, useState } from 'react'
import CustomCarousel from '../components/CustomCarousel'
import axios from "axios"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';
import CardImg from 'react-bootstrap/esm/CardImg';
import {carouselImg}  from '../constant/carouselImg';

export default function Home(props) {
  const[products, setProduct]=useState([]);
  const [loading,setLoading]=useState(false);
  const[carouselData,setCarouselData] =useState(carouselImg);
  const[update,setUpdate]=useState(false);

  const handleAddToCart= (produit)=>{
    props.setCart([...props.cart,produit])
    console.log(props.cart,"this cart")
  }

  const fetchAllProducts = () => {
    const response = axios.get("http://localhost:4000/products").then((res) => {
        setProduct(res.data);
        setLoading(true);
      })
      .catch((err) => { console.log(err) })
  }
 const handleDelete = (id) => {
    const response = axios.delete(`http://localhost:4000/products/${id}`).then((res) => {
    setUpdate(!update)
    }).catch((err) => { console.log(err) })
  }

 useEffect(()=>{
    fetchAllProducts()
  },[update])
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
                <Button variant="primary" onClick={()=>handleAddToCart(elem)}>add to cart</Button>
                <Button variant="danger" onClick={() =>handleDelete(elem.id)}>Delete</Button>
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
