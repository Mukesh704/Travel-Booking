import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import mainImg1 from '../assets/images/main-img1.jpg'
import mainImg2 from '../assets/images/main-img2.jpg'
import mainImg3 from '../assets/images/main-img3.jpg'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';

const Home = () => {
  return <>

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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate placeat facilis non magni similique, possimus natus ipsum quo quisquam, unde quis quia excepturi! Maxime sed recusandae autem illum. Consequuntur, odit.</p>
        </div>
        </Col>

        <Col lg='2'>
        <div className="main_img-box">
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
  </>
}

export default Home