import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <Spinner style={{ color: '#FF9529' }} animation="border" role={'status'}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loading;
