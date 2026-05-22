import "./index.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

// --- DATA DEFINITIONS ---
const homeBgImages = [
  "https://images.unsplash.com/photo-1585238342028-4a9a1a0b3f3c?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=60"
];

const productsData = [
  { id: 1, name: "Kraft Boutique Bag (M)", price: 15, image: "https://images.unsplash.com/photo-1585238342028-4a9a1a0b3f3c?auto=format&fit=crop&w=600&q=60", desc: "Classic brown kraft with twisted handles." },
  { id: 2, name: "White Retail Bag (L)", price: 18, image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?auto=format&fit=crop&w=600&q=60", desc: "Clean white boutique style for retail." },
  { id: 3, name: "Pink Celebration Bag (S)", price: 12, image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=60", desc: "Small colorful bags for gifts and events." },
 
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % homeBgImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addToCart = (product) => setCart([...cart, product]);

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
            {user ? <span className="user-name">Welcome, {user.name}</span> : <Link to="/login" className="login-link">Login</Link>}
          </div>
        </nav>

        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home bgImage={homeBgImages[bgIndex]} />} />
            <Route path="/shop" element={<Shop products={productsData} addToCart={addToCart} />} />
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="main-footer">
          © 2026 WA Paper Bag Website | Eco-friendly Solutions
        </footer>
      </div>
    </Router>
  );
}

function Home({ bgImage }) {
  return (
    <div className="home-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h2>Eco Friendly Packaging Solutions</h2>
        <p>Sustainable bags for a better tomorrow.</p>
        <Link to="/shop" className="shop-btn">Shop Now</Link>
      </div>
    </div>
  );
}

function Shop({ products, addToCart }) {
  const [search, setSearch] = useState("");
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="shop-header">
        <h2 className="section-title">Our Collection</h2>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search bags (e.g. 'Kraft', 'Luxury')..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="product-grid">
        {filtered.map((p) => (
          <div key={p.id} className="card">
            <div className="img-container">
              <img src={p.image} alt={p.name} onError={(e) => e.target.src="https://via.placeholder.com/300?text=Paper+Bag"} />
            </div>
            <h3>{p.name}</h3>
            <p className="desc">{p.desc}</p>
            <p className="price">${p.price}.00</p>
            <button onClick={() => addToCart(p)} className="buy-btn">Add to Cart</button>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p className="no-results">No bags found matching your search.</p>}
    </div>
  );
}

function AuthPage({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = (e) => { e.preventDefault(); setUser({ name: "Valued Customer" }); navigate("/shop"); };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && <input type="text" placeholder="Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="buy-btn">{isLogin ? "Login" : "Create Account"}</button>
        </form>
        <button className="toggle-auth" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Switch to Sign Up" : "Switch to Login"}</button>
      </div>
    </div>
  );
}

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="page-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <div className="cart-list">
          {cart.map((item, index) => (
            <div key={index} className="cart-item"><span>{item.name}</span><span>${item.price}</span></div>
          ))}
          <h3 className="cart-total">Total: ${total}</h3>
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <div className="page-container">
      <h2 className="section-title">About Us</h2>
      <p>Providing eco-friendly packaging solutions using biodegradable materials.</p>
      <p><strong>Founder:</strong> Wubgzer Alemayehu</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-container">
      <h2 className="section-title">Contact Us</h2>
      <p>Email: wubgzeralemayehu18@gmail.com | Phone: 0986059839</p>
    </div>
  );
}