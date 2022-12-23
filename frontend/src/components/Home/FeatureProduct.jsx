import React from 'react';
import { Link } from 'react-router-dom';

const FeatureProduct = ({product}) => {
  return (
    <div className="product">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product_info">
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          to={`/product/${product.slug}`}
        >
          <p>{product.name}</p>
        </Link>
        <p>
          <strong>₹{product.price}</strong>
        </p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default FeatureProduct;
