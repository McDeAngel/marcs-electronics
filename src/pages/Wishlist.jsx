import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(price);
  };

  if (wishlist.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h3>Your wishlist is empty.</h3>
        <Link to="/products" className="btn btn-primary mt-3">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">My Wishlist</h2>
      <div className="row">
        {wishlist.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <div className="product-img-wrapper">
                <img
                  src={product.image}
                  className="card-img-top product-img"
                  alt={product.name}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{product.name}</h6>
                <div className="mb-2">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`fa-star ${index < product.rating ? 'fas text-warning' : 'far text-secondary'}`}
                    ></i>
                  ))}
                </div>
                <div className="mt-auto">
                  {product.oldPrice && (
                    <span className="text-muted text-decoration-line-through me-2">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                  <span className="fw-bold text-danger">{formatPrice(product.price)}</span>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => addToCart(product)}
                  >
                    <i className="fas fa-shopping-cart me-2"></i>
                    Add to Cart
                  </button>
                  <button 
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    <i className="fas fa-trash me-2"></i>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;