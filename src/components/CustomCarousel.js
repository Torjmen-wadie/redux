import React, { Component } from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function CustomCarousel(props){
        return (
            <div>
                <MDBCarousel showIndicators showControls fade>
                    {props.carouselData.map((elem, index) => (
                        <MDBCarouselItem key={index} itemId={index + 1}>
                            <img src={elem.imgUrl} className='d-block w-100' alt='...' />
                            <MDBCarouselCaption>
                                <h5>{elem.title}</h5>
                                <p>{elem.description}</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    )
                    )}
                </MDBCarousel>
            </div>
        )
    }
