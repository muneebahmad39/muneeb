
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <main className="page">
      <h1>Shopping Cart</h1>
      <p>Your cart is currently empty.</p>
      <Link className="btn" to="/shop">
        Continue Shopping
      </Link>
    </main>
  );
}
