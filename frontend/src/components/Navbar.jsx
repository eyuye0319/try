import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-eco-green tracking-tighter">WA PAPER BAG</Link>
      <div className="space-x-8 font-medium">
        <Link to="/shop" className="hover:text-eco-green transition">Shop</Link>
        <Link to="/about" className="hover:text-eco-green transition">About</Link>
        <Link to="/contact" className="hover:text-eco-green transition">Contact</Link>
        <Link to="/cart" className="relative bg-eco-light p-2 rounded-lg">
          🛒 <span className="ml-1 text-eco-green font-bold">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;