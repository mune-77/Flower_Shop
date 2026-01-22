
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';

function App() {


  return (
    <>
  <CartProvider>
     <Router>
    <Navbar />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/hero" element={<Hero />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/checkout" element={<Checkout />} />
       
    </Routes>
    <Footer />
   </Router>
  </CartProvider>
    </>
  )
}

export default App
