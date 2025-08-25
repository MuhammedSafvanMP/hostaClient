"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";
import Image from "next/image";
import BookingForm from "@/components/bookingForm";
import {
  fetchAHostelReviews,
  fetchAHostelRoom,
  postAHostelReviews,
} from "@/api/Api";
import * as Icons from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { formatDistanceToNowStrict, parseISO } from "date-fns";

export default function Details() {
  const { slug } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any>(null);
  const [reviews, setReviews] = useState<any>([]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchAHostelRoom(slug);
        setData(res);
      } catch (err) {
        console.error("Failed to fetch A hostels:", err);
      }
    };

    const loadReviewData = async () => {
      try {
        const res = await fetchAHostelReviews(slug);
        setReviews(res);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };

    loadData();
    loadReviewData();
  }, []);

  if (!data) return <p>Loading...</p>;

  const item = data[0];


  // Component handler
  const handleAddReview = async () => {
    if (newReview.trim() === "") return;

    const newItem = {
      roomId: slug,
      userId: "682aff06f8f939751cf0050c",
      chat: newReview,
    };

    try {
      const response = await postAHostelReviews(newItem);

      if (response.status === 201) {
        setNewReview("");
        await fetchAHostelReviews(slug);
      }
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  return (
    <section className="!pt-44 pb-20 relative">
      <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="lg:col-span-8 col-span-12">
            <h1 className="lg:text-52 text-40 font-semibold text-dark dark:text-white">
              {item?.hostelId?.name}
            </h1>
            <div className="flex gap-2.5">
              <Icon
                icon="ph:map-pin"
                width={24}
                height={24}
                className="text-dark/50 dark:text-white/50"
              />
              <p className="text-dark/50 dark:text-white/50 text-xm">
                {item?.hostelId?.location?.street},{" "}
                {item?.hostelId?.location?.place}
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex">
              {item?.hostelId?.amenities?.slice(0, 2)?.map((amenity: any) => {
                const LucideIcon: any =
                  Icons[amenity.icon as keyof typeof Icons];
                return (
                  <div
                    key={amenity._id}
                    className="flex flex-col gap-1 border-r border-black/10 dark:border-white/20 px-2"
                  >
                    {LucideIcon && (
                      <LucideIcon
                        //  className={`${textColor}`}
                        width={16}
                        height={16}
                      />
                    )}
                    <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                      {amenity.name}
                    </p>
                  </div>
                );
              })}

              <div className="flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8">
                <Icon
                  icon={"lineicons:arrow-all-direction"}
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-8">
          <div className="lg:col-span-8 col-span-12 row-span-2">
            {item?.hostelId?.photos && item?.hostelId?.photos[0] && (
              <div className="">
                <Image
                  src={item?.hostelId?.photos[0]}
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
            {item?.photos && item?.photos[0] && (
              <Image
                src={item.photos[0]}
                alt="Property Image 2"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
          <div className="lg:col-span-2 col-span-6">
            {item?.photos && item?.photos[1] && (
              <Image
                src={item.photos[1]}
                alt="Property Image 3"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
          <div className="lg:col-span-2 col-span-6">
            {item?.photos && item?.photos[2] && (
              <Image
                src={item.photos[2]}
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
              {item?.hostelId?.amenities?.map((amenity: any) => {
                const LucideIcon: any =
                  Icons[amenity.icon as keyof typeof Icons];
                return (
                  <div key={amenity._id} className="flex items-center gap-6">
                    {LucideIcon && <LucideIcon width={16} height={16} />}
                    <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                      {amenity.name}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-dark dark:text-white text-xm ">
                {item?.hostelId?.description}
              </p>
            </div>

            <Tabs
              defaultValue="nearest"
              className="py-8 w-full mt-8 border-t border-dark/5 dark:border-white/15"
            >
              {/* Tab Headers */}
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger className="cursor-pointer" value="transportation">
                  Transportation
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="nearby">
                  Near By
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="restaurants">
                  Restaurants
                </TabsTrigger>
              </TabsList>

              {/* Tab Content */}
              <TabsContent value="transportation" className="p-4">
                <div className="grid grid-cols-3 mt-5 gap-6">
                  {item?.hostelId?.transportation?.map((amenity: any) => {
                    const LucideIcon: any =
                      Icons[amenity.icon as keyof typeof Icons];
                    return (
                      <div
                        key={amenity._id}
                        className="flex items-center gap-2.5"
                      >
                        {LucideIcon && <LucideIcon width={16} height={16} />}
                        <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                          {amenity.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="nearby" className="p-4">
                <div className="grid grid-cols-3 mt-5 gap-6">
                  {item?.hostelId?.nearbyPlaces?.map((amenity: any) => {
                    const LucideIcon: any =
                      Icons[amenity.icon as keyof typeof Icons];
                    return (
                      <div
                        key={amenity._id}
                        className="flex items-center gap-2.5"
                      >
                        {LucideIcon && <LucideIcon width={16} height={16} />}
                        <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                          {amenity.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="restaurants" className="p-4">
                <div className="grid grid-cols-3 mt-5 gap-6">
                  {item?.hostelId?.restaurants?.map((amenity: any) => {
                    const LucideIcon: any =
                      Icons[amenity.icon as keyof typeof Icons];
                    return (
                      <div
                        key={amenity._id}
                        className="flex items-center gap-2.5"
                      >
                        {LucideIcon && <LucideIcon width={16} height={16} />}
                        <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                          {amenity.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>

            <iframe
              src={item?.hostelId?.googleMap}
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

              {reviews?.map((item: any) => (
                <div
                  key={item?._id}
                  className="border p-4 rounded-xl cursor-pointer border-dark/10 dark:border-white/20 flex flex-col items-center text-center bg-white dark:bg-dark/20 shadow-sm"
                >
                  <Image
                    src={item?.userId?.image}
                    alt={item?.userId?.name}
                    width={400}
                    height={400}
                    className="w-12 h-12 rounded-full object-cover mb-2"
                    unoptimized={true}
                  />
                  <h3 className="text-sm font-medium text-dark dark:text-white">
                    {item?.userId?.name}
                  </h3>
                  <span className="text-[10px] text-dark/50 dark:text-white/50 mb-2">
                    {formatDistanceToNowStrict(parseISO(item?.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                  <p className="text-xs text-dark dark:text-white leading-relaxed">
                    {item?.chat}
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
         roomId = {slug} hostelId = {item?.hostelId?._id} 
      />
    </section>
  );
}
