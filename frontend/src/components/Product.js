import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

// Global CSS
import '../StyleSheet/Product.css'

const Product = ({ product }) => {
  return (
    <Card className='product-card'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' className='product-img' />
      </Link>

      <Card.Body className='product-body'>
        <Link to={`/product/${product._id}`} className='product-link'>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div' className='product-rating'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3' className='product-price'>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
