import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { ThemeContext } from '../context/ThemeContext';

const BottomNav = () => {
  const location = useLocation();
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = wishlist.length;

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container">
        {/* Home */}
        <Link to="/" className={`bottom-nav-item ${isActive('/') ? 'active' : ''}`}>
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>

        {/* Products */}
        <Link to="/products" className={`bottom-nav-item ${isActive('/products') ? 'active' : ''}`}>
          <i className="fas fa-store"></i>
          <span>Products</span>
        </Link>

        {/* Wishlist */}
        <Link to="/wishlist" className={`bottom-nav-item ${isActive('/wishlist') ? 'active' : ''}`}>
          <div className="nav-icon-wrapper">
            <i className="fas fa-heart"></i>
            {wishlistCount > 0 && (
              <span className="nav-badge bg-danger">{wishlistCount}</span>
            )}
          </div>
          <span>Wishlist</span>
        </Link>

        {/* Cart */}
        <Link to="/cart" className={`bottom-nav-item ${isActive('/cart') ? 'active' : ''}`}>
          <div className="nav-icon-wrapper">
            <i className="fas fa-shopping-cart"></i>
            {totalItems > 0 && (
              <span className="nav-badge bg-primary">{totalItems}</span>
            )}
          </div>
          <span>Cart</span>
        </Link>

        {/* Menu */}
        <Link to="/about" className={`bottom-nav-item ${isActive('/about') ? 'active' : ''}`}>
          <i className="fas fa-bars"></i>
          <span>Menu</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;