import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

// Import global CSS
import '../StyleSheet/homeScreen.css';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      <div className="wrapper fadeIn">
        <Container fluid>
          {!keyword ? (
            <div className="carouselCard">
              <ProductCarousel />
            </div>
          ) : (
            <Link
              to='/'
              className='btn btn-outline-secondary mb-4 shadow-sm rounded-pill px-4 py-2'
            >
              ← Go Back
            </Link>
          )}

          <h1 className="title">Latest Products</h1>
          <p className="subtitle">Browse our newest arrivals and top-rated tech gear</p>

          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              <Row className='g-4 mb-4'>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <div className="productCardWrapper">
                      <Product product={product} />
                    </div>
                  </Col>
                ))}
              </Row>
              <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ''}
              />
            </>
          )}
        </Container>
      </div>
    </>
  )
}

export default HomeScreen
