const Policies = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-sm border-0 policies-card">
            <div className="card-body p-5">
              <h1 className="display-5 fw-bold mb-4 text-success">
                <i className="fas fa-file-contract me-3"></i>
                Terms & Conditions
              </h1>
              
              <p className="lead policies-text mb-4">
                Welcome! By browsing or shopping in this store, you agree to the rules
                below. Take a moment to read them so everyone's on the same page.
              </p>

              <hr className="my-4" />

              <h4 className="fw-bold mt-4 mb-3 policies-heading">
                <i className="fas fa-tag text-primary me-2"></i>
                Pricing & Availability
              </h4>
              <p className="policies-text">
                Prices may change from time to time, and items are available while
                stocks last. We try to keep everything updated, but it may differ at
                checkout. All prices are in Philippine Peso (₱).
              </p>

              <h4 className="fw-bold mt-4 mb-3 policies-heading">
                <i className="fas fa-undo-alt text-primary me-2"></i>
                Returns & Defects
              </h4>
              <p className="policies-text">
                If an item arrives defective, you can request a return within 7 days of
                delivery. Please contact our support team with photos of the defect.
                Non-defective returns are not accepted unless the item is unopened
                and in original packaging.
              </p>

              <h4 className="fw-bold mt-4 mb-3 policies-heading">
                <i className="fas fa-shield-alt text-primary me-2"></i>
                Warranty
              </h4>
              <p className="policies-text">
                All products come with manufacturer warranty. Warranty period varies
                by brand and product type. Please check the product description for
                specific warranty details.
              </p>

              <h4 className="fw-bold mt-4 mb-3 policies-heading">
                <i className="fas fa-truck text-primary me-2"></i>
                Shipping & Delivery
              </h4>
              <p className="policies-text">
                We ship nationwide via trusted courier partners. Delivery time ranges
                from 3-7 business days depending on your location. Free shipping is
                available for orders above ₱5,000.
              </p>

              <h4 className="fw-bold mt-4 mb-3 policies-heading">
                <i className="fas fa-lock text-primary me-2"></i>
                Privacy & Security
              </h4>
              <p className="policies-text">
                Your personal information is protected and will never be shared with
                third parties. We use secure encryption for all transactions.
              </p>

              <h4 className="fw-bold mt-4 mb-3 policies-heading">
                <i className="fas fa-globe text-primary me-2"></i>
                Website Use
              </h4>
              <p className="policies-text">
                This store is meant for learning and demonstration purposes. Please
                enjoy exploring responsibly. All content and images are property of
                their respective owners.
              </p>

              <hr className="my-4" />

              <div className="alert alert-info mt-4" role="alert">
                <i className="fas fa-info-circle me-2"></i>
                <strong>Note:</strong> For questions or concerns, please contact our
                support team at <strong>support@marselectronics.com</strong>
              </div>

              <div className="text-center mt-5">
                <p className="policies-text text-muted">
                  Last updated: January 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;