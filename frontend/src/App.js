import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import ProductDetails from './components/Home/ProductDetails';

function App() {
  return (
    <div className="d-flex flex-column site-container">
      <Header />
      <main>
        <Container className='mt-3'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:slug" element={<ProductDetails />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
