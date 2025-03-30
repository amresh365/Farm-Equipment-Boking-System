import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  method: {
    type: String,
    required: true,
    enum: ["upi", "cash"],
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed", "failed", "refunded"],
    default: "pending",
  },
  transactionId: String,
  amount: Number,
});

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    equipment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Equipment",
      required: true,
    },
    bookingDate: {
      type: Date,
      required: true,
    },

    delivery: {
      type: {
        type: String,
        enum: ["pickup", "delivery"],
        default: "pickup",
      },
      address: String,
      coordinates: [Number], // [longitude, latitude]
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "ongoing", "completed", "cancelled"],
      default: "pending",
    },
    payment: paymentSchema,
    equipmentSnapshot: {
      name: String,
      dailyRate: Number,
      specs: {
        horsepower: String,
        fuelType: String,
        hoursUsed: Number,
        capacity: String,
        year: Number,
      },
    },
    // depositAmount: Number,
    // totalAmount: Number,
    cancellationReason: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Indexes for common queries
// bookingSchema.index({ user: 1 });
// bookingSchema.index({ equipment: 1 });
// bookingSchema.index({ status: 1 });
// bookingSchema.index({ startDate: 1 });
// bookingSchema.index({ "delivery.coordinates": "2dsphere" });

// Virtual for booking duration
// bookingSchema.virtual("duration").get(function () {
//   return Math.ceil((this.endDate - this.startDate) / (1000 * 60 * 60 * 24));
// });

// Pre-save hook to calculate total days
// bookingSchema.pre("save", function (next) {
//   if (this.isModified("startDate") || this.isModified("endDate")) {
//     this.totalDays = Math.ceil(
//       (this.endDate - this.startDate) / (1000 * 60 * 60 * 24)
//     );
//   }
//   next();
// });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
