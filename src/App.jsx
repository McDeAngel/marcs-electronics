import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import About from './pages/About';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Comparison from './pages/Comparison';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Top Navbar - Hidden on Mobile */}
        <Navbar />
        
        <main className="flex-grow-1 container-fluid px-4 py-4 pb-bottom-nav">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/comparison" element={<Comparison />} />
          </Routes>
        </main>
        
        <Footer />
        
        {/* Bottom Navigation - Mobile Only */}
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;