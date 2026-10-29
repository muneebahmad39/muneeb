
// import React, { useState } from "react";
// import "./sports.css";

// const sports = [
//   { name: "Cricket", icon: "🏏" },
//   { name: "Football", icon: "⚽" },
//   { name: "Basketball", icon: "🏀" },
//   { name: "Tennis", icon: "🎾" },
//   { name: "Fitness", icon: "🏋️" },
//   { name: "Other Sports", icon: "🏆" },
// ];

// const initialProducts = [
//   { id: 1, name: "Premium Cricket Bat", category: "Cricket", price: 8500, icon: "🏏" },
//   { id: 2, name: "Leather Cricket Ball", category: "Cricket", price: 1800, icon: "🔴" },
//   { id: 3, name: "Cricket Batting Gloves", category: "Cricket", price: 2500, icon: "🧤" },
//   { id: 4, name: "Football Match Ball", category: "Football", price: 3200, icon: "⚽" },
//   { id: 5, name: "Training Sports Shoes", category: "Fitness", price: 6200, icon: "👟" },
// ];

// const formatPrice = (price) =>
//   `Rs. ${Number(price).toLocaleString("en-PK")}`;

// export default function Newsports() {
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [showSell, setShowSell] = useState(false);
//   const [search, setSearch] = useState("");
//   const [notice, setNotice] = useState("");
//   const [products, setProducts] = useState(initialProducts);

//   const [sellForm, setSellForm] = useState({
//     name: "",
//     category: "Cricket",
//     price: "",
//   });

//   const cartCount = cart.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const cartTotal = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const filteredProducts = products.filter((product) =>
//     `${product.name} ${product.category}`
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );

//   function addToCart(product) {
//     setCart((current) => {
//       const existing = current.find(
//         (item) => item.id === product.id
//       );

//       if (existing) {
//         return current.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...current, { ...product, quantity: 1 }];
//     });

//     setNotice(`${product.name} added to cart`);
//     setTimeout(() => setNotice(""), 2500);
//   }

//   function updateQuantity(id, amount) {
//     setCart((current) =>
//       current
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: item.quantity + amount }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   }

//   function sellItem(event) {
//     event.preventDefault();

//     if (!sellForm.name.trim() || Number(sellForm.price) <= 0) {
//       return;
//     }

//     const icons = {
//       Cricket: "🧤",
//       Football: "⚽",
//       Basketball: "🏀",
//       Fitness: "👟",
//       Tennis: "🎾",
//     };

//     const newProduct = {
//       id: Date.now(),
//       name: sellForm.name.trim(),
//       category: sellForm.category,
//       price: Number(sellForm.price),
//       icon: icons[sellForm.category] || "🏆",
//     };

//     setProducts((current) => [newProduct, ...current]);

//     setSellForm({
//       name: "",
//       category: "Cricket",
//       price: "",
//     });

//     setShowSell(false);
//     setSearch("");
//     setNotice("Your item was added to the shop!");

//     setTimeout(() => setNotice(""), 2500);

//     setTimeout(() => {
//       document.getElementById("shop")?.scrollIntoView({
//         behavior: "smooth",
//       });
//     }, 100);
//   }

//   return (
//     <div className="sportverse">
//       {/* NAVBAR */}

//       <header className="sv-header">
//         <a className="sv-logo" href="#home">
//           <span className="sv-logo-icon">S</span>
//           <span>
//             Sport <em>Verse</em>
//           </span>
//         </a>

//         <nav className="sv-nav">
//           <a href="#home">Home</a>
//           <a href="#scores">Scores</a>
//           <a href="#sports">Sports</a>
//           <a href="#shop">Shop</a>
//           <a href="#news">News</a>

//           <button
//             className="sv-nav-sell"
//             onClick={() => setShowSell(true)}
//           >
//             Sell Gear
//           </button>
//         </nav>

//         <button
//           className="sv-cart-button"
//           onClick={() => setShowCart(true)}
//         >
//           🛒 Cart ({cartCount})
//         </button>
//       </header>

//       {notice && (
//         <div className="sv-toast" role="status">
//           {notice}
//         </div>
//       )}

//       <main>
//         {/* HERO SECTION — GLOVES IMAGE */}

//         <section className="sv-hero" id="home">
//           <div className="sv-hero-content">
//             <p className="sv-eyebrow">
//               YOUR SPORTS UNIVERSE
//             </p>

//             <h1>
//               Your sports world.
//               <br />
//               <span>All in one place.</span>
//             </h1>

//             <p className="sv-hero-description">
//               Follow sports, explore match updates, read the latest
//               stories and shop your favourite sports equipment.
//             </p>

//             <div className="sv-hero-actions">
//               <a className="sv-primary" href="#scores">
//                 Explore Scores ↗
//               </a>

//               <a className="sv-secondary" href="#shop">
//                 Shop Gear
//               </a>
//             </div>

//             <div className="sv-stats">
//               <div>
//                 <strong>06+</strong>
//                 <span>Sports</span>
//               </div>

//               <div>
//                 <strong>24/7</strong>
//                 <span>Sports Hub</span>
//               </div>

//               <div>
//                 <strong>Buy + Sell</strong>
//                 <span>Marketplace</span>
//               </div>
//             </div>
//           </div>

//           <div className="sv-hero-visual">
//             <div className="sv-play-tag">
//               PLAY BIG · 🏆
//             </div>

//             <img
//               src="/gloves.png"
//               alt="Cricket batting gloves"
//               className="sv-hero-image"
//             />

//             <div className="sv-game-tag">
//               YOUR GAME STARTS HERE
//             </div>
//           </div>
//         </section>

//         {/* MATCH SCORES */}

//         <section className="sv-section" id="scores">
//           <div className="sv-section-heading">
//             <div>
//               <p className="sv-eyebrow">MATCH CENTRE</p>
//               <h2>Scores & Match Updates</h2>
//             </div>

//             <span className="sv-demo-label">
//               DEMO SCORES
//             </span>
//           </div>

//           <div className="sv-score-grid">
//             <article className="sv-score-card">
//               <span className="sv-live-label">UPCOMING</span>
//               <h3>🇵🇰 Pakistan vs 🇮🇳 India</h3>
//               <p>Cricket · T20 International</p>
//               <strong>Match preview</strong>
//             </article>

//             <article className="sv-score-card">
//               <span className="sv-live-label">LIVE DEMO</span>
//               <h3>Manchester City 2 - 1 Arsenal</h3>
//               <p>Football · League match</p>
//               <strong>78′ minute</strong>
//             </article>

//             <article className="sv-score-card">
//               <span className="sv-live-label">RESULT</span>
//               <h3>Australia vs England</h3>
//               <p>Cricket · One Day International</p>
//               <strong>Sample result</strong>
//             </article>
//           </div>

//           <p className="sv-note">
//             These are sample scores, not real-time match data.
//           </p>
//         </section>

//         {/* SPORTS CATEGORIES */}

//         <section className="sv-section" id="sports">
//           <div className="sv-section-heading">
//             <div>
//               <p className="sv-eyebrow">FIND YOUR GAME</p>
//               <h2>Explore Sports</h2>
//             </div>
//           </div>

//           <div className="sv-sports-grid">
//             {sports.map((sport) => (
//               <a
//                 className="sv-sport-card"
//                 href="#shop"
//                 key={sport.name}
//                 onClick={() =>
//                   setSearch(
//                     sport.name === "Other Sports"
//                       ? ""
//                       : sport.name
//                   )
//                 }
//               >
//                 <span>{sport.icon}</span>
//                 <strong>{sport.name}</strong>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* MARKETPLACE */}

//         <section className="sv-section" id="shop">
//           <div className="sv-section-heading">
//             <div>
//               <p className="sv-eyebrow">SPORTS MARKETPLACE</p>
//               <h2>Shop Sports Gear</h2>
//               <p className="sv-muted">
//                 Find equipment for your next game.
//               </p>
//             </div>

//             <button
//               className="sv-primary"
//               onClick={() => setShowSell(true)}
//             >
//               + Sell Gear
//             </button>
//           </div>

//           <div className="sv-toolbar">
//             <input
//               value={search}
//               onChange={(event) => setSearch(event.target.value)}
//               placeholder="Search sports gear..."
//               aria-label="Search sports gear"
//             />
//           </div>

//           {filteredProducts.length > 0 ? (
//             <div className="sv-product-grid">
//               {filteredProducts.map((product) => (
//                 <article
//                   className="sv-product-card"
//                   key={product.id}
//                 >
//                   <div className="sv-product-art">
//                     {product.icon}
//                   </div>

//                   <div className="sv-product-info">
//                     <span className="sv-category">
//                       {product.category}
//                     </span>

//                     <h3>{product.name}</h3>

//                     <div className="sv-product-bottom">
//                       <strong>
//                         {formatPrice(product.price)}
//                       </strong>

//                       <button
//                         className="sv-add-button"
//                         onClick={() => addToCart(product)}
//                       >
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           ) : (
//             <p className="sv-muted">
//               No items found. Try another search.
//             </p>
//           )}
//         </section>

//         {/* SPORTS NEWS */}

//         <section className="sv-section" id="news">
//           <div className="sv-section-heading">
//             <div>
//               <p className="sv-eyebrow">THE LATEST</p>
//               <h2>Sports News</h2>
//             </div>
//           </div>

//           <div className="sv-news-grid">
//             {[
//               {
//                 icon: "🏏",
//                 category: "CRICKET",
//                 title: "The big cricket match preview",
//                 text: "Players and key moments to watch in the upcoming game.",
//               },
//               {
//                 icon: "⚽",
//                 category: "FOOTBALL",
//                 title: "The race for the top spot",
//                 text: "A look at teams competing for the league lead.",
//               },
//               {
//                 icon: "🏆",
//                 category: "SPORTS",
//                 title: "Build better training habits",
//                 text: "Simple ways to improve practice and confidence.",
//               },
//             ].map((item) => (
//               <article className="sv-news-card" key={item.title}>
//                 <div className="sv-news-art">
//                   {item.icon}
//                 </div>

//                 <div className="sv-product-info">
//                   <span className="sv-category">
//                     {item.category}
//                   </span>

//                   <h3>{item.title}</h3>
//                   <p className="sv-muted">{item.text}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* FOOTER */}

//       <footer className="sv-footer">
//         <a className="sv-logo" href="#home">
//           Sport <em>Verse</em>
//         </a>

//         <p>
//           © {new Date().getFullYear()} SportVerse · Your sports universe.
//         </p>
//       </footer>

//       {/* SHOPPING CART */}

//       {showCart && (
//         <div
//           className="sv-modal-backdrop"
//           onMouseDown={(event) => {
//             if (event.target === event.currentTarget) {
//               setShowCart(false);
//             }
//           }}
//         >
//           <section
//             className="sv-modal"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Shopping cart"
//           >
//             <button
//               className="sv-close"
//               onClick={() => setShowCart(false)}
//             >
//               ✕ Close
//             </button>

//             <p className="sv-eyebrow">YOUR SELECTION</p>
//             <h2>Shopping Cart</h2>

//             {cart.length === 0 ? (
//               <p className="sv-muted">
//                 Your cart is empty. Add some sports gear first.
//               </p>
//             ) : (
//               cart.map((item) => (
//                 <div className="sv-cart-item" key={item.id}>
//                   <span>{item.icon}</span>

//                   <div>
//                     <strong>{item.name}</strong>
//                     <p>{formatPrice(item.price)} each</p>

//                     <button
//                       className="sv-quantity-button"
//                       onClick={() => updateQuantity(item.id, -1)}
//                     >
//                       −
//                     </button>

//                     <span className="sv-quantity">
//                       {item.quantity}
//                     </span>

//                     <button
//                       className="sv-quantity-button"
//                       onClick={() => updateQuantity(item.id, 1)}
//                     >
//                       +
//                     </button>
//                   </div>

//                   <strong>
//                     {formatPrice(item.price * item.quantity)}
//                   </strong>
//                 </div>
//               ))
//             )}

//             <h3 className="sv-total">
//               Total: {formatPrice(cartTotal)}
//             </h3>

//             <button
//               className="sv-primary sv-full-button"
//               onClick={() => {
//                 setShowCart(false);
//                 setNotice(
//                   "Demo checkout only. No payment was taken."
//                 );
//                 setTimeout(() => setNotice(""), 2500);
//               }}
//             >
//               Checkout
//             </button>
//           </section>
//         </div>
//       )}

//       {/* SELL SPORTS GEAR */}

//       {showSell && (
//         <div
//           className="sv-modal-backdrop"
//           onMouseDown={(event) => {
//             if (event.target === event.currentTarget) {
//               setShowSell(false);
//             }
//           }}
//         >
//           <section
//             className="sv-modal"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Sell sports gear"
//           >
//             <button
//               className="sv-close"
//               onClick={() => setShowSell(false)}
//             >
//               ✕ Close
//             </button>

//             <p className="sv-eyebrow">MARKETPLACE</p>
//             <h2>Sell Your Gear</h2>

//             <form className="sv-sell-form" onSubmit={sellItem}>
//               <label>
//                 Item name
//                 <input
//                   required
//                   value={sellForm.name}
//                   onChange={(event) =>
//                     setSellForm({
//                       ...sellForm,
//                       name: event.target.value,
//                     })
//                   }
//                   placeholder="e.g. Cricket gloves"
//                 />
//               </label>

//               <label>
//                 Category
//                 <select
//                   value={sellForm.category}
//                   onChange={(event) =>
//                     setSellForm({
//                       ...sellForm,
//                       category: event.target.value,
//                     })
//                   }
//                 >
//                   {[
//                     "Cricket",
//                     "Football",
//                     "Basketball",
//                     "Tennis",
//                     "Fitness",
//                   ].map((item) => (
//                     <option key={item} value={item}>
//                       {item}
//                     </option>
//                   ))}
//                 </select>
//               </label>

//               <label>
//                 Price (PKR)
//                 <input
//                   required
//                   type="number"
//                   min="1"
//                   value={sellForm.price}
//                   onChange={(event) =>
//                     setSellForm({
//                       ...sellForm,
//                       price: event.target.value,
//                     })
//                   }
//                   placeholder="e.g. 2500"
//                 />
//               </label>

//               <button
//                 className="sv-primary sv-full-button"
//                 type="submit"
//               >
//                 Add Listing
//               </button>
//             </form>
//           </section>
//         </div>
//       )}
//     </div>
//   );
// }





// import React, { useState } from "react";
// import "./sports.css";

// const sports = [
//   { name: "Cricket", icon: "🏏", note: "T20, ODI, Test" },
//   { name: "Football", icon: "⚽", note: "Leagues & cups" },
//   { name: "Basketball", icon: "🏀", note: "NBA & more" },
//   { name: "Tennis", icon: "🎾", note: "Grand Slams" },
//   { name: "Fitness", icon: "🏋️", note: "Train like a pro" },
//   { name: "Other Sports", icon: "🏆", note: "Records & honours" },
// ];

// const initialProducts = [
//   { id: 1, name: "Premium Cricket Bat", category: "Cricket", price: 8500, icon: "🏏" },
//   { id: 2, name: "Leather Cricket Ball", category: "Cricket", price: 1800, icon: "🔴" },
//   { id: 3, name: "Cricket Batting Gloves", category: "Cricket", price: 2500, icon: "🧤" },
//   { id: 4, name: "Football Match Ball", category: "Football", price: 3200, icon: "⚽" },
//   { id: 5, name: "Training Sports Shoes", category: "Fitness", price: 6200, icon: "👟" },
// ];

// // Demo match data (real API se baad mein connect kar sakte hain)
// const matches = [
//   {
//     id: 1,
//     sport: "Cricket",
//     status: "upcoming",
//     badge: "Upcoming",
//     meta: "Cricket · T20 International",
//     home: { name: "Pakistan", code: "PK" },
//     away: { name: "India", code: "IN" },
//     prediction: 52,
//     facts: [
//       ["Date", "Sat, 31 Oct · 7:00 PM"],
//       ["Venue", "Dubai Stadium"],
//     ],
//     footer: "Match preview",
//     footerNote: "Starts in 2d 14h",
//   },
//   {
//     id: 2,
//     sport: "Football",
//     status: "live",
//     badge: "Live demo",
//     meta: "Football · League match",
//     home: { name: "Man City", code: "MCI", score: 2 },
//     away: { name: "Arsenal", code: "ARS", score: 1 },
//     progress: 78,
//     facts: [
//       ["Possession", "54%"],
//       ["Shots", "11–7"],
//       ["Corners", "5–3"],
//     ],
//     footer: "78′ minute",
//     footerNote: "Second half",
//   },
//   {
//     id: 3,
//     sport: "Cricket",
//     status: "result",
//     badge: "Result",
//     meta: "Cricket · One Day International",
//     home: { name: "Australia", code: "AUS", score: "287/6", winner: true },
//     away: { name: "England", code: "ENG", score: "251" },
//     facts: [
//       ["Overs", "50 / 48.2"],
//       ["Top score", "112*"],
//       ["Run rate", "5.74"],
//     ],
//     footer: "Australia won by 36 runs",
//     footerNote: "Sample result",
//   },
// ];

// const tickerItems = [
//   "Pakistan vs India · T20I",
//   "Man City 2–1 Arsenal · 78′",
//   "Australia won by 36 runs",
// ];

// const formatPrice = (price) =>
//   `Rs. ${Number(price).toLocaleString("en-PK")}`;

// function Team({ team, center, showScore }) {
//   return (
//     <div
//       className={`sv-team ${center ? "sv-team--center" : ""} ${
//         team.winner ? "is-winner" : ""
//       }`}
//     >
//       <span className="sv-crest">{team.code}</span>
//       <span className="sv-team-name">{team.name}</span>
//       {showScore && <span className="sv-team-score">{team.score}</span>}
//     </div>
//   );
// }

// function MatchCard({ m }) {
//   const hasScore = m.status !== "upcoming";

//   return (
//     <article className={`sv-score-card sv-score-card--${m.status}`}>
//       <div>
//         <span className={`sv-badge sv-badge--${m.status}`}>
//           {m.status === "live" && <i className="sv-dot" />}
//           {m.badge}
//         </span>
//         <p className="sv-match-meta">{m.meta}</p>
//       </div>

//       {hasScore ? (
//         <div className="sv-teams">
//           <Team team={m.home} showScore />
//           <Team team={m.away} showScore />
//         </div>
//       ) : (
//         <div className="sv-versus">
//           <Team team={m.home} center />
//           <small>vs</small>
//           <Team team={m.away} center />
//         </div>
//       )}

//       {m.status === "live" && (
//         <div className="sv-bar" aria-label={`Minute ${m.progress}`}>
//           <span style={{ width: `${(m.progress / 90) * 100}%` }} />
//         </div>
//       )}

//       {m.prediction && (
//         <div className="sv-pred">
//           <span>
//             {m.home.code} {m.prediction}%
//           </span>
//           <div>
//             <i style={{ width: `${m.prediction}%` }} />
//           </div>
//           <span>
//             {100 - m.prediction}% {m.away.code}
//           </span>
//         </div>
//       )}

//       <div className={`sv-facts ${m.facts.length === 2 ? "sv-facts--two" : ""}`}>
//         {m.facts.map(([label, value]) => (
//           <div key={label}>
//             <b>{label}</b>
//             <span>{value}</span>
//           </div>
//         ))}
//       </div>

//       <div className="sv-score-foot">
//         <strong>{m.footer}</strong>
//         <span>{m.footerNote}</span>
//       </div>
//     </article>
//   );
// }

// export default function Newsports() {
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [showSell, setShowSell] = useState(false);
//   const [search, setSearch] = useState("");
//   const [notice, setNotice] = useState("");
//   const [products, setProducts] = useState(initialProducts);
//   const [scoreFilter, setScoreFilter] = useState("All");

//   // Newsletter
//   const [email, setEmail] = useState("");
//   const [picked, setPicked] = useState(["Cricket", "Football"]);
//   const [subscribed, setSubscribed] = useState(false);

//   const [sellForm, setSellForm] = useState({
//     name: "",
//     category: "Cricket",
//     price: "",
//   });

//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

//   const cartTotal = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const filteredProducts = products.filter((product) =>
//     `${product.name} ${product.category}`
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );

//   const visibleMatches = matches.filter(
//     (m) => scoreFilter === "All" || m.sport === scoreFilter
//   );

//   function showNotice(text) {
//     setNotice(text);
//     setTimeout(() => setNotice(""), 2500);
//   }

//   function addToCart(product) {
//     setCart((current) => {
//       const existing = current.find((item) => item.id === product.id);

//       if (existing) {
//         return current.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...current, { ...product, quantity: 1 }];
//     });

//     showNotice(`${product.name} added to cart`);
//   }

//   function updateQuantity(id, amount) {
//     setCart((current) =>
//       current
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity + amount } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   }

//   function sellItem(event) {
//     event.preventDefault();

//     if (!sellForm.name.trim() || Number(sellForm.price) <= 0) {
//       return;
//     }

//     const icons = {
//       Cricket: "🧤",
//       Football: "⚽",
//       Basketball: "🏀",
//       Fitness: "👟",
//       Tennis: "🎾",
//     };

//     const newProduct = {
//       id: Date.now(),
//       name: sellForm.name.trim(),
//       category: sellForm.category,
//       price: Number(sellForm.price),
//       icon: icons[sellForm.category] || "🏆",
//     };

//     setProducts((current) => [newProduct, ...current]);

//     setSellForm({ name: "", category: "Cricket", price: "" });

//     setShowSell(false);
//     setSearch("");
//     showNotice("Your item was added to the shop!");

//     setTimeout(() => {
//       document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   }

//   function togglePick(name) {
//     setPicked((current) =>
//       current.includes(name)
//         ? current.filter((item) => item !== name)
//         : [...current, name]
//     );
//   }

//   function subscribe(event) {
//     event.preventDefault();

//     if (!email.trim()) return;

//     setSubscribed(true);
//     setEmail("");
//     showNotice("Subscribed! (demo only)");
//   }

//   return (
//     <div className="sportverse">
//       {/* NAVBAR */}

//       <header className="sv-header">
//         <a className="sv-logo" href="#home">
//           <span className="sv-logo-icon">S</span>
//           <span>
//             Sport <em>Verse</em>
//           </span>
//         </a>

//         <nav className="sv-nav">
//           <a href="#home">Home</a>
//           <a href="#scores">Scores</a>
//           <a href="#sports">Sports</a>
//           <a href="#shop">Shop</a>
//           <a href="#news">News</a>

//           <button className="sv-nav-sell" onClick={() => setShowSell(true)}>
//             Sell Gear
//           </button>
//         </nav>

//         <button className="sv-cart-button" onClick={() => setShowCart(true)}>
//           🛒 Cart ({cartCount})
//         </button>
//       </header>

//       {notice && (
//         <div className="sv-toast" role="status">
//           {notice}
//         </div>
//       )}

//       <main>
//         {/* HERO SECTION — GLOVES IMAGE */}

//         <section className="sv-hero" id="home">
//           <div className="sv-hero-content">
//             <span className="sv-pill">
//               <i className="sv-dot" />
//               1 match live now
//             </span>

//             <h1>
//               Your sports world.
//               <br />
//               <span>All in one place.</span>
//             </h1>

//             <p className="sv-hero-description">
//               Follow sports, explore match updates, read the latest stories
//               and shop your favourite sports equipment.
//             </p>

//             <div className="sv-hero-actions">
//               <a className="sv-primary" href="#scores">
//                 Explore Scores ↗
//               </a>

//               <a className="sv-secondary" href="#shop">
//                 Shop Gear
//               </a>
//             </div>

//             <div className="sv-stats">
//               <div>
//                 <strong>06+</strong>
//                 <span>Sports</span>
//               </div>

//               <div>
//                 <strong>24/7</strong>
//                 <span>Sports Hub</span>
//               </div>

//               <div>
//                 <strong>Buy + Sell</strong>
//                 <span>Marketplace</span>
//               </div>
//             </div>
//           </div>

//           <div className="sv-hero-visual">
//             <div className="sv-play-tag">Play big · 🏆</div>

//             <img
//               src="/gloves.png"
//               alt="Cricket batting gloves"
//               className="sv-hero-image"
//             />

//             <div className="sv-game-tag">Your game starts here</div>
//           </div>
//         </section>

//         {/* TICKER */}

//         <div className="sv-ticker" aria-hidden="true">
//           <div>
//             {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
//               (text, index) => (
//                 <span key={index}>
//                   {text}
//                   <i>●</i>
//                 </span>
//               )
//             )}
//           </div>
//         </div>

//         {/* MATCH SCORES */}

//         <section className="sv-section" id="scores">
//           <div className="sv-section-heading">
//             <div>
//               <p className="sv-eyebrow">Match centre</p>
//               <h2>Scores & match updates</h2>
//             </div>

//             <span className="sv-demo-label">Demo scores</span>
//           </div>

//           <div className="sv-tabs" role="group" aria-label="Filter by sport">
//             {["All", "Cricket", "Football"].map((tab) => (
//               <button
//                 key={tab}
//                 className={scoreFilter === tab ? "on" : ""}
//                 aria-pressed={scoreFilter === tab}
//                 onClick={() => setScoreFilter(tab)}
//               >
//                 {tab === "Cricket" && "🏏 "}
//                 {tab === "Football" && "⚽ "}
//                 {tab}
//               </button>
//             ))}
//           </div>

//           <div className="sv-score-grid">
//             {visibleMatches.map((m) => (
//               <MatchCard key={m.id} m={m} />
//             ))}
//           </div>

//           <p className="sv-note">
//             These are sample scores, not real-time match data.
//           </p>
//         </section>

//         {/* SPORTS CATEGORIES */}

//         <section className="sv-section sv-section--alt" id="sports">
//           <div className="sv-section-heading">
//             <div>
//               <p className="sv-eyebrow">Find your game</p>
//               <h2>Explore sports</h2>
//             </div>
//           </div>

//           <div className="sv-sports-grid">
//             {sports.map((sport) => (
//               <a
//                 className="sv-sport-card"
//                 href="#shop"
//                 key={sport.name}
//                 onClick={() =>
//                   setSearch(sport.name === "Other Sports" ? "" : sport.name)
//                 }
//               >
//                 <span>{sport.icon}</span>
//                 <strong>{sport.name}</strong>
//                 <small>{sport.note}</small>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* MARKETPLACE */}

//         <section className="sv-section" id="shop">
//           <div className="sv-section-heading">
//             <div>
//               <p className="sv-eyebrow">Sports marketplace</p>
//               <h2>Shop sports gear</h2>
//               <p className="sv-muted">Find equipment for your next game.</p>
//             </div>

//             <button className="sv-primary" onClick={() => setShowSell(true)}>
//               + Sell Gear
//             </button>
//           </div>

//           <div className="sv-toolbar">
//             <input
//               value={search}
//               onChange={(event) => setSearch(event.target.value)}
//               placeholder="Search sports gear..."
//               aria-label="Search sports gear"
//             />
//           </div>

//           {filteredProducts.length > 0 ? (
//             <div className="sv-product-grid">
//               {filteredProducts.map((product) => (
//                 <article className="sv-product-card" key={product.id}>
//                   <div className="sv-product-art">{product.icon}</div>

//                   <div className="sv-product-info">
//                     <span className="sv-category">{product.category}</span>

//                     <h3>{product.name}</h3>

//                     <div className="sv-product-bottom">
//                       <strong>{formatPrice(product.price)}</strong>

//                       <button
//                         className="sv-add-button"
//                         onClick={() => addToCart(product)}
//                       >
//                         Add to cart
//                       </button>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           ) : (
//             <p className="sv-muted">No items found. Try another search.</p>
//           )}
//         </section>

//         {/* SPORTS NEWS */}

//         <section className="sv-section sv-section--alt" id="news">
//           <div className="sv-section-heading">
//             <div>
//               <p className="sv-eyebrow">The latest</p>
//               <h2>Sports news</h2>
//             </div>
//           </div>

//           <div className="sv-news-grid">
//             {[
//               {
//                 icon: "🏏",
//                 category: "Cricket",
//                 title: "The big cricket match preview",
//                 text: "Players and key moments to watch in the upcoming game.",
//               },
//               {
//                 icon: "⚽",
//                 category: "Football",
//                 title: "The race for the top spot",
//                 text: "A look at teams competing for the league lead.",
//               },
//               {
//                 icon: "🏆",
//                 category: "Sports",
//                 title: "Build better training habits",
//                 text: "Simple ways to improve practice and confidence.",
//               },
//             ].map((item) => (
//               <article className="sv-news-card" key={item.title}>
//                 <div className="sv-news-art">{item.icon}</div>

//                 <div className="sv-product-info">
//                   <span className="sv-category">{item.category}</span>

//                   <h3>{item.title}</h3>
//                   <p className="sv-muted">{item.text}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* NEWSLETTER — NEVER MISS A MATCH */}

//         <section className="sv-section" id="join">
//           <div className="sv-newsletter">
//             <div className="sv-newsletter-copy">
//               <span className="sv-pill">📬 Free · Match-day alerts</span>

//               <h2>Never miss a match.</h2>

//               <p>
//                 One short email before every game you follow, with kick-off
//                 time, preview and final score.
//               </p>

//               <ul className="sv-perks">
//                 <li>⚡ Live score alerts</li>
//                 <li>🗓️ Fixtures in your inbox</li>
//                 <li>🏆 Weekly results digest</li>
//               </ul>
//             </div>

//             <form className="sv-newsletter-form" onSubmit={subscribe}>
//               <p className="sv-form-label">Pick your sports</p>

//               <div className="sv-chips">
//                 {["Cricket", "Football", "Basketball", "Tennis"].map((name) => (
//                   <button
//                     type="button"
//                     key={name}
//                     className={picked.includes(name) ? "on" : ""}
//                     aria-pressed={picked.includes(name)}
//                     onClick={() => togglePick(name)}
//                   >
//                     {name}
//                   </button>
//                 ))}
//               </div>

//               <div className="sv-mail">
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(event) => setEmail(event.target.value)}
//                   placeholder="you@email.com"
//                   aria-label="Email address"
//                 />

//                 <button className="sv-primary" type="submit">
//                   {subscribed ? "Subscribed ✓" : "Subscribe"}
//                 </button>
//               </div>

//               <small>
//                 {subscribed
//                   ? "You are in. First update on the next match day."
//                   : "No spam. Unsubscribe anytime."}
//               </small>
//             </form>
//           </div>
//         </section>
//       </main>

//       {/* FOOTER */}

//       <footer className="sv-footer">
//         <a className="sv-logo" href="#home">
//           Sport <em>Verse</em>
//         </a>

//         <p>© {new Date().getFullYear()} SportVerse · Your sports universe.</p>
//       </footer>

//       {/* SHOPPING CART */}

//       {showCart && (
//         <div
//           className="sv-modal-backdrop"
//           onMouseDown={(event) => {
//             if (event.target === event.currentTarget) {
//               setShowCart(false);
//             }
//           }}
//         >
//           <section
//             className="sv-modal"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Shopping cart"
//           >
//             <button className="sv-close" onClick={() => setShowCart(false)}>
//               ✕ Close
//             </button>

//             <p className="sv-eyebrow">Your selection</p>
//             <h2>Shopping cart</h2>

//             {cart.length === 0 ? (
//               <p className="sv-muted">
//                 Your cart is empty. Add some sports gear first.
//               </p>
//             ) : (
//               cart.map((item) => (
//                 <div className="sv-cart-item" key={item.id}>
//                   <span>{item.icon}</span>

//                   <div>
//                     <strong>{item.name}</strong>
//                     <p>{formatPrice(item.price)} each</p>

//                     <button
//                       className="sv-quantity-button"
//                       onClick={() => updateQuantity(item.id, -1)}
//                     >
//                       −
//                     </button>

//                     <span className="sv-quantity">{item.quantity}</span>

//                     <button
//                       className="sv-quantity-button"
//                       onClick={() => updateQuantity(item.id, 1)}
//                     >
//                       +
//                     </button>
//                   </div>

//                   <strong>{formatPrice(item.price * item.quantity)}</strong>
//                 </div>
//               ))
//             )}

//             <h3 className="sv-total">Total: {formatPrice(cartTotal)}</h3>

//             <button
//               className="sv-primary sv-full-button"
//               onClick={() => {
//                 setShowCart(false);
//                 showNotice("Demo checkout only. No payment was taken.");
//               }}
//             >
//               Checkout
//             </button>
//           </section>
//         </div>
//       )}

//       {/* SELL SPORTS GEAR */}

//       {showSell && (
//         <div
//           className="sv-modal-backdrop"
//           onMouseDown={(event) => {
//             if (event.target === event.currentTarget) {
//               setShowSell(false);
//             }
//           }}
//         >
//           <section
//             className="sv-modal"
//             role="dialog"
//             aria-modal="true"
//             aria-label="Sell sports gear"
//           >
//             <button className="sv-close" onClick={() => setShowSell(false)}>
//               ✕ Close
//             </button>

//             <p className="sv-eyebrow">Marketplace</p>
//             <h2>Sell your gear</h2>

//             <form className="sv-sell-form" onSubmit={sellItem}>
//               <label>
//                 Item name
//                 <input
//                   required
//                   value={sellForm.name}
//                   onChange={(event) =>
//                     setSellForm({ ...sellForm, name: event.target.value })
//                   }
//                   placeholder="e.g. Cricket gloves"
//                 />
//               </label>

//               <label>
//                 Category
//                 <select
//                   value={sellForm.category}
//                   onChange={(event) =>
//                     setSellForm({ ...sellForm, category: event.target.value })
//                   }
//                 >
//                   {["Cricket", "Football", "Basketball", "Tennis", "Fitness"].map(
//                     (item) => (
//                       <option key={item} value={item}>
//                         {item}
//                       </option>
//                     )
//                   )}
//                 </select>
//               </label>

//               <label>
//                 Price (PKR)
//                 <input
//                   required
//                   type="number"
//                   min="1"
//                   value={sellForm.price}
//                   onChange={(event) =>
//                     setSellForm({ ...sellForm, price: event.target.value })
//                   }
//                   placeholder="e.g. 2500"
//                 />
//               </label>

//               <button className="sv-primary sv-full-button" type="submit">
//                 Add Listing
//               </button>
//             </form>
//           </section>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState } from "react";
import "../sports.css";
import batImg from "../../assets/bat.jpg"
const sports = [
  { name: "Cricket", icon:batImg, note: "T20, ODI, Test" },
  { name: "Football", icon: batImg, note: "Leagues & cups" },
  { name: "Basketball", icon: batImg, note: "NBA & more" },
  { name: "Tennis", icon: batImg, note: "Grand Slams" },
  { name: "Fitness", icon: batImg, note: "Train like a pro" },
  { name: "Other Sports", icon: batImg, note: "Records & honours" },
];

const initialProducts = [
  { id: 1, name: "Premium Cricket Bat", category: "Cricket", price: 8500, },
  { id: 2, name: "Leather Cricket Ball", category: "Cricket", price: 1800, icon: batImg },
  { id: 3, name: "Cricket Batting Gloves", category: "Cricket", price: 2500, icon: batImg },
  { id: 4, name: "Football Match Ball", category: "Football", price: 3200, icon: batImg },
  { id: 5, name: "Training Sports Shoes", category: "Fitness", price: 6200, icon: batImg },
];

// Demo match data (real API se baad mein connect kar sakte hain)
const matches = [
  {
    id: 1,
    sport: "Cricket",
    status: "upcoming",
    badge: "Upcoming",
    meta: "Cricket · T20 International",
    home: { name: "Pakistan", code: "PK" },
    away: { name: "India", code: "IN" },
    prediction: 52,
    facts: [
      ["Date", "Sat, 31 Oct · 7:00 PM"],
      ["Venue", "Dubai Stadium"],
    ],
    footer: "Match preview",
    footerNote: "Starts in 2d 14h",
  },
  {
    id: 2,
    sport: "Football",
    status: "live",
    badge: "Live demo",
    meta: "Football · League match",
    home: { name: "Man City", code: "MCI", score: 2 },
    away: { name: "Arsenal", code: "ARS", score: 1 },
    progress: 78,
    facts: [
      ["Possession", "54%"],
      ["Shots", "11–7"],
      ["Corners", "5–3"],
    ],
    footer: "78′ minute",
    footerNote: "Second half",
  },
  {
    id: 3,
    sport: "Cricket",
    status: "result",
    badge: "Result",
    meta: "Cricket · One Day International",
    home: { name: "Australia", code: "AUS", score: "287/6", winner: true },
    away: { name: "England", code: "ENG", score: "251" },
    facts: [
      ["Overs", "50 / 48.2"],
      ["Top score", "112*"],
      ["Run rate", "5.74"],
    ],
    footer: "Australia won by 36 runs",
    footerNote: "Sample result",
  },
];

const tickerItems = [
  "Pakistan vs India · T20I",
  "Man City 2–1 Arsenal · 78′",
  "Australia won by 36 runs",
];

const formatPrice = (price) =>
  `Rs. ${Number(price).toLocaleString("en-PK")}`;

function Team({ team, center, showScore }) {
  return (
    <div
      className={`sv-team ${center ? "sv-team--center" : ""} ${team.winner ? "is-winner" : ""
        }`}
    >
      <span className="sv-crest">{team.code}</span>
      <span className="sv-team-name">{team.name}</span>
      {showScore && <span className="sv-team-score">{team.score}</span>}
    </div>
  );
}

function MatchCard({ m }) {
  const hasScore = m.status !== "upcoming";

  return (
    <article className={`sv-score-card sv-score-card--${m.status}`}>
      <div>
        <span className={`sv-badge sv-badge--${m.status}`}>
          {m.status === "live" && <i className="sv-dot" />}
          {m.badge}
        </span>
        <p className="sv-match-meta">{m.meta}</p>
      </div>

      {hasScore ? (
        <div className="sv-teams">
          <Team team={m.home} showScore />
          <Team team={m.away} showScore />
        </div>
      ) : (
        <div className="sv-versus">
          <Team team={m.home} center />
          <small>vs</small>
          <Team team={m.away} center />
        </div>
      )}

      {m.status === "live" && (
        <div className="sv-bar" aria-label={`Minute ${m.progress}`}>
          <span style={{ width: `${(m.progress / 90) * 100}%` }} />
        </div>
      )}

      {m.prediction && (
        <div className="sv-pred">
          <span>
            {m.home.code} {m.prediction}%
          </span>
          <div>
            <i style={{ width: `${m.prediction}%` }} />
          </div>
          <span>
            {100 - m.prediction}% {m.away.code}
          </span>
        </div>
      )}

      <div className={`sv-facts ${m.facts.length === 2 ? "sv-facts--two" : ""}`}>
        {m.facts.map(([label, value]) => (
          <div key={label}>
            <b>{label}</b>
            <span>{value}</span>
          </div>
        ))}
      </div>

      <div className="sv-score-foot">
        <strong>{m.footer}</strong>
        <span>{m.footerNote}</span>
      </div>
    </article>
  );
}

export default function Newsports() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showSell, setShowSell] = useState(false);
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");
  const [products, setProducts] = useState(initialProducts);
  const [scoreFilter, setScoreFilter] = useState("All");
  const [imageFailed, setImageFailed] = useState(false);

  // Newsletter
  const [email, setEmail] = useState("");
  const [picked, setPicked] = useState(["Cricket", "Football"]);
  const [subscribed, setSubscribed] = useState(false);

  const [sellForm, setSellForm] = useState({
    name: "",
    category: "Cricket",
    price: "",
  });

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const visibleMatches = matches.filter(
    (m) => scoreFilter === "All" || m.sport === scoreFilter
  );

  function showNotice(text) {
    setNotice(text);
    setTimeout(() => setNotice(""), 2500);
  }

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    showNotice(`${product.name} added to cart`);
  }

  function updateQuantity(id, amount) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function sellItem(event) {
    event.preventDefault();

    if (!sellForm.name.trim() || Number(sellForm.price) <= 0) {
      return;
    }

    const icons = {
      Cricket: "🧤",
      Football: "⚽",
      Basketball: "🏀",
      Fitness: "👟",
      Tennis: "🎾",
    };

    const newProduct = {
      id: Date.now(),
      name: sellForm.name.trim(),
      category: sellForm.category,
      price: Number(sellForm.price),
      icon: icons[sellForm.category] || "🏆",
    };

    setProducts((current) => [newProduct, ...current]);

    setSellForm({ name: "", category: "Cricket", price: "" });

    setShowSell(false);
    setSearch("");
    showNotice("Your item was added to the shop!");

    setTimeout(() => {
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function togglePick(name) {
    setPicked((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  }

  function subscribe(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
    showNotice("Subscribed! (demo only)");
  }

  return (
    <div className="sportverse">
      {/* NAVBAR */}

      <header className="sv-header">
        <a className="sv-logo" href="#home">
          <span className="sv-logo-icon">S</span>
          <span>
            Sport <em>Verse</em>
          </span>
        </a>

        <nav className="sv-nav">
          <a href="#home">Home</a>
          <a href="#scores">Scores</a>
          <a href="#sports">Sports</a>
          <a href="#shop">Shop</a>
          <a href="#news">News</a>

          <button className="sv-nav-sell" onClick={() => setShowSell(true)}>
            Sell Gear
          </button>
        </nav>

        <button className="sv-cart-button" onClick={() => setShowCart(true)}>
          🛒 Cart ({cartCount})
        </button>
      </header>

      {notice && (
        <div className="sv-toast" role="status">
          {notice}
        </div>
      )}

      <main>
        {/* HERO SECTION — GLOVES IMAGE */}

        <section className="sv-hero" id="home">
          <div className="sv-hero-content">
            <span className="sv-pill">
              <i className="sv-dot" />
              10 match live now
            </span>

            <h1>
              Your sports world.
              <br />
              <span>All in one place.</span>
            </h1>

            <p className="sv-hero-description">
              Follow sports, explore match updates, read the latest stories
              and shop your favourite sports equipment.
            </p>

            <div className="sv-hero-actions">
              <a className="sv-primary" href="#scores">
                Explore Scores ↗
              </a>

              <a className="sv-secondary" href="#shop">
                Shop Gear
              </a>
            </div>

            <div className="sv-stats">
              <div>
                <strong>06+</strong>
                <span>Sports</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Sports Hub</span>
              </div>

              <div>
                <strong>Buy + Sell</strong>
                <span>Marketplace</span>
              </div>
            </div>
          </div>

          <div className="sv-hero-visual">
            <div className="sv-play-tag">Play big · 🏆</div>

            {imageFailed ? (
              <div className="sv-hero-fallback" aria-hidden="true">🧤</div>
            ) : (
              <img
                src="/gloves.png"
                alt="Cricket batting gloves"
                className="sv-hero-image"
                onError={() => setImageFailed(true)}
              />
            )}

            <div className="sv-game-tag">Your game starts here</div>
          </div>
        </section>

        {/* TICKER */}

        <div className="sv-ticker" aria-hidden="true">
          <div>
            {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map(
              (text, index) => (
                <span key={index}>
                  {text}
                  <i>●</i>
                </span>
              )
            )}
          </div>
        </div>

        {/* MATCH SCORES */}

        <section className="sv-section" id="scores">
          <div className="sv-section-heading">
            <div>
              <p className="sv-eyebrow">Match centre</p>
              <h2>Scores & match updates.</h2>
            </div>

            <span className="sv-demo-label">Demo scores</span>
          </div>

          <div className="sv-tabs" role="group" aria-label="Filter by sport">
            {["All", "Cricket", "Football"].map((tab) => (
              <button
                key={tab}
                className={scoreFilter === tab ? "on" : ""}
                aria-pressed={scoreFilter === tab}
                onClick={() => setScoreFilter(tab)}
              >
                {tab === "Cricket" && "🏏 "}
                {tab === "Football" && "⚽ "}
                {tab}
              </button>
            ))}
          </div>

          <div className="sv-score-grid">
            {visibleMatches.map((m) => (
              <MatchCard key={m.id} m={m} />
            ))}
          </div>

          <p className="sv-note">
            These are sample scores, not real-time match data.
          </p>
        </section>

        {/* SPORTS CATEGORIES */}

        <section className="sv-section sv-section--alt" id="sports">
          <div className="sv-section-heading">
            <div>
              <p className="sv-eyebrow">Find your game</p>
              <h2>Explore sports</h2>
            </div>
          </div>

          <div className="sv-sports-grid">
            {sports.map((sport) => (
              <a
                className="sv-sport-card"
                href="#shop"
                key={sport.name}
                onClick={() =>
                  setSearch(sport.name === "Other Sports" ? "" : sport.name)
                }
              >
                <span><img style={{width:"100%"}} src={sport.icon} alt={sport.name} /> </span>
                <strong>{sport.name}</strong>
                <small>{sport.note}</small>
              </a>
            ))}
          </div>
        </section>

        {/* MARKETPLACE */}

        <section className="sv-section" id="shop">
          <div className="sv-section-heading">
            <div>
              <p className="sv-eyebrow">Sports marketplace</p>
              <h2>Shop sports gear</h2>
              <p className="sv-muted">Find equipment for your next game.</p>
            </div>

            <button className="sv-primary" onClick={() => setShowSell(true)}>
              + Sell Gear
            </button>
          </div>

          <div className="sv-toolbar">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search sports gear..."
              aria-label="Search sports gear"
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="sv-product-grid">
              {filteredProducts.map((product) => (
                <article className="sv-product-card" key={product.id}>
                  <div className="sv-product-art"><img src={product.icon} alt={product.name} /></div>

                  <div className="sv-product-info">
                    <span className="sv-category">{product.category}</span>

                    <h3>{product.name}</h3>

                    <div className="sv-product-bottom">
                      <strong>{formatPrice(product.price)}</strong>

                      <button
                        className="sv-add-button"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="sv-muted">No items found. Try another search.</p>
          )}
        </section>

        {/* SPORTS NEWS */}

        <section className="sv-section sv-section--alt" id="news">
          <div className="sv-section-heading">
            <div>
              <p className="sv-eyebrow">The latest</p>
              <h2>Sports news</h2>
            </div>
          </div>

          <div className="sv-news-grid">
            {[
              {

                category: "Cricket",
                title: "The big cricket match preview",
                text: "Players and key moments to watch in the upcoming game.",
              },
              {
                icon: "⚽",
                category: "Football",
                title: "The race for the top spot",
                text: "A look at teams competing for the league lead.",
              },
              {
                icon: "🏆",
                category: "Sports",
                title: "Build better training habits",
                text: "Simple ways to improve practice and confidence.",
              },
            ].map((item) => (
              <article className="sv-news-card" key={item.title}>
                <div className="sv-news-art">{item.icon}</div>

                <div className="sv-product-info">
                  <span className="sv-category">{item.category}</span>

                  <h3>{item.title}</h3>
                  <p className="sv-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NEWSLETTER — NEVER MISS A MATCH */}

        <section className="sv-section" id="join">
          <div className="sv-newsletter">
            <div className="sv-newsletter-copy">
              <span className="sv-pill">📬 Free · Match-day alerts</span>

              <h2>Never miss a match.</h2>

              <p>
                One short email before every game you follow, with kick-off
                time, preview and final score.
              </p>

              <ul className="sv-perks">
                <li>⚡ Live score alerts</li>
                <li>🗓️ Fixtures in your inbox</li>
                <li>🏆 Weekly results digest</li>
              </ul>
            </div>

            <form className="sv-newsletter-form" onSubmit={subscribe}>
              <p className="sv-form-label">Pick your sports</p>

              <div className="sv-chips">
                {["Cricket", "Football", "Basketball", "Tennis"].map((name) => (
                  <button
                    type="button"
                    key={name}
                    className={picked.includes(name) ? "on" : ""}
                    aria-pressed={picked.includes(name)}
                    onClick={() => togglePick(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>

              <div className="sv-mail">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@email.com"
                  aria-label="Email address"
                />

                <button className="sv-primary" type="submit">
                  {subscribed ? "Subscribed ✓" : "Subscribe"}
                </button>
              </div>

              <small>
                {subscribed
                  ? "You are in. First update on the next match day."
                  : "No spam. Unsubscribe anytime."}
              </small>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="sv-footer">
        <a className="sv-logo" href="#home">
          Sport <em>Verse</em>
        </a>

        <p>© {new Date().getFullYear()} SportVerse · Your sports universe.</p>
      </footer>

      {/* SHOPPING CART */}

      {showCart && (
        <div
          className="sv-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowCart(false);
            }
          }}
        >
          <section
            className="sv-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <button className="sv-close" onClick={() => setShowCart(false)}>
              ✕ Close
            </button>

            <p className="sv-eyebrow">Your selection</p>
            <h2>Shopping cart</h2>

            {cart.length === 0 ? (
              <p className="sv-muted">
                Your cart is empty. Add some sports gear first.
              </p>
            ) : (
              cart.map((item) => (
                <div className="sv-cart-item" key={item.id}>
                  <span>{item.icon}</span>

                  <div>
                    <strong>{item.name}</strong>
                    <p>{formatPrice(item.price)} each</p>

                    <button
                      className="sv-quantity-button"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      −
                    </button>

                    <span className="sv-quantity">{item.quantity}</span>

                    <button
                      className="sv-quantity-button"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <strong>{formatPrice(item.price * item.quantity)}</strong>
                </div>
              ))
            )}

            <h3 className="sv-total">Total: {formatPrice(cartTotal)}</h3>

            <button
              className="sv-primary sv-full-button"
              onClick={() => {
                setShowCart(false);
                showNotice("Demo checkout only. No payment was taken.");
              }}
            >
              Checkout
            </button>
          </section>
        </div>
      )}

      {/* SELL SPORTS GEAR */}

      {showSell && (
        <div
          className="sv-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowSell(false);
            }
          }}
        >
          <section
            className="sv-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Sell sports gear"
          >
            <button className="sv-close" onClick={() => setShowSell(false)}>
              ✕ Close
            </button>

            <p className="sv-eyebrow">Marketplace</p>
            <h2>Sell your gear</h2>

            <form className="sv-sell-form" onSubmit={sellItem}>
              <label>
                Item name
                <input
                  required
                  value={sellForm.name}
                  onChange={(event) =>
                    setSellForm({ ...sellForm, name: event.target.value })
                  }
                  placeholder="e.g. Cricket gloves"
                />
              </label>

              <label>
                Category
                <select
                  value={sellForm.category}
                  onChange={(event) =>
                    setSellForm({ ...sellForm, category: event.target.value })
                  }
                >
                  {["Cricket", "Football", "Basketball", "Tennis", "Fitness"].map(
                    (item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    )
                  )}
                </select>
              </label>

              <label>
                Price (PKR)
                <input
                  required
                  type="number"
                  min="1"
                  value={sellForm.price}
                  onChange={(event) =>
                    setSellForm({ ...sellForm, price: event.target.value })
                  }
                  placeholder="e.g. 2500"
                />
              </label>

              <button className="sv-primary sv-full-button" type="submit">
                Add Listing
              </button>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}