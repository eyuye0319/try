import "./index.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 1. DATA ARRAYS
const homeBgImages = [
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1585238342028-4a9a1a0b3f3c?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1616401784845-180882ba9b64?auto=format&fit=crop&w=1600&q=60"
];

const productsData = [
  { id: 1, name: "Luxury Kraft Boutique Bag", price: 5, image: "https://images.unsplash.com/photo-1585238342028-4a9a1a0b3f3c?auto=format&fit=crop&w=600&q=60", desc: "Twisted handle, heavy-duty 120gsm paper." },
  { id: 2, name: "Wine Bottle Carrier", price: 8, image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=600&q=60", desc: "Reinforced base, fits standard 750ml bottles." },
  { id: 3, name: "Eco Delivery Sack", price: 12, image: "https://images.unsplash.com/photo-1616401784845-180882ba9b64?auto=format&fit=crop&w=600&q=60", desc: "Extra large capacity for food delivery." },
  { id: 4, name: "Mini Gift Bag", price: 3, image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=60", desc: "Perfect for jewelry or small favors." },
  { id: 5, name: "Recycled Grocery Bag", price: 4, image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=600&q=60", desc: "100% post-consumer recycled fiber." },
  { id: 6, name: "White Laminated Bag", price: 9, image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&w=600&q=60", desc: "Glossy finish for high-end retail." },
  { id: 7, name: "Pastry Window Bag", price: 6, image: "https://images.unsplash.com/photo-1530631673369-bc20fdb32ff8?auto=format&fit=crop&w=600&q=60", desc: "Clear compostable window for baked goods." },
  { id: 8, name: "Flat Handle Takeout", price: 7, image: "https://images.unsplash.com/photo-1527383214149-cb7be04ae387?auto=format&fit=crop&w=600&q=60", desc: "Space-saving flat handles, sturdy base." },
  { id: 9, name: "Black Matte Carrier", price: 10, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=60", desc: "Premium matte black with cotton rope handles." },
  { id: 10, name: "SOS Lunch Bag", price: 2, image: "https://images.unsplash.com/photo-1621319011735-ddc4156ce300?auto=format&fit=crop&w=600&q=60", desc: "Traditional brown lunch bag, eco-friendly paper." }
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
                <h2 className="section-title">Our Premium Collection</h2>
                <div className="product-grid">
                  {productsData.map((p) => (
                    <div key={p.id} className="card">
                      <div className="img-container">
                        <img src={p.image} alt={p.name} />
                      </div>
                      <h3>{p.name}</h3>
                      <p className="desc">{p.desc}</p>
                      <p className="price">${p.price}.00</p>
                      <button onClick={() => addToCart(p)} className="shop-btn buy-btn">
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
                <div className="about-content">
                  <p>WA Paper Bag Website provides eco-friendly packaging solutions using biodegradable materials.</p>
                  <p><strong>Founder:</strong> Wubgzer Alemayehu</p>
                  <p><strong>Mission:</strong> To reduce plastic waste through sustainable paper alternatives.</p>
                </div>
              </div>
            } />

            <Route path="/contact" element={
              <div className="page-container">
                <h2>Contact Info</h2>
                <div className="contact-details">
                  <p><strong>Email:</strong> wubgzeralemayehu18@gmail.com</p>
                  <p><strong>Phone:</strong> 0986059839</p>
                  <p><strong>Telegram:</strong> @Wubgzer0319</p>
                </div>
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