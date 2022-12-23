import React, { useEffect, useState } from 'react';
import axios from 'axios'
import FeatureProduct from './FeatureProduct';

const url = 'http://localhost:5000/api/products';
const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const {data} = await axios.get(url)
    setProducts(data)
  }
  useEffect(() => {
    getProducts()
  }, []);

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>Featured Products</h1>

      <div className="products">
        {!products.length? (
          <h4>No product found</h4>
        ) : (
          products.map((product, i) => (
            <FeatureProduct key={i} product={product} />
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
