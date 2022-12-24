import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import {FaShoppingCart} from 'react-icons/fa'

const FeatureProduct = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img className="card-img-top" src={product.image} alt={product.name} />
      </Link>

      <Card.Body>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          to={`/product/${product.slug}`}
        >
          <Card.Text>{product.name}</Card.Text>
        </Link>
        <Rating rating={product.rating} numReviews = {product.reviews} />
        <Card.Text>₹{product.price}</Card.Text>
        <Button className='bg-custom'>{<FaShoppingCart style={{paddingRight: "10px", fontSize: 30}} />}Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default FeatureProduct;
