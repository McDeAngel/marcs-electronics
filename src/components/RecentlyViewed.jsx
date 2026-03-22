import { useContext } from "react";
import { RecentlyViewedContext } from "../context/RecentlyViewedContext";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const RecentlyViewed = () => {
  const { recentlyViewed } = useContext(RecentlyViewedContext);

  if (recentlyViewed.length === 0) {
    return null;
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Recently Viewed</h3>
      <div className="row">
        {recentlyViewed.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;