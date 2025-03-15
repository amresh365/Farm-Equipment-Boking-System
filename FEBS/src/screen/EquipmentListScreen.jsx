import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { equipmentList } from "../data/Equipments";
import { useGetEquipmentQuery } from "../slices/equipmentApiSlice";
const EquipmentListScreen = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    equipmentType: "",
    priceRange: [0, 10000],
    location: "",
    availability: "",
  });
  const { data: equipments, isLoading, isError } = useGetEquipmentQuery();
  console.log(equipments);
  const navigate = useNavigate();
  const goToHomeHandler = () => {
    navigate("/");
  };
  const onClickHandler = (id) => {
    navigate(`/equipment/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {" "}
      {/* Account for fixed header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors mb-5"
          onClick={goToHomeHandler}
        >
          Go Back
        </button>
        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Equipment Type Filter */}
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              value={selectedFilters.equipmentType}
              onChange={(e) =>
                setSelectedFilters({
                  ...selectedFilters,
                  equipmentType: e.target.value,
                })
              }
            >
              <option value="">All Equipment</option>
              <option>Tractor</option>
              <option>Harvester</option>
              <option>Irrigation System</option>
            </select>

            {/* Price Range */}

            {/* Location Filter */}
            <input
              type="text"
              placeholder="Location"
              className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />

            {/* Availability Calendar */}
            <input
              type="date"
              className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipmentList.map((equipment) => (
            <div
              key={equipment.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image Carousel */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                  {equipment.type}
                </div>
              </div>

              {/* Equipment Details */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {equipment.name}
                  </h3>
                  <span className="flex items-center text-sm text-green-600">
                    ★ {equipment.rating}
                  </span>
                </div>

                {/* Specs */}
                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2">
                      ⚡️ {equipment.specs.horsepower}
                    </span>
                    <span>⛽️ {equipment.specs.fuelType}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    📍 {equipment.location}
                  </div>
                  <div className="text-sm text-gray-600">
                    🕒 {equipment.specs.hoursUsed} hours
                  </div>
                </div>

                {/* Pricing and Action */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold text-green-600">
                      ₹{equipment.rate}
                    </span>
                    <span className="text-sm text-gray-500">
                      /{equipment.rateType}
                    </span>
                  </div>
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    onClick={() => onClickHandler(equipment.id)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentListScreen;
