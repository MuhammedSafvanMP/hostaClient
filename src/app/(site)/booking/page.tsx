"use client";

import Image from "next/image";

const userBookings = [
  {
    id: "b1",
    hostelImage: "/images/hostels/hostel1.jpg",
    hostelTitle: "Sunny Hostel",
    amount: 3500,
    status: "Pending",
  },
  {
    id: "b2",
    hostelImage: "/images/hostels/hostel2.jpg",
    hostelTitle: "Cozy Stay",
    amount: 4200,
    status: "Accepted",
  },
  {
    id: "b3",
    hostelImage: "/images/hostels/hostel3.jpg",
    hostelTitle: "Urban Rooms",
    amount: 3800,
    status: "Cancelled",
  },
];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  Accepted: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

export default function Bookings() {
  return (
    <section className="pt-20 pb-10 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-dark dark:text-white">
        My Bookings
      </h1>

      <div className="flex flex-col gap-4">
        {userBookings.map((booking) => (
          <div
            key={booking.id}
            className="flex flex-col sm:flex-row bg-white dark:bg-dark/20 border border-dark/10 dark:border-white/20 rounded-xl overflow-hidden shadow-sm"
          >
            <div className="w-full sm:w-40 h-40 relative">
              <Image
                src={booking.hostelImage}
                alt={booking.hostelTitle}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="flex flex-col flex-1 p-4">
              <h2 className="text-lg font-medium text-dark dark:text-white">
                {booking.hostelTitle}
              </h2>
              <p className="text-sm text-dark/50 dark:text-white/50 mb-2">
                ₹ {booking.amount}
              </p>

              <span
                className={`inline-block px-3 py-1 text-xs rounded-full font-medium w-fit ${
                  statusColors[booking.status]
                }`}
              >
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
