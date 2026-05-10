const Contact = () => (
  <div className="max-w-2xl mx-auto p-10 mt-10 bg-white shadow-xl rounded-2xl">
    <h2 className="text-3xl font-bold mb-6 text-eco-green">Get In Touch</h2>
    <div className="space-y-4 text-lg">
      <p><strong>Name:</strong> Wubgzer Alemayehu</p>
      <p><strong>Phone:</strong> 0986059839</p>
      <p><strong>Email:</strong> wubgzer.alemayehu@astu.edu.et</p>
      <p><strong>LinkedIn:</strong> <span className="text-blue-600 cursor-pointer">Wubgzer-Alemayehu</span></p>
      <p><strong>Telegram:</strong> <span className="text-blue-500 cursor-pointer">@Wubgzer0319</span></p>
    </div>
    
    <form className="mt-8 space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
      <textarea placeholder="Message" className="w-full p-3 border rounded h-32"></textarea>
      <button className="bg-eco-green text-white px-6 py-2 rounded font-bold hover:bg-green-800 transition">
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;