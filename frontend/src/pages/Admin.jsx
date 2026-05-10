import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Order Management Dashboard</h1>
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-eco-green text-white">
              <th className="p-4">Customer</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Items</th>
              <th className="p-4">Total</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">{order.customer.name}</td>
                <td className="p-4 text-sm">
                  {order.customer.phone} <br />
                  <span className="text-gray-400">{order.customer.email}</span>
                </td>
                <td className="p-4">
                  {order.items.map(item => item.name).join(', ')}
                </td>
                <td className="p-4 font-bold text-eco-green">${order.total}</td>
                <td className="p-4 text-sm">{new Date(order.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;