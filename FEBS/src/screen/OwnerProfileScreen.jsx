import React from "react";
import { useState } from "react";
import {
  StarIcon,
  CogIcon,
  TruckIcon,
  CurrencyRupeeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const OwnerProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("equipment");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  // Mock data - replace with API calls
  const ownerProfile = {
    name: "Farm Equipment Co.",
    email: "owner@equipmentco.com",
    contact: "+91 98765 43210",
    location: "Punjab",
    rating: 4.8,
    verified: true,
    totalEarnings: 125000,
    equipmentList: [
      {
        id: 1,
        name: "Mahindra 475 DI Tractor",
        type: "Tractor",
        dailyRate: 2500,
        bookings: 15,
        status: "available",
      },
      // Add more equipment items
    ],
    bookings: [
      {
        id: 1,
        equipmentName: "Mahindra 475 DI Tractor",
        farmer: "Rahul Sharma",
        dates: "2023-08-20 to 2023-08-25",
        status: "pending",
      },
      // Add more bookings
    ],
    transactions: [
      {
        id: 1,
        date: "2023-08-15",
        amount: 12500,
        type: "payout",
      },
      // Add more transactions
    ],
  };

  const handleEditEquipment = (equipment) => {
    setSelectedEquipment(equipment);
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
                  {ownerProfile.name}
                  {ownerProfile.verified && (
                    <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </h1>
                <div className="flex items-center mt-2">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-gray-600">
                    {ownerProfile.rating}
                  </span>
                </div>
                <div className="mt-2 text-gray-600">
                  <p>{ownerProfile.location}</p>
                  <p>{ownerProfile.contact}</p>
                  <p>{ownerProfile.email}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                <CurrencyRupeeIcon className="h-8 w-8 inline-block" />
                {ownerProfile.totalEarnings.toLocaleString()}
              </div>
              <p className="text-gray-600">Total Earnings</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b mb-8">
          {["equipment", "bookings", "earnings", "settings"].map((tab) => (
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

        {/* Equipment Management */}
        {activeTab === "equipment" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ownerProfile.equipmentList.map((equipment) => (
              <div
                key={equipment.id}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{equipment.name}</h3>
                  <span
                    className={`px-2 py-1 text-sm rounded-full ${
                      equipment.status === "available"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {equipment.status}
                  </span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>Type: {equipment.type}</p>
                  <p>Daily Rate: ₹{equipment.dailyRate}</p>
                  <p>Total Bookings: {equipment.bookings}</p>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleEditEquipment(equipment)}
                    className="text-green-600 hover:text-green-700"
                  >
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Booking Requests */}
        {activeTab === "bookings" && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Equipment
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Farmer
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Dates
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ownerProfile.bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {booking.equipmentName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {booking.farmer}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {booking.dates}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-sm rounded-full ${
                          booking.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : booking.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      {booking.status === "pending" && (
                        <>
                          <button className="text-green-600 hover:text-green-700">
                            Accept
                          </button>
                          <button className="text-red-600 hover:text-red-700">
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Edit Equipment Modal */}
        {showEditModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Edit Equipment</h2>
              {/* Add form fields here */}
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerProfileScreen;
