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
    {
      id: "3",
      image: "/images/deals/featured_deal_1.jpg",
    },
    {
      id: "4",
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
    <section className="w-full bg-white py-6 lg:py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[35px]">
        {/* Section Title */}
        <h2
          className="text-[#1D1D1D] text-2xl lg:text-[28px] font-semibold leading-9 tracking-[-0.02em] text-center mb-8 lg:mb-12"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Featured Deals of the day
        </h2>

        {/* Mobile: Single Image Slider */}
        <div className="lg:hidden relative max-w-[675px] mx-auto">
          <div className="overflow-hidden rounded-[10px] shadow-[0px_10px_48px_rgba(5,6,15,0.1)]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {deals.map((deal) => (
                <div
                  key={deal.id}
                  className="w-full h-[409px] flex-shrink-0 relative cursor-pointer"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={deal.image}
                      alt={`Featured Deal ${deal.id}`}
                      fill
                      className="object-cover"
                      sizes="675px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
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

          {/* Right Arrow */}
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

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {deals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#F0BA43] w-6" : "bg-[#BBBBBB]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 2 Images Side by Side with Slider */}
        <div className="hidden lg:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-5"
              style={{
                transform: `translateX(-${currentIndex * (100 / 2 + 2.5)}%)`,
              }}
            >
              {deals.map((deal, index) => (
                <div
                  key={deal.id}
                  className="w-[calc(50%-10px)] flex-shrink-0 h-[409px] rounded-[10px] shadow-[0px_10px_48px_rgba(5,6,15,0.1)] overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 relative"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={deal.image}
                      alt={`Featured Deal ${deal.id}`}
                      fill
                      className="object-cover"
                      sizes="675px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow - Desktop */}
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

          {/* Right Arrow - Desktop */}
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
        </div>
      </div>
    </section>
  );
};
