const bookings = [
  {
    bookingId: "FABS-2023-08-00123", // Unique booking ID
    farmer: {
      userId: "USER-456",
      name: "Rahul Sharma",
      contact: "+919876543210",
      location: {
        coordinates: [78.9629, 20.5937], // [longitude, latitude]
        address: "Farm No. 5, Nagpur, Maharashtra",
      },
    },
    equipment: {
      equipmentId: "EQP-789",
      name: "Mahindra 475 DI Tractor",
      ownerId: "OWNER-321",
      dailyRate: 2500,
      deposit: 5000,
      specs: {
        horsepower: "45 HP",
        fuelType: "Diesel",
        attachments: ["Rotavator", "Trailer"],
      },
    },
    bookingDetails: {
      startDate: "2023-08-15T00:00:00Z",
      endDate: "2023-08-17T00:00:00Z",
      totalDays: 3,
      deliveryType: "pickup", // pickup/delivery
      deliveryAddress: "Farm No. 5, Nagpur", // if delivery
      insurance: {
        isOpted: true,
        provider: "AgriInsure",
        coverage: 100000,
      },
    },
    pricing: {
      baseAmount: 7500, // dailyRate * totalDays
      deliveryFee: 500,
      insuranceFee: 300,
      discount: 200, // loyalty/referral discounts
      totalAmount: 8100,
      currency: "INR",
    },
    payment: {
      transactionId: "PAY-12345",
      method: "UPI", // UPI/Card/NetBanking
      status: "completed", // pending/failed/completed
      gateway: "Razorpay",
    },
    status: {
      current: "confirmed", // pending/confirmed/ongoing/completed/cancelled
      timeline: [
        {
          status: "pending",
          timestamp: "2023-08-10T14:30:00Z",
        },
        {
          status: "confirmed",
          timestamp: "2023-08-10T14:35:00Z",
        },
      ],
    },
    review: {
      rating: 4.5, // 1-5
      comment: "Well-maintained tractor",
      submittedAt: "2023-08-18T10:00:00Z",
    },
    metadata: {
      createdAt: "2023-08-10T14:30:00Z",
      updatedAt: "2023-08-18T10:00:00Z",
      cancellationReason: null, // "change of plans", "equipment issue", etc.
    },
  },
];
