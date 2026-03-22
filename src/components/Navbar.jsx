import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const wishlistCount = wishlist.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container-fluid px-4">
        {/* Brand Logo & Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://i.ibb.co/Kxc0PRDK/59fa9a02-db5b-4857-96be-d8f82d5ab1fb-removalai-preview.png"
            alt="Marc's Electronics Logo"
            style={{ height: '50px', marginRight: '10px' }}
          />
          <span className="navbar-brand-text fw-bold" style={{ fontSize: '1.3rem' }}>
            Marc's <span className="text-primary">Electronics</span>
          </span>
        </Link>

        {/* Mobile Toggle Button - FIXED */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/policies">Policies</Link>
            </li>
            
            {/* Icon Group - FIXED for Mobile */}
            <li className="nav-item">
              <ul className="navbar-nav flex-row gap-3 ms-2 align-items-center">
                {/* Wishlist Icon */}
                <li className="nav-item">
                  <Link className="nav-link position-relative" to="/wishlist">
                    <i className="fas fa-heart wishlist-icon"></i>
                    {wishlistCount > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                        {wishlistCount}
                      </span>
                    )}
                  </Link>
                </li>
                
                {/* Cart Icon */}
                <li className="nav-item">
                  <Link className="nav-link position-relative" to="/cart">
                    <i className="fas fa-shopping-cart cart-icon"></i>
                    {totalItems > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{ fontSize: '0.6rem' }}>
                        {totalItems}
                      </span>
                    )}
                  </Link>
                </li>
                
                {/* Dark Mode Toggle */}
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link theme-toggle p-0"
                    onClick={toggleTheme}
                    title={darkMode ? 'Light Mode' : 'Dark Mode'}
                  >
                    {darkMode ? (
                      <i className="fas fa-sun theme-icon"></i>
                    ) : (
                      <i className="fas fa-moon theme-icon"></i>
                    )}
                  </button>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search Form - Hidden on Mobile */}
          <form className="d-none d-lg-flex ms-3" role="search">
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
              style={{ maxWidth: '250px' }}
            />
            <button className="btn btn-primary rounded-pill" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;