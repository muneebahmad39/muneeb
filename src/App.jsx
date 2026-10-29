// 











// import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   NavLink
// } from "react-router-dom";

// import "./App.css";

// import Home from "./components/pages/Home";
// import Shop from "./components/pages/Shop";
// import Watches from "./components/pages/Watches";
// import Perfumes from "./components/pages/Perfumes";
// import Clothing from "./components/pages/Clothing";
// import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";
// import Cart from "./components/pages/Cart";

// function Navbar() {
//   return (
//     <header className="navbar">
//       <Link to="/" className="logo">LUXORA.</Link>

//       <nav className="nav-links">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/shop">Shop</NavLink>
//         <NavLink to="/watches">Watches</NavLink>
//         <NavLink to="/perfumes">Perfumes</NavLink>
//         <NavLink to="/clothing">Clothing</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//         <NavLink to="/cart">Cart</NavLink>
//       </nav>
//     </header>
//   );
// }

// function Footer() {
//   return (
//     <footer className="footer">
//       <h2>LUXORA.</h2>
//       <p>Style your life. Discover your luxury.</p>
//       <p>© 2026 LUXORA. All rights reserved.</p>
//     </footer>
//   );
// }

// function NotFound() {
//   return (
//     <main className="page">
//       <h1>404 - Page Not Found</h1>
//       <Link to="/">Back to Home</Link>
//     </main>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/watches" element={<Watches />} />
//         <Route path="/perfumes" element={<Perfumes />} />
//         <Route path="/clothing" element={<Clothing />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }






// import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
// import { useState } from "react";
// import "./App.css";

// const products = [
//   { id: 1, name: "Black T-Shirt", category: "clothing", price: 1500, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
//   { id: 2, name: "Fashion Jacket", category: "clothing", price: 3500, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400" },
//   { id: 3, name: "Luxury Watch", category: "watches", price: 5000, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400" },
//   { id: 4, name: "Classic Watch", category: "watches", price: 4500, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400" },
//   { id: 5, name: "Luxury Perfume", category: "perfumes", price: 2500, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400" },
//   { id: 6, name: "Premium Perfume", category: "perfumes", price: 3000, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400" }
// ];

// function Home({ addToCart }) {
//   return (
//     <>
//       <section className="hero">
//         <h1>Your Style, Your World</h1>
//         <p>Discover clothing, watches and perfumes</p>
//         <Link to="/category/clothing" className="btn">Shop Now</Link>
//       </section>

//       <h2>Shop By Category</h2>
//       <nav className="categories">
//         <Link to="/category/clothing">Clothing</Link>
//         <Link to="/category/watches">Watches</Link>
//         <Link to="/category/perfumes">Perfumes</Link>
//       </nav>

//       <h2>Featured Products</h2>
//       <ProductList items={products} addToCart={addToCart} />
//     </>
//   );
// }

// function ProductList({ items, addToCart }) {
//   return (
//     <div className="products">
//       {items.map(item => (
//         <div className="card" key={item.id}>
//           <img src={item.image} alt={item.name} />
//           <h3>{item.name}</h3>
//           <p>Rs. {item.price}</p>
//           <button onClick={() => addToCart(item)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Category({ addToCart }) {
//   const { category } = useParams();
//   const items = products.filter(p => p.category === category);

//   return (
//     <>
//       <h2>{category.toUpperCase()}</h2>
//       {items.length ? <ProductList items={items} addToCart={addToCart} /> : <p>Category not found.</p>}
//     </>
//   );
// }

// function App() {
//   const [cart, setCart] = useState([]);

//   function addToCart(product) {
//     setCart([...cart, product]);
//     alert(product.name + " added to cart!");
//   }

//   return (
//     <BrowserRouter>
//       <header>
//         <Link to="/" className="logo">ELIXORA</Link>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/category/clothing">Clothing</Link>
//           <Link to="/category/watches">Watches</Link>
//           <Link to="/category/perfumes">Perfumes</Link>
//           <Link to="/cart">Cart ({cart.length})</Link>
//           <Link to="/about">About Us</Link>
//         </nav>
//       </header>

//       <main>
//         <Routes>
//           <Route path="/" element={<Home addToCart={addToCart} />} />
//           <Route path="/category/:category" element={<Category addToCart={addToCart} />} />
//           <Route path="/cart" element={<><h2>Shopping Cart</h2><ProductList items={cart} addToCart={addToCart} /></>} />
//           <Route path="/about" element={<><h2>About ELIXORA</h2><p>Your destination for fashion and lifestyle.</p></>} />
//           <Route path="*" element={<h2>Page Not Found</h2>} />
//         </Routes>
//       </main>

//       <footer>© 2026 ELIXORA | Fashion & Lifestyle</footer>
//     </BrowserRouter>
//   );
// }

// export default App;






import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css";
import Newsports from "./components/pages/Newsport";

const categories = [
  { id: "clothing", title: "Clothing", tag: "fashion" },
  { id: "perfumes", title: "Perfumes", tag: "perfume" },
  { id: "watches", title: "Watches", tag: "wristwatch" }
];

const products = categories.flatMap((category, c) =>
  Array.from({ length: 120 }, (_, i) => ({
    id: `${category.id}-${i + 1}`,
    name: `${category.title} Product ${i + 1}`,
    category: category.id,
    price: 1500 + i * 100,
    image: `https://loremflickr.com/500/600/${category.tag}?lock=${(c + 1) * 1000 + i + 1}`
  }))
);

function ProductList({ items, addToCart }) {
  return (
    <div className="products">
      {items.map(p => (
        <div className="card" key={p.id}>
          <img src={p.image} alt={p.name} loading="lazy" />
          <h3>{p.name}</h3>
          <p>Rs. {p.price.toLocaleString()}</p>
          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

function CategoryPage({ addToCart }) {
  const { category } = useParams();
  const [search, setSearch] = useState("");
  const items = products.filter(p =>
    p.category === category &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>{category.toUpperCase()}</h1>
      <input
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <p>{items.length} products</p>
      <ProductList items={items} addToCart={addToCart} />
    </>
  );
}

function Home({ addToCart }) {
  return (
    <>
      <section className="hero">
        <h1>ELIXORA</h1>
        <h2>Your Style, Your World</h2>
        <p>Discover Your Favourite Products</p>
      </section>

      <h2>Shop By Category</h2>
      <div className="categories">
        {categories.map(c => (
          <Link key={c.id} to={`/category/${c.id}`}>
            {c.title} (120)
          </Link>
        ))}
      </div>

      <h2>Featured Products</h2>
      <ProductList
        items={products.filter((p, i) => i % 10 === 0).slice(0, 12)}
        addToCart={addToCart}
      />
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(old => [...old, product]);
  }

  return (
    <BrowserRouter>
      <header>
        <Link className="logo" to="/">ELIXORA</Link>
        <nav>
          <Link to="/">Home</Link>
          {categories.map(c => (
            <Link key={c.id} to={`/category/${c.id}`}>
              {c.title}
            </Link>
          ))}
          <Link to="/cart">Cart ({cart.length})</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Newsports addToCart={addToCart} />} />
          <Route
            path="/category/:category"
            element={<CategoryPage addToCart={addToCart} />}
          />
          <Route path="/cart" element={
            <>
              <h1>Shopping Cart</h1>
              <ProductList items={cart} addToCart={addToCart} />
              <h2>Total: Rs. {cart.reduce((s, p) => s + p.price, 0).toLocaleString()}</h2>
            </>
          } />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>

      <footer>© 2026 ELIXORA | Fashion & Lifestyle</footer>
    </BrowserRouter>
  );
}

export default App;