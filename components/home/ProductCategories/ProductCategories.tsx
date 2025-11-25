"use client";

import Image from "next/image";
import Link from "next/link";

export const ProductCategories = () => {
  const categories = [
    {
      name: "Prerolls",
      image: "/images/categories/prerolls.svg",
      href: "/categories/prerolls",
    },
    {
      name: "Edibels",
      image: "/images/categories/Edibels.svg",
      href: "/categories/edibels",
    },
    {
      name: "Disposables",
      image: "/images/categories/disposables.svg",
      href: "/categories/disposables",
    },
    {
      name: "Bulk Flowers",
      image: "/images/categories/bulk-flowers.svg",
      href: "/categories/bulk-flowers",
    },
    {
      name: "Cartridge",
      image: "/images/categories/cartridge.svg",
      href: "/categories/cartridge",
    },
    {
      name: "Moonrocks",
      image: "/images/categories/moonrocks.svg",
      href: "/categories/moonrocks",
    },
    {
      name: "Deals",
      image: "/images/categories/deals.svg",
      href: "/categories/deals",
    },
  ];

  return (
    <section className="w-full bg-white py-4 sm:py-6 lg:py-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-11">
        {/* Categories - Scrollable on Mobile, Grid on Desktop */}

        {/* Mobile Horizontal Scroll View (hidden on lg and up) */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 sm:gap-6 px-2 sm:px-0 snap-x snap-mandatory">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex flex-col items-center group flex-shrink-0 snap-start"
                style={{
                  paddingLeft: index === 0 ? "0.5rem" : "0",
                  paddingRight:
                    index === categories.length - 1 ? "0.5rem" : "0",
                }}
              >
                {/* Circle Container */}
                <div className="relative w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] mb-2 sm:mb-3">
                  {/* Yellow Circle Background */}
                  <div className="absolute inset-0 rounded-full bg-[#F0BA43] shadow-[0px_8px_32px_rgba(5,6,15,0.08)] active:scale-95 transition-transform duration-200"></div>

                  {/* Product Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[95px] h-[95px] sm:w-[110px] sm:h-[110px]">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-contain"
                        priority={index < 4}
                      />
                    </div>
                  </div>
                </div>

                {/* Category Name */}
                <span
                  className="text-[#1D1D1D] text-xs sm:text-sm font-normal leading-tight sm:leading-9 tracking-[-0.02em] text-center whitespace-nowrap max-w-[90px] sm:max-w-none"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Grid View (hidden on lg below) */}
        <div className="hidden lg:flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 pt-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center group"
            >
              {/* Circle Container */}
              <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mb-3 sm:mb-4">
                {/* Yellow Circle Background */}
                <div className="absolute inset-0 rounded-full bg-[#F0BA43] shadow-[0px_10px_48px_rgba(5,6,15,0.1)] group-hover:scale-105 transition-transform duration-300"></div>

                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px]">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Category Name */}
              <span
                className="text-[#1D1D1D] text-sm sm:text-base font-normal leading-9 tracking-[-0.02em] text-center group-hover:text-[#F0BA43] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Scrollbar Hide Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Smooth scroll behavior for mobile */
        @media (max-width: 1023px) {
          .scrollbar-hide {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
};
