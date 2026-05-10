import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Mission */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-eco-green">WA PAPER BAG</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Providing premium, eco-friendly packaging solutions. Join us in our journey 
            to reduce plastic waste and protect our environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/shop" className="hover:text-white transition">Shop All Bags</Link></li>
            <li><Link to="/about" className="hover:text-white transition">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link to="/cart" className="hover:text-white transition">View Cart</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>📞 0986059839</li>
            <li>📍 Adama, Ethiopia (ASTU)</li>
            <li>✉️ wubgzer.alemayehu@example.com</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://t.me/Wubgzer0319" className="bg-gray-800 p-3 rounded-full hover:bg-eco-green transition">
              <span className="sr-only">Telegram</span>
              📱
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-eco-green transition">
              <span className="sr-only">LinkedIn</span>
              🔗
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
        <p>© 2026 WA Paper Bag Website. Developed by Wubgzer Alemayehu.</p>
        <p className="mt-2 tracking-widest uppercase">ASTU Software Engineering Department</p>
      </div>
    </footer>
  );
};

export default Footer;