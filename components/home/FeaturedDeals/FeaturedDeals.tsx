"use client";

import { useState } from "react";
import Image from "next/image";

interface Deal {
  id: string;
  image: string;
}

export const FeaturedDeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const deals: Deal[] = [
    {
      id: "1",
      image: "/images/deals/featured_deal_1.jpg",
    },
    {
      id: "2",
      image: "/images/deals/featured_deal_2.jpg",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? deals.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === deals.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[35px]">
        {/* Section Title */}
        <h2
          className="text-[#1D1D1D] text-2xl lg:text-[28px] font-semibold leading-9 tracking-[-0.02em] text-center mb-8 lg:mb-12"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Featured Deals of the day
        </h2>

        {/* Deals Container */}
        <div className="relative">
          {/* Deals Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Deal Card 1 */}
            <div className="w-full max-w-[675px] mx-auto h-[409px] rounded-[10px] shadow-[0px_10px_48px_rgba(5,6,15,0.1)] overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 relative">
              {/* Left Arrow - Inside first image */}
              <button
                onClick={handlePrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-[38px] h-[38px] bg-white rounded-full shadow-[0px_10px_48px_rgba(5,6,15,0.1)] flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous deal"
              >
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path
                    d="M2 2L8 7.5L2 13"
                    stroke="#343233"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="relative w-full h-full">
                <Image
                  src={deals[0].image}
                  alt="Featured Deal 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 675px"
                />
              </div>
            </div>

            {/* Deal Card 2 */}
            <div className="w-full max-w-[675px] mx-auto h-[409px] rounded-[10px] shadow-[0px_10px_48px_rgba(5,6,15,0.1)] overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 relative">
              {/* Right Arrow - Inside second image */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-[38px] h-[38px] bg-white rounded-full shadow-[0px_10px_48px_rgba(5,6,15,0.1)] flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next deal"
              >
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L8 7.5L2 13"
                    stroke="#343233"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="relative w-full h-full">
                <Image
                  src={deals[1].image}
                  alt="Featured Deal 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 675px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
