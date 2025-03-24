import React, { useState } from "react";
import "./ContactUs.css"; // Import custom CSS for flip effect

const ContactUs = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-2/3 m-auto min-h-screen bg-gray-100">
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner m-auto">
          <div className="flip-card-front p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl text-blue-800 text-center font-extrabold mb-4">
              Sarkari Exam Tricks
            </h1>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
            <button
              onClick={handleFlip}
              className="mt-4 text-blue-600 hover:underline"
            >
              Sign In / Register
            </button>
          </div>
          <div className="flip-card-back p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Sign In / Register</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Sign In
              </button>
            </form>
            <button
              onClick={handleFlip}
              className="mt-4 text-blue-600 hover:underline"
            >
              Back to Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
