import "./index.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 1. DATA ARRAYS
const homeBgImages = [
  "https://images.unsplash.com/photo-1585238342028-4a9a1a0b3f3c?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=60"
];

const productsData = [
  { id: 1, name: "Kraft Boutique Bag (10-pack)", price: 25, image: "https://images.unsplash.com/photo-1585238342028-4a9a1a0b3f3c?auto=format&fit=crop&w=600&q=60", desc: "Twisted handle, heavy-duty 120gsm paper." },
  { id: 2, name: "White Retail Bag (10-pack)", price: 28, image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&w=600&q=60", desc: "Glossy finish, twisted handle, reinforced base." },
  { id: 3, name: "Recycled Grocery Sack (50-pack)", price: 40, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=60", desc: "Traditional SOS flat handle, sturdy 150gsm." },
  { id: 4, name: "Mini Gift Bags (Assorted)", price: 30, image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=60", desc: "Vibrant colors (Red, Gold, Blue) for small items." },
  { id: 5, name: "Eco Takeaway Sack", price: 15, image: "https://images.unsplash.com/photo-1527383214149-cb7be04ae387?auto=format&fit=crop&w=600&q=60", desc: "Wide base takeout sack with flat paper handles." },
  { id: 6, name: "Large Delivery Sack", price: 35, image: "https://images.unsplash.com/photo-1616401784845-180882ba9b64?auto=format&fit=crop&w=600&q=60", desc: "Extra capacity, reinforced base for food boxes." },
  { id: 7, name: "Recycle Symbol Kraft", price: 22, image: "https://images.unsplash.com/photo-1621319011735-ddc4156ce300?auto=format&fit=crop&w=600&q=60", desc: "Featuring prominent recycle logo print." },
  { id: 8, name: "Plain SOS Lunch Bags (200)", price: 18, image: "https://images.unsplash.com/photo-1585238342028-4a9a1a0b3f3c?auto=format&fit=crop&w=600&q=60", desc: "Traditional brown lunch bag, no handles." },
  { id: 9, name: "Gusseted Pastry Bag (Clear Window)", price: 6, image: "https://images.unsplash.com/photo-1530631673369-bc20fdb32ff8?auto=format&fit=crop&w=600&q=60", desc: "Greaseproof paper with a compostable window." },
  { id: 10, name: "Assorted Sized Pack", price: 55, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=60", desc: "10 Small, 10 Medium, 10 Large, 10 XL sacks." }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % homeBgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const addToCart = (product) => setCart([...cart, product]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Router>
      <div className="app-wrapper">
        <nav className="navbar">
          <h1 className="nav-logo">WA PAPER BAG</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart ({cart.length})</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <main className="content-area">
          <Routes>
            <Route path="/" element={
              <div className="home-hero" style={{ backgroundImage: `url(${homeBgImages[bgIndex]})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-text">
                  <h2>Eco Friendly Packaging Solutions</h2>
                  <p>High quality biodegradable paper bags for modern businesses</p>
                  <Link to="/shop" className="shop-btn">Shop Now</Link>
                </div>
              </div>
            } />

          <Route path="/shop" element={
  <div className="page-container">
    <h2 className="section-title">Our Premium Product Range</h2>
    <div className="product-grid">
      {productsData.map((p) => (
        <div key={p.id} className="card">
          <div className="img-container">
            <img src={p.image} alt={p.name} />
          </div>
          <h3>{p.name}</h3>
          <p style={{fontSize: '0.9rem', color: '#666', margin: '8px 0'}}>{p.desc}</p>
          <p className="price">${p.price}.00</p>
          <button onClick={() => addToCart(p)} className="shop-btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
} />

            <Route path="/cart" element={
              <div className="page-container">
                <h2>Your Shopping Cart</h2>
                <div className="cart-list">
                  {cart.length === 0 ? <p>No items in cart yet.</p> : (
                    cart.map((c, i) => (
                      <div key={i} className="cart-item">
                        <span>{c.name}</span>
                        <span>${c.price}</span>
                      </div>
                    ))
                  )}
                  <h3 className="cart-total">Total: ${total}</h3>
                </div>
              </div>
            } />

            <Route path="/about" element={
              <div className="page-container">
                <h2>About Us</h2>
                <p>WA Paper Bag Website provides eco-friendly packaging solutions using biodegradable materials.</p>
                <p><strong>Founder:</strong> Wubgzer Alemayehu</p>
              </div>
            } />

            <Route path="/contact" element={
              <div className="page-container">
                <h2>Contact Info</h2>
                <p><strong>Email:</strong> wubgzeralemayehu18@gmail.com</p>
                <p><strong>Phone:</strong> 0986059839</p>
                <p><strong>Telegram:</strong> @Wubgzer0319</p>
              </div>
            } />
          </Routes>
        </main>

        <footer className="main-footer">
          © 2026 WA Paper Bag Website | Eco-friendly Solutions
        </footer>
      </div>
    </Router>
  );
}