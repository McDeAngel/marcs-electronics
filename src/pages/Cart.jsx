import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(price);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const handleIncrement = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.qty + 1);
    }
  };

  const handleDecrement = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.qty > 1) {
      updateQuantity(id, item.qty - 1);
    }
  };

  const handleQuantityInput = (id, value) => {
    const qty = parseInt(value);
    if (!isNaN(qty) && qty >= 1) {
      updateQuantity(id, qty);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <div className="cart-empty-card">
          <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
          <h3 className="mb-3">Your cart is empty</h3>
          <p className="text-muted mb-4">Add some products to get started!</p>
          <Link to="/products" className="btn btn-primary btn-lg">
            <i className="fas fa-shopping-bag me-2"></i>
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold mb-4 text-center">
        <i className="fas fa-shopping-cart me-3"></i>
        Shopping Cart
      </h1>

      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8 mb-4">
          <div className="card shadow-sm border-0">
            <div className="card-body p-3 p-md-4">
              <div className="cart-items">
                {cart.map((item) => (
                  <div className="cart-item mb-3 pb-3 border-bottom" key={item.id}>
                    <div className="row align-items-center">
                      {/* Product Image */}
                      <div className="col-4 col-md-3 col-lg-2 mb-2 mb-md-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid cart-item-img"
                          style={{ 
                            maxWidth: '100%', 
                            height: 'auto',
                            maxHeight: '100px',
                            objectFit: 'contain'
                          }}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="col-8 col-md-5 col-lg-4">
                        <h6 className="cart-item-title mb-1">{item.name}</h6>
                        <p className="text-primary fw-bold mb-0">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="col-6 col-md-4 col-lg-3 mt-2 mt-md-0">
                        <div className="input-group input-group-sm">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => handleDecrement(item.id)}
                            disabled={item.qty <= 1}
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            type="number"
                            className="form-control text-center"
                            value={item.qty}
                            onChange={(e) => handleQuantityInput(item.id, e.target.value)}
                            min="1"
                            style={{ maxWidth: '60px' }}
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => handleIncrement(item.id)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <div className="col-6 col-md-4 col-lg-3 mt-2 mt-md-0 text-end">
                        <button
                          className="btn btn-danger btn-sm w-100"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="fas fa-trash me-1"></i>
                          <span className="d-none d-md-inline">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear Cart Button */}
              <div className="text-center mt-3">
                <button
                  className="btn btn-outline-danger"
                  onClick={clearCart}
                >
                  <i className="fas fa-trash-alt me-2"></i>
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 sticky-top" style={{ top: '100px' }}>
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                <i className="fas fa-receipt me-2"></i>
                Order Summary
              </h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span className="fw-bold">{formatPrice(calculateTotal())}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Shipping</span>
                <span className="text-success">FREE</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold text-primary fs-5">
                  {formatPrice(calculateTotal())}
                </span>
              </div>
              <Link to="/checkout" className="btn btn-success w-100 py-3">
                <i className="fas fa-credit-card me-2"></i>
                Proceed to Checkout
              </Link>
              <Link to="/products" className="btn btn-outline-primary w-100 mt-2">
                <i className="fas fa-arrow-left me-2"></i>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;