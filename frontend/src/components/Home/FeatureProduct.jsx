import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import {FaShoppingCart} from 'react-icons/fa'
import { useContext } from 'react';
import { Store } from '../../store/Store';
import axios from 'axios';

const FeatureProduct = ({ product }) => {
  const {state, dispatch: ctxDispatch} = useContext(Store) 
  const {cart} = state
  const addToCart = async () => {
    const existItem = cart.cartItems.find(x => x._id === product._id)
    const quantity = existItem?existItem.quantity +1: 1
    const {data} = await axios('http://localhost:5000/api/products/'+product._id)

    if(data.countInStock < quantity){
      window.alert('Sorry. Product is out of stock')
    }else{
      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...product, quantity },
      });
    }
  };
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
        <Button onClick={addToCart} className='bg-custom'>{<FaShoppingCart style={{paddingRight: "10px", fontSize: 30}} />}Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default FeatureProduct;
