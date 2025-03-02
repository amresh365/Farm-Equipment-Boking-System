import React from "react";

import { useState } from "react";
// import { StarIcon } from "@heroicons/react/24/solid";

const EquipmentDetailScreen = () => {
  const [selectedDates, setSelectedDates] = useState({
    start: null,
    end: null,
  });
  const [activeImage, setActiveImage] = useState(0);

  // Mock data - replace with API data
  const equipment = {
    id: 1,
    name: "Mahindra 475 DI Tractor",
    images: ["/tractor-1.jpg", "/tractor-2.jpg", "/tractor-3.jpg"],
    owner: {
      name: "Farm Equipment Co.",
      rating: 4.8,
      location: "Punjab",
      contact: "+91 98765 43210",
    },
    specs: {
      horsepower: "45 HP",
      fuelType: "Diesel",
      hoursUsed: 1200,
      capacity: "40 HP PTO",
      year: 2020,
    },
    price: 2500,
    reviews: [
      {
        id: 1,
        user: "Rahul Sharma",
        rating: 4.5,
        comment: "Well-maintained tractor, great service",
      },
      {
        id: 2,
        user: "Priya Singh",
        rating: 5,
        comment: "Smooth booking process",
      },
    ],
  };

  const calculateTotal = () => {
    if (!selectedDates.start || !selectedDates.end) return 0;
    const days = Math.ceil(
      (new Date(selectedDates.end) - new Date(selectedDates.start)) /
        (1000 * 60 * 60 * 24)
    );
    return days * equipment.price;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-6">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={equipment.images[activeImage]}
                  alt={equipment.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex mt-4 space-x-2">
                {equipment.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                      activeImage === index
                        ? "border-green-500"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Specs Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Specifications
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="text-gray-600">Horsepower</p>
                  <p className="font-medium">{equipment.specs.horsepower}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">Fuel Type</p>
                  <p className="font-medium">{equipment.specs.fuelType}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">Year</p>
                  <p className="font-medium">{equipment.specs.year}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">Hours Used</p>
                  <p className="font-medium">{equipment.specs.hoursUsed}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">Capacity</p>
                  <p className="font-medium">{equipment.specs.capacity}</p>
                </div>
              </div>
            </div>

            {/* Owner Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Owner Details
              </h2>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  {equipment.owner.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium">{equipment.owner.name}</h3>
                  <div className="flex items-center space-x-1">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">{equipment.owner.rating}</span>
                    <span className="text-gray-500 text-sm">
                      • {equipment.owner.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
              <div className="space-y-6">
                {equipment.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b pb-6 last:border-b-0"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <span className="font-medium">{review.rating}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{review.comment}</p>
                    <p className="text-sm text-gray-500">- {review.user}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:sticky lg:top-16 h-fit">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-4">
                <span className="text-2xl font-bold text-green-600">
                  ₹{equipment.price}
                </span>
                <span className="text-gray-500">/day</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Dates
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      onChange={(e) =>
                        setSelectedDates({
                          ...selectedDates,
                          start: e.target.value,
                        })
                      }
                    />
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      onChange={(e) =>
                        setSelectedDates({
                          ...selectedDates,
                          end: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deposit</span>
                    <span>₹{equipment.price * 2}</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>₹{calculateTotal() + equipment.price * 2}</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetailScreen;
