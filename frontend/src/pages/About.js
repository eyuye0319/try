const About = () => (
  <div className="bg-white min-h-screen">
    <div className="max-w-5xl mx-auto p-10">
      <h2 className="text-4xl font-bold text-center text-eco-green mb-10 underline decoration-4 underline-offset-8">Our Mission</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <img src="https://images.unsplash.com/photo-1530519729491-acf5c5845967?auto=format&fit=crop&q=80" className="rounded-3xl shadow-2xl" alt="Paper Bag Production" />
        
        <div className="space-y-6">
          <p className="text-xl text-gray-700 leading-relaxed italic">
            "We believe that small changes in how we package goods can lead to massive changes in the health of our planet."
          </p>
          <div className="border-l-4 border-eco-green pl-6 py-4 bg-eco-light rounded-r-lg">
            <h3 className="font-bold text-2xl mb-2">The Founder</h3>
            <p className="text-gray-800 font-medium">Wubgzer Alemayehu</p>
            <p className="text-gray-600">4th year Software Engineering Student</p>
            <p className="text-gray-600">Adama Science and Technology University (ASTU)</p>
          </div>
          <p className="text-gray-600">
            WA Paper Bag Website was born out of a desire to merge software engineering efficiency with eco-friendly commerce. Our goal is to make high-quality, biodegradable packaging accessible to every business in Ethiopia and beyond.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;