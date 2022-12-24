import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeatureProduct from './FeatureProduct';
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Loading from '../Loading';
import MessageBox from '../MessageBox';

const url = 'http://localhost:5000/api/products';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(url);
      setProducts(data);
    } catch (error) {
      setError('Product not found');
    }
    
  };
  useEffect(() => {
    getProducts();
    setIsLoading(false);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Amazon - Clone</title>
      </Helmet>
      <h1 className="mt-5 mb-4 text-center">Featured Products</h1>

      {isLoading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant={'danger'} message={error} />
      ) : (
        <div>
          <Row>
            {products.map((product, i) => (
              <Col key={i} sm={6} md={4} lg={3} className="mb-3">
                <FeatureProduct product={product} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </main>
  );
};

export default Home;
