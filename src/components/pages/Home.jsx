
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="hero page">
      <p className="eyebrow">PREMIUM LIFESTYLE STORE</p>
      <h1>Discover Your Style.</h1>
      <p>
        Watches, perfumes, fashion and everyday essentials.
      </p>
      <Link to="/shop" className="btn">
        Explore Collection
      </Link>
    </main>
  );
}
