import { useContext } from "react";
import { ComparisonContext } from "../context/ComparisonContext";
import { Link } from "react-router-dom";

const Comparison = () => {
  const { compareList, removeFromCompare, clearCompare } = useContext(ComparisonContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
    }).format(price);
  };

  if (compareList.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h3>No products to compare.</h3>
        <Link to="/products" className="btn btn-primary mt-3">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Product Comparison</h2>
        <button className="btn btn-outline-danger" onClick={clearCompare}>
          Clear All
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th style={{ width: "200px" }}>Feature</th>
              {compareList.map((product) => (
                <th key={product.id} style={{ minWidth: "250px" }}>
                  <div className="position-relative">
                    <button
                      className="btn btn-sm btn-danger position-absolute top-0 end-0"
                      onClick={() => removeFromCompare(product.id)}
                      style={{ zIndex: 10 }}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "150px", height: "150px", objectFit: "contain" }}
                    />
                    <h6 className="mt-2">{product.name}</h6>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Price</strong></td>
              {compareList.map((product) => (
                <td key={product.id}>{formatPrice(product.price)}</td>
              ))}
            </tr>
            <tr>
              <td><strong>Original Price</strong></td>
              {compareList.map((product) => (
                <td key={product.id}>
                  {product.oldPrice ? formatPrice(product.oldPrice) : "N/A"}
                </td>
              ))}
            </tr>
            <tr>
              <td><strong>Discount</strong></td>
              {compareList.map((product) => (
                <td key={product.id}>{product.discount ? `-${product.discount}%` : "N/A"}</td>
              ))}
            </tr>
            <tr>
              <td><strong>Rating</strong></td>
              {compareList.map((product) => (
                <td key={product.id}>
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`fa-star ${index < product.rating ? 'fas text-warning' : 'far text-secondary'}`}
                    ></i>
                  ))}
                </td>
              ))}
            </tr>
            <tr>
              <td><strong>Category</strong></td>
              {compareList.map((product) => (
                <td key={product.id}>{product.category || "N/A"}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center mt-4">
        <Link to="/products" className="btn btn-primary">
          Add More Products
        </Link>
      </div>
    </div>
  );
};

export default Comparison;