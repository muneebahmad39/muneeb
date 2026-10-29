
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <main className="page">
      <h1>Shop Collection</h1>
      <div className="product-grid">
        <Link to="/watches" className="product-card">
          <h2>Watches</h2>
          <p>Explore collection →</p>
        </Link>
        <Link to="/perfumes" className="product-card">
          <h2>Perfumes</h2>
          <p>Explore collection →</p>
        </Link>
        <Link to="/clothing" className="product-card">
          <h2>Clothing</h2>
          <p>Explore collection →</p>
        </Link>
      </div>
    </main>
  );
}
