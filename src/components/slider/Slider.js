import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css'
import { ReactDOM } from 'react';


export default function Slider() {
    return (
        <div className='slider'>
            <Carousel showThumbs={false} autoPlay={true} transitionTime={1}>
                <div className='img'>
                    <img src='https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?w=2000' />
                </div>
                <div className='img'>
                    <img src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?cs=srgb&dl=pexels-david-mcbee-1546168.jpg&fm=jpg" />
                </div>
                <div className='img'>
                    <img src="https://thecanalcity.com/wp-content/uploads/2021/02/Are-you-Starting-your-Career-in-Real-Estate.jpg" />
                </div>
            </Carousel>
        </div>
    )
}
