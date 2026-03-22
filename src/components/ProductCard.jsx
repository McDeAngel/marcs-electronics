import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { ComparisonContext } from "../context/ComparisonContext";
import { RecentlyViewedContext } from "../context/RecentlyViewedContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, isInWishlist } = useContext(WishlistContext);
  const { addToCompare, compareList } = useContext(ComparisonContext);
  const { addRecentlyViewed } = useContext(RecentlyViewedContext);

  const inWishlist = isInWishlist(product.id);
  const inCompare = compareList.some((item) => item.id === product.id);

  // Track when product is viewed
  const handleProductClick = () => {
    addRecentlyViewed(product);
  };

  return (
    <div className="card h-100 shadow-sm" onClick={handleProductClick}>
      {product.discount && (
        <span className="sale-badge">-{product.discount}%</span>
      )}
      
      {/* Wishlist Button */}
      <button
        className={`wishlist-btn ${inWishlist ? 'active' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          addToWishlist(product);
        }}
      >
        <i className={`fas ${inWishlist ? 'fa-heart' : 'fa-heart'}`}></i>
      </button>

      {/* Compare Button */}
      <button
        className={`compare-btn ${inCompare ? 'active' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          addToCompare(product);
        }}
      >
        <i className="fas fa-balance-scale"></i>
      </button>

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
              ₱{product.oldPrice}
            </span>
          )}
          <span className="fw-bold text-danger">₱{product.price}</span>
        </div>
        <button 
          className="btn btn-primary mt-3" 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          <i className="fas fa-shopping-cart me-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;