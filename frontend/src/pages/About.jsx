import React from 'react'
import '../styles/about.css'

import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../shared/CommonSection'
import descImg from '../assets/images/description-img.avif'
import ServiceList from '../services/ServiceList';
import Subtitle from '../shared/Subtitle'
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const About = () => {

    return(
        <>
            <CommonSection title={"About Us"} />
            <section className='description'>
                <Container>
                    <Row>
                        <Col lg='7'>
                            <div className="description_content">
                                <h2>We Are Very Trusted Tour And Travel Agency, Standing Up For You All</h2>
                                <p>We are a highly trusted tour and travel agency dedicated to providing exceptional service and unforgettable experiences. With years of expertise and a commitment to customer satisfaction, we stand by you every step of your journey. Our knowledgeable team works tirelessly to craft personalized travel plans that cater to your unique preferences. Let us turn your travel dreams into reality, ensuring peace of mind throughout your adventures.</p>
                            </div>
                        </Col>
                        <Col lg='5'>
                        {/* <Row className='right'>Professional</Row>
                        <Row className='right'>Trusted Company</Row>
                        <Row className='right'>Friendly To Customer</Row> */}
                            <div className="decription_img">
                                <img src={descImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section>
                <Container>
                  <Row>
                    <Col lg='3'>
                    <h5 className="services_subtitle">What we serve</h5>
                    <h2 className="services_title">We offer the best services</h2>
                    </Col>
                    <ServiceList />
                  </Row>
                </Container>
            </section>

            <section>
              <Container>
                <Row>
                  <Col lg='12'>
                  <Subtitle subtitle={'Customers Love'}/>
                  <h2 className="testimonial_title">What our customers say about us</h2>
                  </Col>
                  <Col lg='12'>
                  <Testimonials />
                  </Col>
                </Row>
              </Container>
            </section>

            <Newsletter />
        </>
    )
}

export default About