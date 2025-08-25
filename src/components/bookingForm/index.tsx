"use client";

import { postAHostelBooking } from "@/api/Api";
import React, { useState } from "react";

export default function BookingForm({ isOpen, onClose, roomId, hostelId }) {
  const [formData, setFormData] = useState({
    checkInDate: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBooking = async () => {
    try {
      const booking = {
        userId: "682aff06f8f939751cf0050c", 
        roomId,
        hostelId,
        checkInDate: formData.checkInDate,
      };

      const response = await postAHostelBooking(booking);

      if (response.status === 201) {
        onClose();
      }
    } catch (error) {
      console.error("Error posting booking:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-dark rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-dark dark:text-white">
          Book This Property
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleBooking}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-dark"
            >
              Confirm Booking
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
