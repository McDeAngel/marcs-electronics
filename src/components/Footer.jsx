import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row">
          {/* Store Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">
              <i className="fas fa-store me-2"></i>Marc's Electronics
            </h5>
            <p className="text-light opacity-75 footer-text">
              Your trusted online destination for high-performance laptops, 
              gaming accessories, and premium computing devices. We bring 
              you the best brands at competitive prices.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white opacity-75 hover-opacity-100">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-opacity-100">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-opacity-100">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-opacity-100">
                <i className="fab fa-youtube fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  <i className="fas fa-chevron-right me-2 small"></i>Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  <i className="fas fa-chevron-right me-2 small"></i>Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  <i className="fas fa-chevron-right me-2 small"></i>About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  <i className="fas fa-chevron-right me-2 small"></i>Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/policies" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  <i className="fas fa-chevron-right me-2 small"></i>Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Customer Service</h5>
            <ul className="list-unstyled footer-contact">
              <li className="mb-3">
                <i className="fas fa-phone me-2 text-primary"></i>
                <span className="text-light opacity-75">+63 912 345 6789</span>
              </li>
              <li className="mb-3">
                <i className="fas fa-envelope me-2 text-primary"></i>
                <span className="text-light opacity-75 email-text">support@marselectronics.com</span>
              </li>
              <li className="mb-3">
                <i className="fas fa-clock me-2 text-primary"></i>
                <span className="text-light opacity-75">Mon - Sat: 9AM - 6PM</span>
              </li>
              <li className="mb-3">
                <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                <span className="text-light opacity-75">Manila, Philippines</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="text-light opacity-75 footer-text">
              Subscribe to get updates on new products and exclusive deals.
            </p>
            <form className="mt-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control rounded-start-pill"
                  placeholder="Your email"
                  aria-label="Email"
                />
                <button className="btn btn-primary rounded-end-pill" type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="border-light opacity-25 my-4" />
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-light opacity-75">
              © 2026 Marc's Electronics. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
            <span className="text-light opacity-75 me-3">
              <i className="fas fa-shield-alt me-1"></i> Secure Shopping
            </span>
            <span className="text-light opacity-75">
              <i className="fas fa-truck me-1"></i> Fast Delivery
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;