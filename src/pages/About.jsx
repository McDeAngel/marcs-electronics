const About = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold mb-3">
            Welcome to <span className="text-primary">Marc's Electronics</span>
          </h1>
          <p className="lead text-muted">
            Your trusted partner for premium laptops and gaming accessories
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src="https://i.ibb.co/Kxc0PRDK/59fa9a02-db5b-4857-96be-d8f82d5ab1fb-removalai-preview.png"
            alt="Marc's Electronics Logo"
            style={{ maxWidth: '300px' }}
            className="img-fluid"
          />
        </div>
      </div>

      {/* Store Description */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h3 className="fw-bold mb-3">
                <i className="fas fa-store text-primary me-2"></i>
                About Our Store
              </h3>
              <p className="text-muted mb-3">
                Marc's Electronics is a technology-focused online retailer specializing in
                high-performance laptops and premium computing accessories. As an
                authorized Razer reseller, we provide genuine Razer devices
                designed for gamers, creators, and professionals who require
                powerful and reliable hardware.
              </p>
              <p className="text-muted">
                We partner with leading brands like Apple, ASUS, HP, Dell, Lenovo, and Razer
                to bring you the latest technology at competitive prices. Our mission is to
                make premium electronics accessible to everyone while providing exceptional
                customer service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4 text-center">
              <div className="mb-3">
                <i className="fas fa-bullseye fa-3x text-primary"></i>
              </div>
              <h4 className="fw-bold mb-3">Our Mission</h4>
              <p className="text-muted">
                To provide customers with high-quality electronics, exceptional service,
                and the best value for their money. We strive to make technology
                accessible and help our customers make informed purchasing decisions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4 text-center">
              <div className="mb-3">
                <i className="fas fa-eye fa-3x text-primary"></i>
              </div>
              <h4 className="fw-bold mb-3">Our Vision</h4>
              <p className="text-muted">
                To become the most trusted online electronics retailer in the Philippines,
                known for our product quality, customer service, and commitment to
                bringing the latest technology to our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="fw-bold text-center mb-4">Why Choose Us?</h3>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card shadow-sm border-0 text-center h-100">
            <div className="card-body p-4">
              <i className="fas fa-check-circle fa-2x text-success mb-3"></i>
              <h5 className="fw-bold">Genuine Products</h5>
              <p className="text-muted small">
                100% authentic products from authorized dealers
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card shadow-sm border-0 text-center h-100">
            <div className="card-body p-4">
              <i className="fas fa-tags fa-2x text-primary mb-3"></i>
              <h5 className="fw-bold">Best Prices</h5>
              <p className="text-muted small">
                Competitive pricing with regular discounts and promos
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card shadow-sm border-0 text-center h-100">
            <div className="card-body p-4">
              <i className="fas fa-shipping-fast fa-2x text-warning mb-3"></i>
              <h5 className="fw-bold">Fast Delivery</h5>
              <p className="text-muted small">
                Quick and reliable shipping nationwide
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card shadow-sm border-0 text-center h-100">
            <div className="card-body p-4">
              <i className="fas fa-headset fa-2x text-danger mb-3"></i>
              <h5 className="fw-bold">24/7 Support</h5>
              <p className="text-muted small">
                Dedicated customer service team ready to help
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;