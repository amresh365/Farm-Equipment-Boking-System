import React from "react";
import { useState, useEffect } from "react";
import { EqualsIcon, StarIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import { useGetEquipmentDetailsQuery } from "../slices/equipmentApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { myEquipment } from "../slices/bookEquipSlice";
const EquipmentDetailScreen = () => {
  const [selectedDates, setSelectedDates] = useState({
    start: null,
  });
  const [bookingAddress, setBookingAddress] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedTimes] = useState(["10:00 AM", "02:00 PM"]); // Example booked times
  const isBooked = (time) => bookedTimes.includes(time);
  const isSelected = (time) => time === selectedTime;

  const onTimeSelect = (time) => {
    setSelectedTime(time);
  };
  // Generate time slots (adjust as needed)
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
  ];

  const navigate = useNavigate();
  const { selectedEquipments } = useSelector((state) => state.bookEquipments);

  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    data: equipment,
    isLoading,
    isError,
  } = useGetEquipmentDetailsQuery(id);

  console.log(equipment);

  const handleTimeSelect = (time) => {
    if (!isBooked(time)) {
      setSelectedTime(time);
      onTimeSelect(time);
    }
  };

  const onClickHandler = () => {
    dispatch(myEquipment({ id, bookingAddress, selectedDates, selectedTime }));
    navigate("/equipment/book");
  };

  // useEffect(() => {
  //   setLoading(true);
  //   const equip = equipmentList.find((element) => element.id == id);
  //   setEquipment(equip);
  //   setLoading(false);
  // }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div>loading</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-6">
                <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={equipment.images[0]}
                    alt={equipment.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <div className="flex mt-4 space-x-2">
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
                </div> */}
              </div>

              {/* Specs Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Specifications
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* <div className="space-y-1">
                  <p className="text-gray-600">Horsepower</p>
                  <p className="font-medium">{equipment.specs.horsepower}</p>
                </div> */}
                  {/* <div className="space-y-1">
                  <p className="text-gray-600">Fuel Type</p>
                  <p className="font-medium">{equipment.specs.fuelType}</p>
                </div> */}
                  {/* <div className="space-y-1">
                  <p className="text-gray-600">Year</p>
                  <p className="font-medium">{equipment.specs.year}</p>
                </div> */}
                  <div className="space-y-1">
                    <p className="text-gray-600">Hours Used</p>
                    <p className="font-medium">{equipment.specs.hoursUsed}</p>
                  </div>
                  {/* <div className="space-y-1">
                  <p className="text-gray-600">Capacity</p>
                  <p className="font-medium">{equipment.specs.capacity}</p>
                </div> */}
                </div>
              </div>

              {/* Owner Details */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Owner Details
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    {equipment.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium">{equipment.name}</h3>
                    <div className="flex items-center space-x-1">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm">{equipment.rating}</span>
                      <span className="text-gray-500 text-sm">
                        • {equipment.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Reviews
                </h2>
                <div className="space-y-6">
                  {/* {equipment.reviews.map((review) => (
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
                  ))} */}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:sticky lg:top-16 h-fit">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    ₹{equipment.rate}
                  </span>
                  <span className="text-gray-500">/{equipment.rateType}</span>
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
                    </div>
                  </div>
                  {/* Select booking time slot */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-700">
                      Select Time Slot
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelect(time)}
                          disabled={isBooked(time)}
                          className={`p-3 text-sm rounded-md border transition-all
              ${
                isSelected(time)
                  ? "bg-green-600 text-white border-green-700"
                  : isBooked(time)
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                  : "bg-white text-gray-700 hover:bg-green-50 border-gray-300 hover:border-green-500"
              }`}
                        >
                          {time}
                          {isBooked(time) && (
                            <span className="block text-xs mt-1 text-red-500">
                              Booked
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Address of user */}
                  <div className="space-y-2">
                    <div className="flex justify-between font-medium">
                      <span>Address:</span>
                      <input
                        className=""
                        placeholder="Enter Address"
                        value={bookingAddress}
                        onChange={(e) => setBookingAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
                    onClick={onClickHandler}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipmentDetailScreen;
