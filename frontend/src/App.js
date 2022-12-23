import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import ProductDetails from './components/Home/ProductDetails';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product/:slug' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
