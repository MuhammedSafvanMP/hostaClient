"use client";
import React, { useState } from "react";
import { propertyHomes } from "@/app/api/propertyhomes";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { testimonials } from "@/app/api/testimonial";
import Link from "next/link";
import Image from "next/image";
import BookingForm from "@/components/bookingForm";

export default function Details() {
  const { slug } = useParams();

  const item = propertyHomes.find((item) => item.slug === slug);


 const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (data: any) => {
    console.log("Booking Data:", data);
    setIsOpen(false);
  };


  const [newReview, setNewReview] = useState("");
const [newRating, setNewRating] = useState(0);

  const [testimonialsList, setTestimonialsList] = useState(testimonials); // use local state so you can update it immediately

  const handleAddReview = () => {
    if (newReview.trim() === "") return;

    // This simulates adding a new review locally
    const newItem = {
      name: "You",
      image: "/images/default-user.png", // placeholder image or avatar
      review: newReview,
      time: "Just now",
    };

    setTestimonialsList([newItem, ...testimonialsList]); // add to top
    setNewReview(""); // clear textarea
  };

  return (
    <section className="!pt-44 pb-20 relative">
      <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="lg:col-span-8 col-span-12">
            <h1 className="lg:text-52 text-40 font-semibold text-dark dark:text-white">
              {item?.name}
            </h1>
            <div className="flex gap-2.5">
              <Icon
                icon="ph:map-pin"
                width={24}
                height={24}
                className="text-dark/50 dark:text-white/50"
              />
              <p className="text-dark/50 dark:text-white/50 text-xm">
                {item?.location}
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex">
              <div className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8">
                <Icon icon={"solar:bed-linear"} width={20} height={20} />
                <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                  {item?.beds} Bedrooms
                </p>
              </div>
              <div className="flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8">
                <Icon icon={"solar:bath-linear"} width={20} height={20} />
                <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                  {item?.baths} Bathrooms
                </p>
              </div>
              <div className="flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8">
                <Icon
                  icon={"lineicons:arrow-all-direction"}
                  width={20}
                  height={20}
                />
                <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                  {item?.area}m<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-8">
          <div className="lg:col-span-8 col-span-12 row-span-2">
            {item?.images && item?.images[0] && (
              <div className="">
                <Image
                  src={item.images[0]?.src}
                  alt="Main Property Image"
                  width={400}
                  height={500}
                  className="rounded-2xl w-full h-540"
                  unoptimized={true}
                />
              </div>
            )}
          </div>
          <div className="lg:col-span-4 lg:block hidden">
            {item?.images && item?.images[1] && (
              <Image
                src={item.images[1]?.src}
                alt="Property Image 2"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
          <div className="lg:col-span-2 col-span-6">
            {item?.images && item?.images[2] && (
              <Image
                src={item.images[2]?.src}
                alt="Property Image 3"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
          <div className="lg:col-span-2 col-span-6">
            {item?.images && item?.images[3] && (
              <Image
                src={item.images[3]?.src}
                alt="Property Image 4"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-8 col-span-12">
            <h3 className="text-xl font-medium">Property details</h3>
            <div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div>
                  <Image
                    src="/images/SVGs/property-details.svg"
                    width={400}
                    height={500}
                    alt=""
                    className="w-8 h-8 dark:hidden"
                    unoptimized={true}
                  />
                  <Image
                    src="/images/SVGs/property-details-white.svg"
                    width={400}
                    height={500}
                    alt=""
                    className="w-8 h-8 dark:block hidden"
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h3 className="text-dark dark:text-white text-xm">
                    Property details
                  </h3>
                  <p className="text-base text-dark/50 dark:text-white/50">
                    One of the few homes in the area with a private pool.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <Image
                    src="/images/SVGs/smart-home-access.svg"
                    width={400}
                    height={500}
                    alt=""
                    className="w-8 h-8 dark:hidden"
                    unoptimized={true}
                  />
                  <Image
                    src="/images/SVGs/smart-home-access-white.svg"
                    width={400}
                    height={500}
                    alt=""
                    className="w-8 h-8 dark:block hidden"
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h3 className="text-dark dark:text-white text-xm">
                    Smart home access
                  </h3>
                  <p className="text-base text-dark/50 dark:text-white/50">
                    Easily check yourself in with a modern keypad system.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <Image
                    src="/images/SVGs/energyefficient.svg"
                    width={400}
                    height={500}
                    alt=""
                    className="w-8 h-8 dark:hidden"
                    unoptimized={true}
                  />
                  <Image
                    src="/images/SVGs/energyefficient-white.svg"
                    width={400}
                    height={500}
                    alt=""
                    className="w-8 h-8 dark:block hidden"
                    unoptimized={true}
                  />
                </div>
                <div>
                  <h3 className="text-dark dark:text-white text-xm">
                    Energy efficient
                  </h3>
                  <p className="text-base text-dark/50 dark:text-white/50">
                    Built in 2025 with sustainable and smart-home features.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-dark dark:text-white text-xm ">
                Nestled in the heart of miami, the modern luxe villa at 20 s
                aurora ave offers a perfect blend of contemporary elegance and
                smart-home innovation. priced at $570000, this 560 ft² residence
                features 4 spacious bedrooms, 3 luxurious bathrooms, and
                expansive living areas designed for comfort and style. built in
                2025, the home boasts energy-efficient systems, abundant natural
                light, and state-of-the-art security features. outdoor spaces
                include two stylish bar areas, perfect for entertaining 8+
                guests. enjoy the ultimate in modern living with premium
                amenities and a prime location.
              </p>
              <p className="text-dark dark:text-white text-xm ">
                Step inside to discover an open-concept layout that seamlessly
                connects the kitchen, dining, and living spaces. the gourmet
                kitchen is equipped with top-of-the-line appliances, sleek
                cabinetry, and a large island perfect for casual dining or meal
                prep. the sunlit living room offers floor-to-ceiling windows,
                creating a bright and airy atmosphere while providing stunning
                views of the outdoor space.
              </p>
              <p className="text-dark dark:text-white text-xm ">
                The primary suite serves as a private retreat with a spa-like
                ensuite bathroom and a spacious walk-in closet. each additional
                bedroom is thoughtfully designed with comfort and style in mind,
                offering ample space and modern finishes. the home’s three
                bathrooms feature high-end fixtures, custom vanities, and
                elegant tiling.
              </p>
              <p className="text-dark dark:text-white text-xm ">
                Outdoor living is equally impressive, with a beautifully
                landscaped backyard, multiple lounge areas, and two fully
                equipped bar spaces.
              </p>
            </div>
            <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
              <h3 className="text-xl font-medium">What this property offers</h3>
              <div className="grid grid-cols-3 mt-5 gap-6">
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="ph:aperture"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Smart Home Integration
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="ph:chart-pie-slice"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Spacious Living Areas
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="ph:television-simple"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Energy Efficiency
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="ph:sun"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Natural Light
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="ph:video-camera"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Security Systems
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <Icon
                    icon="ph:cloud"
                    width={24}
                    height={24}
                    className="text-dark dark:text-white"
                  />
                  <p className="text-base dark:text-white text-dark">
                    Outdoor Spaces
                  </p>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938779.7831767448!2d71.05098621661072!3d23.20271516446136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e82dd003ff749%3A0x359e803f537cea25!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1715676641521!5m2!1sen!2sin"
              width="1114"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl w-full"
            ></iframe>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
              <h4 className="text-dark text-3xl font-medium dark:text-white">
                {item?.rate}
              </h4>
              <p className="text-sm text-dark/50 dark:text-white">
                Discounted Price
              </p>
              <button
        onClick={() => setIsOpen(true)}
                className="py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer"
              >
                Contact Owner Directly
              </button>
              <div className="absolute right-0 top-4 -z-[1]">
                <Image
                  src="/images/properties/vector.svg"
                  width={400}
                  height={500}
                  alt="vector"
                  unoptimized={true}
                />
              </div>
            </div>
            <div className="mt-6 max-h-96 overflow-y-auto scrollbar-hide flex flex-col gap-4">
             
             <div className="mt-4 p-4 border border-dark/10 dark:border-white/20 rounded-xl bg-white dark:bg-dark/20">
  <textarea
    value={newReview}
    onChange={(e) => setNewReview(e.target.value)}
    placeholder="Write your review..."
    className="w-full p-2 border border-dark/10 dark:border-white/20 rounded mb-2 text-sm text-dark dark:text-white"
    rows={3}
  ></textarea>

  <div className="flex items-center justify-center gap-1 mb-2">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        onClick={() => setNewRating(star)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={star <= newRating ? "#facc15" : "none"}
        stroke="#facc15"
        strokeWidth={2}
        className="w-5 h-5 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z"
        />
      </svg>
    ))}
  </div>

  <button
    onClick={handleAddReview}
    className="w-full bg-primary text-white py-2 rounded hover:bg-dark text-sm"
  >
    Submit Review
  </button>
</div>


              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-xl cursor-pointer border-dark/10 dark:border-white/20 flex flex-col items-center text-center bg-white dark:bg-dark/20 shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="w-12 h-12 rounded-full object-cover mb-2"
                    unoptimized={true}
                  />
                  <h3 className="text-sm font-medium text-dark dark:text-white">
                    {item.name}
                  </h3>
                  <span className="text-[10px] text-dark/50 dark:text-white/50 mb-2">
                    {item.time || "2 days ago"}
                  </span>
                  <p className="text-xs text-dark dark:text-white leading-relaxed">
                    {item.review}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

        <BookingForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        defaultData={{ roomId: "123", hostelId: "456" }}
      />
      
    </section>
  );
}
