import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const equipmentSpecsSchema = new mongoose.Schema({
  fuelType: String,
  hoursUsed: Number,
  capacity: String,
  year: Number,
});

const equipmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: [
        "Tractor",
        "Harvester",
        "Irrigation",
        "Construction Equipment",
        "Other",
        "Agriculture Equipment",
      ],
    },
    rateType: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: false,
    // },
    // ownerDetails: {
    //   rating: Number,
    //   location: String,
    //   contact: String,
    // },
    // reviews: [reviewSchema],
    specs: equipmentSpecsSchema,

    location: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        default: "/default-equipment.jpg",
      },
    ],
    availability: [Date],
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Equipment = mongoose.model("Equipment", equipmentSchema);

export default Equipment;
