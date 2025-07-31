"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface HeroSubProps {
  title: string;
  description: string;
}

const popularPlaces = [
  "Kochi",
  "Calicut",
  "Thiruvananthapuram",
  "Thrissur",
  "Malappuram",
  "Kannur",
  "Kottayam",
  "Alappuzha",
    "Kochi",
  "Calicut",
  "Thiruvananthapuram",
  "Thrissur",
  "Malappuram",
  "Kannur",
  "Kottayam",
  "Alappuzha",  "Kochi",
  "Calicut",
  "Thiruvananthapuram",
  "Thrissur",
  "Malappuram",
  "Kannur",
  "Kottayam",
  "Alappuzha",  "Kochi",
  "Calicut",
  "Thiruvananthapuram",
  "Thrissur",
  "Malappuram",
  "Kannur",
  "Kottayam",
  "Alappuzha",
];

export default function HeroSub({ title, description }: HeroSubProps) {
  return (
    <section className="relative pt-40 pb-20 text-center bg-cover overflow-x-hidden">
      {/* ✅ Search */}
      <div className="w-full flex justify-center px-4 mb-10">
        <form className="w-full max-w-3xl">
          <div className="flex flex-col md:flex-row bg-white/90 dark:bg-dark/60 backdrop-blur-md border border-white/20 dark:border-dark/30 rounded-full overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Enter city or state"
              className="flex-1 py-4 px-6 bg-transparent text-dark dark:text-white placeholder:text-dark/50 dark:placeholder:text-white/50 focus:outline-none"
            />
            <select className="flex-1 md:max-w-xs py-4 px-6 bg-transparent text-dark dark:text-white focus:outline-none border-t md:border-t-0 md:border-l border-dark/10 dark:border-white/10">
              <option value="">Select Category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="unisex">Unisex</option>
            </select>
            <button
              type="submit"
              className="bg-primary hover:bg-dark text-white font-semibold px-8 py-4 transition-colors duration-300 whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Popular Places */}
      <div className="max-w-5xl mx-auto">
        <div className="flex overflow-x-auto scrollbar-hide gap-6 pl-4 pr-4 snap-x snap-mandatory">
          {popularPlaces.map((place) => (
            <div
              key={place}
              className="flex flex-col items-center shrink-0 snap-start"
            >
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                {place[0]}
              </div>
              <p className="text-sm text-dark dark:text-white mt-2">{place}</p>
            </div>
          ))}
        </div>
      </div>

   

      <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-bold mt-4">
        {title}
      </h2>

      <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full max-w-2xl mx-auto mt-2">
        {description}
      </p>
    </section>
  );
}
