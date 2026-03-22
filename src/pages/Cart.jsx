import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  // 1. Get cart and functions from Context
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  // 2. Calculate Total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // 3. Format Price to PHP
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(price);
  };

  // 4. Show empty cart message
  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h3>Your cart is empty.</h3>
        <Link to="/products" className="btn btn-primary mt-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

  // 5. Render Cart Items
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          {cart.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start"
                    alt={item.name}
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{formatPrice(item.price)}</p>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h4>Total: {formatPrice(total)}</h4>
              {/* 6. Checkout Link (Revised) */}
              <Link to="/checkout" className="btn btn-success w-100 mt-3">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;