
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
function App() {


  return (
    <>
  <CartProvider>
     <Router>
    <Navbar />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/hero" element={<Hero />} />
       
    </Routes>
    <Footer />
   </Router>
  </CartProvider>
    </>
  )
}

export default App
