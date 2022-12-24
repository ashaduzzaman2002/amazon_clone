import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Card, Badge, Button } from 'react-bootstrap';
import Rating from '../Rating';
import { FaShoppingCart } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import Loading from '../Loading';
import MessageBox from '../MessageBox';
import { Store } from '../../store/Store';

const url = 'http://localhost:5000/api/products/slug/';
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { slug } = useParams();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(url + slug);
      setProduct(data);
    } catch (error) {
      setError('Product not found');
    }
  };
  useEffect(() => {
    getProduct();
    setIsLoading(false);
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCart = async () => {
    const existItem = cart.cartItems.find(x => x._id === product._id)
    const quantity = existItem? existItem.quantity +1: 1
    const {data} = await axios('http://localhost:5000/api/products/'+product._id)

    if(data.countInStock < quantity){
      window.alert('Sorry. Product is out of stock')
    }


    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
  };

  return (
    <div>
      <Helmet>
        <title>{`${product.name} - Amazon - Clone`}</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant={'danger'} message={error} />
      ) : (
        <Row className="justify-content-between">
          <Col md={5}>
            <img
              className="image-large"
              src={product.image}
              alt={product.name}
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h1>{product.name}</h1>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating rating={product.rating} numReviews={product.reviews} />
              </ListGroup.Item>

              <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>

              <ListGroup.Item>
                Description:
                <p>{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>{product.price}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? (
                          <Badge bg="success">In Stock</Badge>
                        ) : (
                          <Badge bg="danger">Out of Stock</Badge>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        <Button onClick={addToCart} className="bg-custom">
                          {
                            <FaShoppingCart
                              style={{ paddingRight: '10px', fontSize: 30 }}
                            />
                          }
                          Add to cart
                        </Button>
                      </div>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetails;
