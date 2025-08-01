"use client";

import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="!py-0">
      <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68">
          <div className="relative text-white dark:text-dark text-center md:text-start z-10">
            <p className="text-inherit text-xm font-medium">
              Find your happy place ?
            </p>
            <h1 className="text-inherit text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-10">
              safe, comfy, and hassle? free stays!
            </h1>

            {/* ✅ Beautiful Search Filter */}
            <form className="w-full max-w-3xl mx-auto md:mx-0">
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

          <div className="hidden md:block absolute -top-2 -right-68">
            <Image
              src={"/images/hero/heroBanner.png"}
              alt="heroImg"
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
