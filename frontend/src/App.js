import "./index.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 1. DATA ARRAYS (Ensure these are inside the file!)
const homeBgImages = [
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1585238342028-4a9a1a0b3f3c?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1616401784845-180882ba9b64?auto=format&fit=crop&w=1600&q=60"
];

const productsData = [
  { id: 1, name: "Small Eco Kraft Bag", price: 5, image: "https://images.unsplash.com/photo-1585238342028-4a9a1a0b3f3c?auto=format&fit=crop&w=600&q=60" },
  { id: 2, name: "Medium Shopping Paper Bag", price: 8, image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=600&q=60" },
  { id: 3, name: "Large Eco Delivery Bag", price: 12, image: "https://images.unsplash.com/photo-1616401784845-180882ba9b64?auto=format&fit=crop&w=600&q=60" }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [bgIndex, setBgIndex] = useState(0);

  // Background Slider Logic
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
        {/* NAVIGATION */}
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

        {/* MAIN CONTENT AREA */}
        <main className="content-area">
          <Routes>
            {/* HOME PAGE */}
            <Route path="/" element={
              <div 
                className="home-hero" 
                style={{ backgroundImage: `url(${homeBgImages[bgIndex]})` }}
              >
                <div className="hero-overlay"></div>
                <div className="hero-text">
                  <h2>Eco Friendly Packaging Solutions</h2>
                  <p>High quality biodegradable paper bags for modern businesses</p>
                  <Link to="/shop" className="shop-btn">Shop Now</Link>
                </div>
              </div>
            } />

            {/* SHOP PAGE */}
            <Route path="/shop" element={
              <div className="page-container">
                <h2 style={{marginBottom: '20px'}}>Our Products</h2>
                <div className="product-grid">
                  {productsData.map((p) => (
                    <div key={p.id} className="card">
                      <img src={p.image} alt={p.name} />
                      <h3>{p.name}</h3>
                      <p className="price">${p.price}</p>
                      <button onClick={() => addToCart(p)} className="shop-btn" style={{width: '100%', border: 'none', cursor: 'pointer'}}>
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            } />

            {/* CART PAGE */}
            <Route path="/cart" element={
              <div className="page-container">
                <h2>Your Shopping Cart</h2>
                <div style={{marginTop: '20px'}}>
                  {cart.length === 0 ? <p>No items in cart yet.</p> : (
                    cart.map((c, i) => (
                      <div key={i} style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ddd'}}>
                        <span>{c.name}</span>
                        <span>${c.price}</span>
                      </div>
                    ))
                  )}
                  <h3 style={{marginTop: '20px', textAlign: 'right'}}>Total: ${total}</h3>
                </div>
              </div>
            } />

            {/* ABOUT PAGE */}
            <Route path="/about" element={
              <div className="page-container">
                <h2>About Us</h2>
                <p style={{marginTop: '15px'}}>WA Paper Bag Website provides eco-friendly packaging solutions using biodegradable materials.</p>
                <p><strong>Founder:</strong> Wubgzer Alemayehu</p>
                <p><strong>Mission:</strong> To reduce plastic waste through sustainable paper alternatives.</p>
              </div>
            } />

            {/* CONTACT PAGE */}
            <Route path="/contact" element={
              <div className="page-container">
                <h2>Contact Info</h2>
                <div style={{marginTop: '15px'}}>
                  <p><strong>Email:</strong> wubgzeralemayehu18@gmail.com</p>
                  <p><strong>Phone:</strong> 0986059839</p>
                  <p><strong>Telegram:</strong> @Wubgzer0319</p>
                </div>
              </div>
            } />
          </Routes>
        </main>

        {/* FOOTER - This will now stay at the bottom! */}
        <footer className="main-footer">
          © 2026 WA Paper Bag Website | Eco-friendly Solutions
        </footer>
      </div>
    </Router>
  );
}