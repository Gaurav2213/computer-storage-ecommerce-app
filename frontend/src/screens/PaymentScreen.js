import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

// Import global CSS
import '../StyleSheet/PaymentScreen.css';

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1 className='payment-title'>Payment Method</h1>
      <Form onSubmit={submitHandler} className='payment-form'>
        <Form.Group>
          <Form.Label as='legend' className='form-label'>
            Select Method
          </Form.Label>
          <Col className='radio-group'>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='radio-option'
            />
            {/* Future option:
            <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='radio-option'
            /> */}
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary' className='w-100 mt-3'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
