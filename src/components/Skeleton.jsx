const Skeleton = () => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="product-img-wrapper">
        <div className="skeleton-image"></div>
      </div>
      <div className="card-body d-flex flex-column">
        <div className="skeleton-text skeleton-title"></div>
        <div className="skeleton-text skeleton-stars"></div>
        <div className="skeleton-text skeleton-price"></div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export default Skeleton;