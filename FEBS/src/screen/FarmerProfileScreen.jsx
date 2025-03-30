import React from "react";

import { useState } from "react";
import {
  StarIcon,
  ClockIcon,
  TruckIcon,
  CurrencyRupeeIcon,
  UserCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

const FarmerProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Mock data - replace with API calls
  const farmerProfile = {
    name: "Rahul Sharma",
    email: "farmer@agri.com",
    contact: "+91 98765 43210",
    location: "Nagpur, Maharashtra",
    rating: 4.5,
    walletBalance: 15000,
    currentBookings: [
      {
        id: 1,
        equipment: "Mahindra 475 DI Tractor",
        owner: "Farm Equipment Co.",
        dates: "2023-08-20 to 2023-08-25",
        status: "ongoing",
        totalAmount: 12500,
      },
    ],
    rentalHistory: [
      {
        id: 1,
        equipment: "Rotavator",
        dates: "2023-07-15 to 2023-07-18",
        status: "completed",
        rating: 4.5,
      },
    ],
    transactions: [
      {
        id: 1,
        date: "2023-08-15",
        amount: 12500,
        type: "payment",
      },
    ],
  };

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setShowEditModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <UserCircleIcon className="h-24 w-24 text-gray-400" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {farmerProfile.name}
                </h1>
                <div className="flex items-center mt-2">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-gray-600">
                    {farmerProfile.rating}
                  </span>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>{farmerProfile.location}</p>
                  <p>{farmerProfile.contact}</p>
                  <p>{farmerProfile.email}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                <CurrencyRupeeIcon className="h-8 w-8 inline-block" />
                {farmerProfile.walletBalance.toLocaleString()}
              </div>
              <p className="text-gray-600">Wallet Balance</p>
              <button className="mt-2 text-green-600 hover:text-green-700">
                Add Funds
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b mb-8">
          {["bookings", "equipment", "transactions", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-medium ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Current Bookings */}
        {activeTab === "bookings" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Active Bookings</h3>
              {farmerProfile.currentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-lg shadow-sm p-6 mb-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium">
                        {booking.equipment}
                      </h4>
                      <p className="text-gray-600">{booking.owner}</p>
                      <p className="text-gray-600">{booking.dates}</p>
                      <div className="mt-2 flex items-center">
                        <span
                          className={`px-2 py-1 text-sm rounded-full ${
                            booking.status === "ongoing"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {booking.status}
                        </span>
                        <span className="ml-4 text-gray-600">
                          <CurrencyRupeeIcon className="h-5 w-5 inline-block" />
                          {booking.totalAmount}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <button
                        onClick={() => handleViewDetails(booking)}
                        className="text-green-600 hover:text-green-700 block w-full text-left"
                      >
                        View Details
                      </button>
                      {booking.status === "ongoing" && (
                        <button className="text-red-600 hover:text-red-700 block w-full text-left">
                          Cancel Booking
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Rental History</h3>
              {farmerProfile.rentalHistory.map((history) => (
                <div
                  key={history.id}
                  className="bg-white rounded-lg shadow-sm p-6 mb-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium">
                        {history.equipment}
                      </h4>
                      <p className="text-gray-600">{history.dates}</p>
                      <div className="mt-2 flex items-center">
                        <span
                          className={`px-2 py-1 text-sm rounded-full ${
                            history.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {history.status}
                        </span>
                        {history.rating && (
                          <div className="ml-4 flex items-center">
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                            <span className="ml-1">{history.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <button className="text-green-600 hover:text-green-700">
                      View Receipt
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rented Equipment */}
        {activeTab === "equipment" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mock equipment data */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">
                  Mahindra 475 DI Tractor
                </h3>
                <span className="text-sm text-gray-500">Currently Rented</span>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Owner: Farm Equipment Co.</p>
                <p>Rental Period: 5 days</p>
                <p>Hours Used: 15h</p>
                <p>Next Payment Due: 2023-08-25</p>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="text-green-600 hover:text-green-700">
                  Extend Rental
                </button>
                <button className="text-red-600 hover:text-red-700">
                  Return Early
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Transactions */}
        {activeTab === "transactions" && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {farmerProfile.transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {transaction.type === "payment"
                        ? "Equipment Rental"
                        : "Wallet Top-up"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <CurrencyRupeeIcon className="h-4 w-4 inline-block" />
                      {transaction.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Booking Details Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
              {selectedBooking && (
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-600">Equipment:</label>
                    <p className="font-medium">{selectedBooking.equipment}</p>
                  </div>
                  <div>
                    <label className="text-gray-600">Owner:</label>
                    <p className="font-medium">{selectedBooking.owner}</p>
                  </div>
                  <div>
                    <label className="text-gray-600">Dates:</label>
                    <p className="font-medium">{selectedBooking.dates}</p>
                  </div>
                  <div>
                    <label className="text-gray-600">Total Amount:</label>
                    <p className="font-medium">
                      <CurrencyRupeeIcon className="h-5 w-5 inline-block" />
                      {selectedBooking.totalAmount}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Close
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                  Download Invoice
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerProfileScreen;
