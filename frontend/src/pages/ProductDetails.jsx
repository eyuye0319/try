import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../App';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  // In a real app, you would fetch this from your backend/API
  const product = {
    id: id,
    name: "Eco-Brown Kraft Bag",
    price: 12.50,
    description: "High-quality, biodegradable kraft paper bag. Perfect for retail, groceries, and gift packaging. Features reinforced handles for extra durability.",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800"
  };

  const handleAddToCart = () => {
    for(let i = 0; i < qty; i++) {
      addToCart(product);
    }
    navigate('/cart');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-20 flex flex-col md:flex-row gap-12">
      <div className="flex-1">
        <img src={product.image} alt={product.name} className="w-full rounded-3xl shadow-2xl sticky top-24" />
      </div>
      
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-2xl text-eco-green font-bold">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
        
        <div className="py-6 border-t border-b">
          <label className="block mb-2 font-semibold">Quantity</label>
          <input 
            type="number" 
            min="1" 
            value={qty} 
            onChange={(e) => setQty(parseInt(e.target.value))}
            className="w-24 p-3 border rounded-xl outline-eco-green"
          />
        </div>

        <button 
          onClick={handleAddToCart}
          className="w-full bg-eco-green text-white py-5 rounded-2xl text-xl font-bold hover:bg-green-800 transition shadow-lg shadow-green-200">
          Add to Shopping Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;