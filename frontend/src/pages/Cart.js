import React, { useContext } from 'react';
import { CartContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="max-w-4xl mx-auto p-10 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500 mb-6">Your cart is empty.</p>
          <button onClick={() => navigate('/shop')} className="bg-eco-green text-white px-8 py-3 rounded-lg">Go Shopping</button>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded shadow" />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-eco-green font-semibold">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button onClick={() => removeItem(index)} className="text-red-500 hover:underline">Remove</button>
            </div>
          ))}

          <div className="mt-10 p-6 bg-gray-50 rounded-xl">
            <div className="flex justify-between text-2xl font-bold mb-6">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-eco-green text-white py-4 rounded-xl text-lg font-bold hover:bg-green-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;