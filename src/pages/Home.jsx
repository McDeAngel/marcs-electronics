import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import RecentlyViewed from '../components/RecentlyViewed';

const products = [
  {
    id: 1,
    name: "MacBook M4 Pro",
    oldPrice: 149990,
    price: 137990,
    discount: 8,
    rating: 5,
    image: "https://i.ibb.co/fdkFQWYC/image-processing20241124-2-10uzfgv-removebg-preview.png",
    category: "Laptops"
  },
  {
    id: 2,
    name: "Asus ROG Zephyrus G14",
    oldPrice: 109995,
    price: 96995,
    discount: 12,
    rating: 5,
    image: "https://dlcdnwebimgs.asus.com/gain/601388C7-6C16-4B1F-90A4-3B051E81A363",
    category: "Laptops"
  },
  {
    id: 3,
    name: "HP Omen 16",
    oldPrice: 89990,
    price: 76990,
    discount: 14,
    rating: 4,
    image: "https://i.ibb.co/MrWy3Rv/vcs-1-v2-2x.avif",
    category: "Laptops"
  },
  {
    id: 4,
    name: "Razer Blade 18",
    oldPrice: 239990,
    price: 209990,
    discount: 13,
    rating: 5,
    image: "https://dl.razerzone.com/src2/9676/9676-1-en-v1.png",
    category: "Laptops"
  },
  {
    id: 5,
    name: "Dell XPS 15",
    oldPrice: 139990,
    price: 119990,
    discount: 14,
    rating: 5,
    image: "https://i.ibb.co/TqYwPTNv/Nice-Png-dell-laptop-png-3278944.png",
    category: "Laptops"
  },
  {
    id: 6,
    name: "Lenovo Legion 5",
    oldPrice: 79995,
    price: 69995,
    discount: 13,
    rating: 4,
    image: "https://i.ibb.co/N6yHW88W/Lenovo-Legion-5-Pro-Front-Facing-Left-Stingray-e1610420175506.png",
    category: "Laptops"
  },
  {
    id: 7,
    name: "Razer Mouse",
    oldPrice: 4990,
    price: 3990,
    discount: 20,
    rating: 4,
    image: "https://i.ibb.co/jvNLnjrH/computer-mouse-video-game-razer-inc-wireless-dots-per-inch-razor-blade-0f36674df268a99a6d1333e3643f7.png",
    category: "Keyboard & Mouse"
  },
  {
    id: 8,
    name: "Razer Keyboard",
    oldPrice: 9990,
    price: 7990,
    discount: 20,
    rating: 5,
    image: "https://i.ibb.co/6RB2fDLD/5bb8f297c5218-64681f1073f14fd1854b579bd9916904.png",
    category: "Keyboard & Mouse"
  }
];

const Home = () => {
  return (
    <div>
      {/* Carousel Banner */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://dlcdnwebimgs.asus.com/gain/F2A3C6E2-C6B4-45FE-AF78-5FB117EC108C/fwebp"
              className="d-block w-100"
              alt="Banner 1"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://www.gigahertz.com.ph/cdn/shop/collections/razer-829746.jpg?v=1729559991"
              className="d-block w-100"
              alt="Banner 2"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.vexels.com/media/users/3/126443/raw/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg"
              className="d-block w-100"
              alt="Banner 3"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Featured Products */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Featured Products</h2>
        <Link to="/products" className="btn btn-outline-primary">
          View All Products
        </Link>
      </div>

      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Recently Viewed Section */}
      <RecentlyViewed />
    </div>
  );
};

export default Home;