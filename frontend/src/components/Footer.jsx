import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer =() => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-left text-light mt-5'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <Link className='text-light' style={{textDecoration: 'none'}} to='/'>
          Amazon@clone.com
        </Link>
      </div>
    </MDBFooter>
  );
}


export default Footer