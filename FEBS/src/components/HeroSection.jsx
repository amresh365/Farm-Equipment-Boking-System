import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="relative bg-gray-900 h-[800px] hero">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 border-b border-gray-800">
          <img
            src="/farm-hero.jpg" // Replace with your image path
            alt="Farm Equipment"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center hero-content ">
          <div className="max-w-2xl text-white mt-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Book Premium Farm Equipment
              <span className="block text-green-500 mt-2">On Demand</span>
            </h1>

            <p className="text-lg sm:text-xl mb-8">
              Connect with verified equipment owners and boost your farming
              productivity
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                onClick={() => navigate("/equipment")}
              >
                Browse Equipment
              </button>
              <button
                className="border-2 border-white hover:border-green-500 text-white hover:text-green-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                onClick={() => navigate("/howItWork")}
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Search Card */}
          <div className=" lg:block ml-auto bg-white p-8 rounded-2xl shadow-xl w-[450px]  mt-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Find Equipment Near You
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Equipment Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <option>Select Type</option>
                    <option>Tractor</option>
                    <option>Harvester</option>
                    <option>Irrigation System</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Booking Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                Search Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
