import "./index.css";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const homeBgImages = [
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1585238342028-4a9a1a0b3f3c?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1616401784845-180882ba9b64?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1620912189865-1f7f3b4b1f32?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=1600&q=60",
  "https://images.unsplash.com/photo-1615485737651-580c6b4d4b9c?auto=format&fit=crop&w=1600&q=60"
];

const productsData = [
  {
    id: 1,
    name: "Small Eco Kraft Bag",
    price: 5,
    image: "https://images.unsplash.com/photo-1585238342028-4a9a1a0b3f3c?auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 2,
    name: "Medium Shopping Paper Bag",
    price: 8,
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=600&q=60"
  },
  {
    id: 3,
    name: "Large Eco Delivery Bag",
    price: 12,
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9b64?auto=format&fit=crop&w=600&q=60"
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % homeBgImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Router>
      <div className="min-h-screen bg-green-50">

        {/* Navbar */}
        <nav className="flex justify-between p-4 bg-white/80 backdrop-blur shadow relative z-10">
          <h1 className="font-bold text-green-700">WA PAPER BAG WEBSITE</h1>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart ({cart.length})</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>

          {/* HOME ONLY BACKGROUND SLIDER */}
          <Route
            path="/"
            element={
              <div
                className="relative min-h-screen flex items-center justify-center text-white text-center p-10"
                style={{
                  backgroundImage: `url(${homeBgImages[bgIndex]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}

                
              >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10">
                  <h2 className="text-4xl font-bold">
                    WA Paper Bag Website - Eco Friendly Packaging Solutions
                  </h2>
                  <p className="mt-4 text-lg">
                    High quality biodegradable paper bags for modern businesses
                  </p>
                  <Link
                    to="/shop"
                    className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            }
          />

          {/* SHOP */}
          <Route
            path="/shop"
            element={
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {productsData.map((p) => (
                  <div key={p.id} className="bg-white p-4 shadow rounded">
                    <img src={p.image} alt={p.name} className="h-40 w-full object-cover rounded" />
                    <h3 className="font-bold mt-2">{p.name}</h3>
                    <p className="text-green-700 font-semibold">${p.price}</p>
                    <button
                      onClick={() => addToCart(p)}
                      className="bg-green-500 text-white px-3 py-1 mt-2 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            }
          />

          {/* CART */}
          <Route
            path="/cart"
            element={
              <div className="p-6">
                <h2 className="text-xl font-bold">Cart Items</h2>
                {cart.length === 0 && <p>No items in cart</p>}
                {cart.map((c, i) => (
                  <p key={i}>{c.name} - ${c.price}</p>
                ))}
                <h3 className="mt-4 font-bold">Total: ${total}</h3>
              </div>
            }
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <div className="p-6">
                <h2 className="text-xl font-bold">About Us</h2>
                <p>
                  WA Paper Bag Website provides eco-friendly packaging solutions using biodegradable materials.
                </p>
                <p className="mt-2">
                  Founder: 4th year Software Engineering student at Adama Science and Technology University
                </p>
                <p className="mt-2">Mission: Eco-friendly paper packaging solutions</p>
              </div>
            }
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={
              <div className="p-6">
                <h2 className="text-xl font-bold">Contact</h2>
                <p>Name: Wubgzer Alemayehu</p>
                <p>Phone: 0986059839</p>
                <p>Email: wubgzeralemayehu18@gmail.com</p>
                <p>LinkedIn: Wubgzer-Alemayehu</p>
                <p>Telegram: @Wubgzer0319</p>
              </div>
            }
          />

        </Routes>

        {/* Footer */}
        <footer className="text-center p-4 mt-10 bg-white/80">
          © 2026 WA Paper Bag Website
        </footer>
      </div>
    </Router>
  );
}


