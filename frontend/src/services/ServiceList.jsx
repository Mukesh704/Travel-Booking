import React from 'react'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import ServiceCard from './ServiceCard'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: "Get real-time weather forecasts to plan your perfect day, anywhere in the world.",
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: "Discover hidden gems with expert local guides for an authentic travel experience.",
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: "Create your dream trip with fully personalized tour plans.",
    },
]

const ServiceList = () => {
  return <>
  {
    servicesData.map((item, index) => (<Col lg='3' md="6" sm="12" className='mb-4' key={index}>
        <ServiceCard item={item} />
    </Col>))
  }
  </>
}

export default ServiceList