import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import mainImg1 from '../assets/images/main-img1.jpg'
import mainImg2 from '../assets/images/main-img2.jpg'
import mainImg3 from '../assets/images/main-img3.jpg'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonaryImagesGallery from '../components/Image-gallery/MasonaryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
  
    {/*========== Main section start ========== */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="main_content">
            <div className="main_subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt="" />
            </div>
            <h1>Let's find some beautiful place to make <span className="highlight"> memories</span></h1>
            <p>Explore stunning destinations and craft unforgettable memories. Whether it's a serene beach escape, an adventurous mountain trek, or a cultural city tour, we offer personalized travel experiences with seamless planning and exclusive deals. Your perfect getaway is just a click away.</p>
          </div>
          </Col>
  
          <Col lg='2'>
          <div className="main_img-box main_img1-box">
            <img src={mainImg1} alt="" />
          </div>
          </Col>
          <Col lg='2'>
          <div className="main_img-box mt-4">
            <img src={mainImg2} alt="" />
          </div>
          </Col>
          <Col lg='2'>
          <div className="main_img-box mt-5">
            <img src={mainImg3} alt="" />
          </div>
          </Col>
  
          <SearchBar />
        </Row>
      </Container>
    </section>
    {/*========== Main section start ========== */}
  
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

    {/* ========== featured tour section start ========== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured_tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* ========== featured tour section end ========== */}

    {/* ========== experience section start ========== */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience_content">
              <Subtitle subtitle={'Experience'}/>
              <h2>With our all experience <br /> we will serve you</h2>
              <p>With our extensive experience, we ensure personalized service and unforgettable travel experiences crafted perfectly to suit your needs.</p>
            </div>
            
            <div className="counter_wrapper d-flex align-items-center gap-5">
              <div className="counter_box">
                <span>12k+</span>
                <h6>Successful trip</h6>
              </div>
              <div className="counter_box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter_box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience_img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ========== experience section end ========== */}

    {/* ========== gallery section start ========== */}
    <section className='gallery-section-padd'>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={"Gallery"}/>
            <h2 className="gallery_title">Visit our customers tour gallery  </h2>
          </Col>
          <Col lg='12'>
            <MasonaryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* ========== gallery section end ========== */}

    {/* ========== testimonial section start ========== */}
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
    {/* ========== testimonial section end ========== */}
    <Newsletter />
    
    </>
  )
}

export default Home