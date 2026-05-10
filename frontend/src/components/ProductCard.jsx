import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-gray-100">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <div className="flex justify-between items-center mt-3">
        <span className="text-eco-green font-bold">${product.price}</span>
        <button 
          onClick={() => addToCart(product)}
          className="bg-eco-green text-white px-4 py-2 rounded-lg text-sm hover:bg-green-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;