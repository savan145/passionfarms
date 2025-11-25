"use client";

import Image from "next/image";

interface Offer {
  id: string;
  image: string;
}

export const SpecialOffers = () => {
  const offers: Offer[] = [
    {
      id: "1",
      image: "/images/offers/spon-5.jpg",
    },
    {
      id: "2",
      image: "/images/offers/spon-3.jpg",
    },
    {
      id: "3",
      image: "/images/offers/spon-2.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[35px]">
        {/* Section Title */}
        <h2
          className="text-[#1D1D1D] text-2xl lg:text-[28px] font-semibold leading-9 tracking-[-0.02em] text-center mb-8 lg:mb-12"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Special offers
        </h2>

        {/* Offers Grid - Scrollable on Mobile, Grid on Desktop */}
        {/* Mobile Scrollable View */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6">
          <div className="flex gap-4 px-4 sm:px-6 pb-2">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="w-[280px] sm:w-[350px] h-[350px] flex-shrink-0 rounded-[10px] shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)] overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={offer.image}
                    alt={`Special Offer ${offer.id}`}
                    fill
                    className="object-cover"
                    sizes="350px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="w-full max-w-[443px] mx-auto h-[350px] rounded-[10px] shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)] overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-full">
                <Image
                  src={offer.image}
                  alt={`Special Offer ${offer.id}`}
                  fill
                  className="object-cover"
                  sizes="443px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
