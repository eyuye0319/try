import React, { useState, useContext } from 'react';
import { CartContext } from '../App';

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', email: '' });
  const [isOrdered, setIsOrdered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const orderData = { customer: formData, items: cart, total: totalPrice };

    // Post to backend
    const response = await fetch('http://localhost:5000/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      setIsOrdered(true);
      setCart([]); // Clear cart after success
    }
  };

  if (isOrdered) return (
    <div className="text-center p-20">
      <h2 className="text-4xl font-bold text-eco-green mb-4">Order Successful! 🎉</h2>
      <p className="text-gray-600">Thank you for choosing WA Paper Bag. We will contact you soon.</p>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto p-10 mt-10 shadow-2xl rounded-3xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-6">Shipping Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input required type="text" placeholder="Full Name" className="w-full p-4 border rounded-xl" onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input required type="text" placeholder="Phone Number" className="w-full p-4 border rounded-xl" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        <input required type="email" placeholder="Email Address" className="w-full p-4 border rounded-xl" onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <textarea required placeholder="Delivery Address" className="w-full p-4 border rounded-xl" onChange={(e) => setFormData({...formData, address: e.target.value})}></textarea>
        
        <div className="bg-eco-light p-4 rounded-xl border border-dashed border-eco-green">
          <p className="text-sm">By ordering, you support eco-friendly packaging!</p>
        </div>

        <button type="submit" className="w-full bg-eco-green text-white py-4 rounded-xl font-bold hover:shadow-lg transition">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;