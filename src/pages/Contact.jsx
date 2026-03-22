import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 contact-card">
            <div className="card-body p-5">
              <h1 className="display-5 fw-bold mb-4 text-primary text-center contact-title">
                <i className="fas fa-envelope me-3"></i>
                Get in Touch
              </h1>
              
              <p className="lead text-center mb-5 contact-text">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              {submitted ? (
                <div className="alert alert-success text-center" role="alert">
                  <i className="fas fa-check-circle me-2"></i>
                  <strong>Thank you!</strong> Your message has been sent successfully.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label contact-label">
                      <i className="fas fa-user me-2"></i>Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control contact-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label contact-label">
                      <i className="fas fa-envelope me-2"></i>Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control contact-input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label contact-label">
                      <i className="fas fa-comment me-2"></i>Message
                    </label>
                    <textarea
                      name="message"
                      className="form-control contact-input"
                      rows="5"
                      placeholder="Type your message here"
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-3">
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </button>
                </form>
              )}

              {/* Contact Info */}
              <hr className="my-5" />

              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <div className="contact-info-item">
                    <i className="fas fa-phone fa-2x text-primary mb-3"></i>
                    <h5 className="fw-bold contact-heading">Phone</h5>
                    <p className="contact-text">+63 912 345 6789</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="contact-info-item">
                    <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
                    <h5 className="fw-bold contact-heading">Email</h5>
                    <p className="contact-text">support@marselectronics.com</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="contact-info-item">
                    <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
                    <h5 className="fw-bold contact-heading">Location</h5>
                    <p className="contact-text">Manila, Philippines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;