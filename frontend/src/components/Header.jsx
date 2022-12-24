import React, { useContext } from 'react';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Store } from '../store/Store';
import { Link } from 'react-router-dom';

const Header = () => {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                className="brand"
                src="/images/logo_white.png"
                alt="amazon"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto text-light">
            <Link className="text-light" style={{ fontSize: 25 }} to={'/cart'}>
              <FaShoppingCart />
              {cart.cartItems.length > 0 && (
                <Badge
                  style={{
                    width: '15px',
                    height: '15px',
                    fontSize: '8px',
                    position: 'relative',
                    bottom: 10,
                    right: 6
                  }}
                  pill
                  bg="danger"
                >
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
