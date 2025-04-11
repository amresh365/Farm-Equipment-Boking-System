import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { useGetEquipmentDetailsQuery } from "../slices/equipmentApiSlice";
import { useCreateBookingMutation } from "../slices/bookingsApiSlice";
const BookingScreen = () => {
  const { state } = useLocation();
  // console.log(state);
  // const equipment = state?.equipment || {};
  const [bookingDetails, setBookingDetails] = useState({
    bookingDate: "",
    bookingTime: "",
    bookingAddress: "",
  });

  const dispatch = useDispatch();
  const [createBooking] = useCreateBookingMutation();

  const {
    id: equipmentId,
    bookingAddress,
    date,
    time,
  } = useSelector((state) => state.bookEquipments);
  const { _id: userId } = useSelector((state) => state.auth.userInfo);
  // console.log(userId);
  useEffect(() => {
    setBookingDetails((prevDetails) => ({
      bookingDate: date.start, // Correctly updating the bookingDate
      bookingAddress: bookingAddress, // Assuming you want to set the available bookingAddress
      bookingTime: time, // Assuming you want to set the available bookingTime
    }));
  }, []);

  // console.log(bookingDetails);
  const {
    data: equipment,
    isLoading,
    isError,
  } = useGetEquipmentDetailsQuery(equipmentId, {
    refetchOnMountOrArgChange: true, // Refetch when the component mounts or the equipmentId changes
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(
        createBooking({
          user: userId,
          equipment: equipmentId,
          bookingDate: bookingDetails.bookingDate,
          bookingAddress: bookingDetails.bookingAddress,
          bookingTime: bookingDetails.bookingTime,
        })
      );
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

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
                      src={equipment.images[0]}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Booking Date
                        </label>
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                          value={bookingDetails.bookingDate}
                          onChange={(e) =>
                            setBookingDetails({
                              ...bookingDetails,
                              startDate: e.target.value,
                            })
                          }
                        />
                        <level className="block text-sm font-bold  px-2 mt-2 py-3  ">
                          {bookingDetails.bookingDate}
                        </level>
                      </div>
                      <div>
                        <lavel lavel className="block   mb-2">
                          <p className="block text-sm font-medium text-gray-700 ">
                            Bookking Time
                          </p>
                          <span className="text-sm font-bold    mt-2 py-3">
                            {" "}
                            {time}
                          </span>
                        </lavel>
                      </div>
                      <div>
                        <lavel lavel className="block   mb-2">
                          <p className="block text-sm font-medium text-gray-700 ">
                            Bookking Address
                          </p>
                          <span className="text-sm font-bold    mt-2 py-3">
                            {" "}
                            {bookingDetails.bookingAddress}
                          </span>
                        </lavel>
                      </div>
                    </div>

                    {/* <div>
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
                    </div> */}

                    {/* {bookingDetails.deliveryType === "delivery" && (
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
                    )} */}

                    {/* <div>
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
                    </div> */}

                    <div className="border-t pt-6">
                      <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
                        onClick={handleSubmit}
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Price Summary */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingScreen;
