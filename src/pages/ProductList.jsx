import { useEffect, useState, useRef } from "react";
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import Skeleton from '../components/Skeleton';

// Production API URL - Works for both local and deployed
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const ProductList = () => {
  // State for products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State for Infinite Scroll
  const [displayedCount, setDisplayedCount] = useState(4);
  const itemsPerPage = 4;
  const loaderRef = useRef(null);

  // State for Search
  const [searchTerm, setSearchTerm] = useState("");

  // State for Filter
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 300000]);

  // State for Sort
  const [sortBy, setSortBy] = useState("default");

  // Fetch products from backend
  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
        setDisplayedCount(itemsPerPage);
      })
      .catch((error) => {
        console.error("API Fetch Error:", error);
        setLoading(false);
      });
  }, []);

  // Filter and sort products
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedCategory !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  filteredProducts = filteredProducts.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // Reset displayed count when filters/search/sort change
  useEffect(() => {
    setDisplayedCount(itemsPerPage);
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  // Infinite Scroll - Load More Products
  useEffect(() => {
    // Check if there are more products to load
    const hasMore = displayedCount < filteredProducts.length;

    // If no more products, disconnect observer
    if (!hasMore) {
      return;
    }

    // Create observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setDisplayedCount((prev) => prev + itemsPerPage);
        }
      },
      { threshold: 0.5 }
    );

    // Observe the loader element
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // Cleanup: disconnect observer
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [displayedCount, filteredProducts.length]);

  // Get products to display
  const productsToDisplay = filteredProducts.slice(0, displayedCount);

  // Skeleton Loading State
  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-3 mb-4">
            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white">
                <h5 className="mb-0">Filters</h5>
              </div>
              <div className="card-body">
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text mb-2"></div>
                <div className="skeleton-text"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-9">
            <div className="row">
              {[...Array(8)].map((_, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                  <Skeleton />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-2 col-md-3 mb-4">
          <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>

        {/* Products */}
        <div className="col-lg-10 col-md-9">
          {/* Search & Sort Bar */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <input
              type="text"
              className="form-control w-auto"
              placeholder="🔍 Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ maxWidth: "300px" }}
            />

            <select
              className="form-select w-auto"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ maxWidth: "250px" }}
            >
              <option value="default">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Product Name (A-Z)</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>

          {/* Results Count */}
          <p className="text-muted mb-3">
            Showing {productsToDisplay.length} of {filteredProducts.length} products
          </p>

          {/* Product Grid */}
          <div className="row">
            {productsToDisplay.length > 0 ? (
              productsToDisplay.map((product) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-12 text-center mt-5">
                <h4>No products found</h4>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </div>

          {/* Infinite Scroll Loader - Only show if more products exist */}
          {displayedCount < filteredProducts.length && (
            <div ref={loaderRef} className="text-center my-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading more products...</p>
            </div>
          )}

          {/* All Products Loaded Message */}
          {displayedCount >= filteredProducts.length && productsToDisplay.length > 0 && (
            <p className="text-center text-muted mt-4">
              ✓ All products loaded
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;