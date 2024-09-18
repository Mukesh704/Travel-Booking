import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const quick_links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]

const Footer = () => {
  
  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, similique.</p>

            <div className="social_links d-flex align-items-center gap-4">
              <span>
                <Link to='#'><i class="ri-youtube-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-github-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-facebook-circle-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-instagram-line"></i></Link>
              </span>
            </div>
          </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer_link-title'>Discover</h5>

            <ListGroup className='footer_quick-links'>
              {
                quick_links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer_link-title'>Quick Links</h5>

            <ListGroup className='footer_quick-links'>
              {
                quick_links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer_link-title'>Contact</h5>

            <ListGroup className='footer_quick-links'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-3 '>
                    <span><i class="ri-map-pin-line"></i></span>
                    Address:
                  </h6>
                  <p className='mb-0'>Chhattisgarh, India</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-3 '>
                    <span><i class="ri-mail-line"></i></span>
                    Email:
                  </h6>
                  <p className='mb-0'>mukeshdalai101@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-3 '>
                    <span><i class="ri-phone-fill"></i></span>
                    Phone:
                  </h6>
                  <p className='mb-0'>+916263294639</p>
                </ListGroupItem>
            </ListGroup>
          </Col>
          
          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>Copyright {year}, design and developed by Mukesh Kumar Dalai. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer