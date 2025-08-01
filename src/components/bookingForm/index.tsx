"use client";

import React, { useState } from "react";

export default function BookingForm({ isOpen, onClose, onSubmit, defaultData }) {
  const [formData, setFormData] = useState({
    userId: "",
    roomId: defaultData?.roomId || "",
    hostelId: defaultData?.hostelId || "",
    checkInDate: "",
    checkOutDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    onSubmit(formData);
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
            type="text"
            name="userId"
            placeholder="Your User ID"
            value={formData.userId}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="roomId"
            placeholder="Room ID"
            value={formData.roomId}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="hostelId"
            placeholder="Hostel ID"
            value={formData.hostelId}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
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
