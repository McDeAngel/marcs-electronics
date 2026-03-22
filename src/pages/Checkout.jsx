import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  // 1. Get cart and clearCart from Context
  const { cart, clearCart } = useContext(CartContext);

  // 2. Form state (controlled components)
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    payment: "cod",
  });

  // 3. Track submission status
  const [submitted, setSubmitted] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  // 4. Compute totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.12; // 12% VAT
  const total = subtotal + tax;

  // 5. Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 6. Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!form.name || !form.email || !form.address || !form.phone) {
      alert("Please complete all fields");
      return;
    }

    // Save total BEFORE clearing cart
    setFinalTotal(total);

    // Clear the cart after successful order
    clearCart();

    // Show success page
    setSubmitted(true);
  };

  // 7. Show success message after order
  if (submitted) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-success">Order Confirmed!</h2>
        <p>Thank you, {form.name}. Your order has been placed.</p>
        <p className="fw-bold">Total Amount: ₱{finalTotal.toFixed(2)}</p>
        <Link to="/products" className="btn btn-primary mt-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

  // 8. Show empty cart if nothing to checkout
  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>Your cart is empty.</h3>
        <Link to="/products" className="btn btn-primary mt-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

  // 9. Render Checkout Form
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        {/* Checkout Form */}
        <div className="col-md-6">
          <h4 className="mb-3">Customer Information</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
                value={form.name}
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handleChange}
                value={form.email}
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                className="form-control"
                onChange={handleChange}
                value={form.address}
                required
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                onChange={handleChange}
                value={form.phone}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select
                name="payment"
                className="form-control"
                onChange={handleChange}
                value={form.payment}
              >
                <option value="cod">Cash on Delivery</option>
                <option value="gcash">GCash</option>
                <option value="card">Credit Card</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="col-md-6">
          <h4 className="mb-3">Order Summary</h4>
          <div className="card p-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.name} x{item.qty}
                </span>
                <span>₱{(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
            <hr />
            <p>Subtotal: ₱{subtotal.toFixed(2)}</p>
            <p>Tax (12%): ₱{tax.toFixed(2)}</p>
            <h5 className="text-danger">Total: ₱{total.toFixed(2)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;