import { useEffect, useState } from "react";

// Production API URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Sidebar = ({ 
  selectedCategory, 
  setSelectedCategory, 
  priceRange, 
  setPriceRange 
}) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories from backend
  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Categories Fetch Error:", error);
        setLoading(false);
      });
  }, []);

  // Handle price range change
  const handlePriceChange = (e) => {
    setPriceRange([0, parseInt(e.target.value)]);
  };

  if (loading) {
    return <p>Loading categories...</p>;
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-dark text-white">
        <h5 className="mb-0">Filters</h5>
      </div>
      <div className="card-body">
        {/* Category Filter */}
        <h6 className="fw-bold mb-3">Categories</h6>
        <ul className="list-group list-group-flush mb-4">
          <li
            className={`list-group-item cursor-pointer ${selectedCategory === "All" ? "active" : ""}`}
            onClick={() => setSelectedCategory("All")}
            style={{ cursor: "pointer" }}
          >
            All
          </li>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`list-group-item cursor-pointer ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
              style={{ cursor: "pointer" }}
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Price Range Filter */}
        <h6 className="fw-bold mb-3">Price Range</h6>
        <input
          type="range"
          className="form-range"
          min="0"
          max="300000"
          step="10000"
          value={priceRange[1]}
          onChange={handlePriceChange}
        />
        <div className="d-flex justify-content-between mt-2">
          <span>₱0</span>
          <span className="fw-bold">₱{priceRange[1].toLocaleString()}</span>
        </div>

        {/* Reset Filters Button */}
        <button
          className="btn btn-outline-secondary w-100 mt-4"
          onClick={() => {
            setSelectedCategory("All");
            setPriceRange([0, 300000]);
          }}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;