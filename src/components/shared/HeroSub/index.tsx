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
];

export default function HeroSub({ title, description }: HeroSubProps) {
  return (
    <section className="relative pt-40 pb-20 text-center bg-cover overflow-x-hidden">
      {/* ✅ Search Bar Only */}
      <div className="w-full flex justify-center mb-6">
        <form className="w-full max-w-3xl mx-auto px-4">
          <div className="flex items-center bg-white/90 dark:bg-dark/60 backdrop-blur-md border border-white/20 dark:border-dark/30 rounded-full overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="City or state"
              className="flex-1 py-2 px-4 bg-transparent text-dark dark:text-white placeholder:text-dark/50 dark:placeholder:text-white/50 focus:outline-none text-xs md:text-sm"
            />

            <button
              type="submit"
              className="bg-primary hover:bg-dark text-white font-semibold px-5 py-2 transition-colors duration-300 text-xs md:text-sm"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Filter Bar - Separated */}
      <div className="w-full flex justify-center mb-10">
        <div className="w-full max-w-4xl mx-auto px-4 flex flex-wrap gap-4 justify-center">

          <select className="py-2 px-4 bg-white/90 dark:bg-dark/60 border border-white/20 dark:border-dark/30 rounded-full text-dark dark:text-white focus:outline-none text-xs md:text-sm">
              <option value="">Category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="others">Others</option>
            </select>

          {/* Rent Filter */}
          <select className="py-2 px-4 bg-white/90 dark:bg-dark/60 border border-white/20 dark:border-dark/30 rounded-full text-dark dark:text-white focus:outline-none text-xs md:text-sm">
            <option value="">Rent</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>       

          {/* Meals Filter */}
          <select className="py-2 px-4 bg-white/90 dark:bg-dark/60 border border-white/20 dark:border-dark/30 rounded-full text-dark dark:text-white focus:outline-none text-xs md:text-sm">
            <option value="">Meals</option>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
            <option value="both">Both</option>
          </select>

          {/* Distance Filter */}
          <select className="py-2 px-4 bg-white/90 dark:bg-dark/60 border border-white/20 dark:border-dark/30 rounded-full text-dark dark:text-white focus:outline-none text-xs md:text-sm">
            <option value="">Distance to City</option>
            <option value="near">0-5 km</option>
            <option value="medium">5-10 km</option>
            <option value="far">10+ km</option>
          </select>
        </div>
      </div>

      {/* ✅ Popular Places */}
      <div className="max-w-5xl mx-auto mb-8">
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

      {/* ✅ Title & Description */}
      <h2 className="text-dark dark:text-white text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full max-w-2xl mx-auto mt-2">
        {description}
      </p>
    </section>
  );
}
