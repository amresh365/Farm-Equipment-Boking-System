import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { useGetEquipmentDetailsQuery } from "../slices/equipmentApiSlice";
const BookingScreen = () => {
  const { state } = useLocation();
  console.log(state);
  // const equipment = state?.equipment || {};
  const [bookingDetails, setBookingDetails] = useState({
    bookingtDate: "",
    bookingAddress: "",
  });

  const { id, bookingAddress, date, time } = useSelector(
    (state) => state.bookEquipments
  );

  const {
    data: equipment,
    isLoading,
    isError,
  } = useGetEquipmentDetailsQuery(id);
  // console.log(equipment);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle booking submission
  //   console.log({
  //     equipmentId: equipment.id,
  //     ...bookingDetails,
  //     totalAmount,
  //   });
  // };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="min-h-screen bg-gray-50 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Complete Your Booking
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Equipment Summary */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <div className="flex items-start">
                    <img
                      src={equipment.image}
                      alt={equipment.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="ml-6">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {equipment.name}
                      </h2>
                      <div className="flex items-center mt-2">
                        <StarIcon className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-gray-600">
                          {equipment.rating}
                        </span>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-600">Location</p>
                          <p className="font-medium">{equipment.location}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Daily Rate</p>
                          <p className="font-medium">₹{equipment.rate}/day</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Booking Details
                  </h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Booking Date
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                          value={bookingDetails.startDate}
                          onChange={(e) =>
                            setBookingDetails({
                              ...bookingDetails,
                              startDate: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Delivery Type
                      </label>
                      <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={bookingDetails.deliveryType}
                        onChange={(e) =>
                          setBookingDetails({
                            ...bookingDetails,
                            deliveryType: e.target.value,
                          })
                        }
                      >
                        <option value="pickup">Self Pickup</option>
                        <option value="delivery">Delivery to Farm</option>
                      </select>
                    </div>

                    {bookingDetails.deliveryType === "delivery" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Delivery Address
                        </label>
                        <textarea
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                          value={bookingDetails.deliveryAddress}
                          onChange={(e) =>
                            setBookingDetails({
                              ...bookingDetails,
                              deliveryAddress: e.target.value,
                            })
                          }
                          required={bookingDetails.deliveryType === "delivery"}
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Payment Method
                      </label>
                      <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        value={bookingDetails.paymentMethod}
                        onChange={(e) =>
                          setBookingDetails({
                            ...bookingDetails,
                            paymentMethod: e.target.value,
                          })
                        }
                      >
                        <option value="Ofline">Ofline</option>
                        <option value="Online">Online</option>
                      </select>
                    </div>

                    <div className="border-t pt-6">
                      <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
                      >
                        {/* Confirm Booking for ₹{totalAmount} */}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Price Summary */}
              <div className="lg:sticky lg:top-16 h-fit">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Price Summary
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Daily Rate</span>
                      <span>
                        {/* ₹{equipment.dailyRate} x {totalDays} days */}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      {/* <span>₹{subTotal}</span> */}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Security Deposit</span>
                      {/* <span>₹{deposit}</span> */}
                    </div>
                    {bookingDetails.deliveryType === "delivery" && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span>₹500</span>
                      </div>
                    )}
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold">
                        <span>Total Amount</span>
                        <span>
                          ₹
                          {/* {totalAmount +
                            (bookingDetails.deliveryType === "delivery"
                              ? 500
                              : 0)} */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingScreen;
