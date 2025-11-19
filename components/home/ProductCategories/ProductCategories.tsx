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
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-11">
        {/* Categories Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {categories.map((category, index) => (
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
    </section>
  );
};
