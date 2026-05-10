import React, { useContext } from 'react';
import { CartContext } from '../App';

const products = [
  { id: 1, name: "Eco-Brown Kraft Bag", price: 12.50, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=500" },
  { id: 2, name: "White Handle Bag", price: 15.00, image: "https://images.unsplash.com/photo-1544816153-097305542a61?q=80&w=500" },
  { id: 3, name: "Premium Gift Bag", price: 25.00, image: "https://images.unsplash.com/photo-1606166187734-a4cb74079027?q=80&w=500" },
  { id: 4, name: "Mini Jewelry Bag", price: 8.00, image: "https://images.unsplash.com/photo-1589363360145-489e2233f81e?q=80&w=500" },
];

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {products.map(p => (
          <div key={p.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <img src={p.image} className="w-full h-64 object-cover" alt={p.name} />
            <div className="p-4">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-eco-green font-semibold">${p.price.toFixed(2)}</p>
              <button 
                onClick={() => addToCart(p)}
                className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;