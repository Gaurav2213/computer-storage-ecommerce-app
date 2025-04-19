import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../StyleSheet/CheckOut.css'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='checkout-steps justify-content-center mb-4'>

      <Nav.Item className='step-wrapper'>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link className='step-link completed'>
              <span className='step-circle'><i className='fas fa-check'></i></span>
              <span className='step-label'>Sign In</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='step-link disabled'>
            <span className='step-circle'>1</span>
            <span className='step-label'>Sign In</span>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className='step-wrapper'>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link className='step-link completed'>
              <span className='step-circle'><i className='fas fa-check'></i></span>
              <span className='step-label'>Shipping</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='step-link disabled'>
            <span className='step-circle'>2</span>
            <span className='step-label'>Shipping</span>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className='step-wrapper'>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link className='step-link completed'>
              <span className='step-circle'><i className='fas fa-check'></i></span>
              <span className='step-label'>Payment</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='step-link disabled'>
            <span className='step-circle'>3</span>
            <span className='step-label'>Payment</span>
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className='step-wrapper'>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link className='step-link completed'>
              <span className='step-circle'><i className='fas fa-check'></i></span>
              <span className='step-label'>Place Order</span>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='step-link disabled'>
            <span className='step-circle'>4</span>
            <span className='step-label'>Place Order</span>
          </Nav.Link>
        )}
      </Nav.Item>

    </Nav>
  )
}

export default CheckoutSteps
