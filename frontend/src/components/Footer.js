import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Global CSS
import '../StyleSheet/footer.css'

const Footer = () => {
  return (
    <footer className='footer mt-auto'>
      <Container>
        <Row className='py-4 footer-top'>
          <Col md={4}>
            <h5 className='footer-heading'>ProShop</h5>
            <p className='footer-text'>
              Your one-stop destination for quality tech products at unbeatable prices.
            </p>
          </Col>
          <Col md={4}>
            <h6 className='footer-subheading'>Quick Links</h6>
            <ul className='footer-links'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/cart'>Cart</Link></li>
              <li><Link to='/login'>Sign In</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6 className='footer-subheading'>Contact</h6>
            <p className='footer-text'>
              Email: support@proshop.com <br />
              Phone: +1 234 567 8901
            </p>
          </Col>
        </Row>
        <Row className='footer-bottom'>
          <Col className='text-center py-3'>
            &copy; {new Date().getFullYear()} ProShop. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
