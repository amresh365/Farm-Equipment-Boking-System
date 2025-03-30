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
  horsepower: String,
  fuelType: String,
  hoursUsed: Number,
  capacity: String,
  year: Number,
  // Add other spec fields as needed
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
      enum: ["Tractor", "Harvester", "Irrigation", "Construction", "Other"],
    },
    dailyRate: {
      type: Number,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for formatted price
equipmentSchema.virtual("formattedPrice").get(function () {
  return `₹${this.dailyRate}/day`;
});

const Equipment = mongoose.model("Equipment", equipmentSchema);

export default Equipment;
