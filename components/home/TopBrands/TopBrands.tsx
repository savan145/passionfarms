"use client";

import Image from "next/image";

export interface Brand {
  id: string;
  name: string;
  logo: string;
  width: number;
  height: number;
}

export interface TopBrandsProps {
  title?: string;
  brands?: Brand[];
  sectionClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  brandGridClassName?: string;
  showDividers?: boolean;
}

export const TopBrands = ({
  title = "Top Brands",
  brands = [
    {
      id: "1",
      name: "Kushable",
      logo: "/images/brands/kushable.svg",
      width: 198,
      height: 43,
    },
    {
      id: "2",
      name: "Clangestino",
      logo: "/images/brands/clangestino.svg",
      width: 136,
      height: 113,
    },
    {
      id: "3",
      name: "Brand 3",
      logo: "/images/brands/brand3.svg",
      width: 97,
      height: 141,
    },
    {
      id: "4",
      name: "High Country",
      logo: "/images/brands/highcountry.svg",
      width: 95,
      height: 110,
    },
    {
      id: "5",
      name: "Lucky Leaf Co",
      logo: "/images/brands/luckyleafco.svg",
      width: 104,
      height: 104,
    },
    {
      id: "6",
      name: "Weed",
      logo: "/images/brands/weed.svg",
      width: 159,
      height: 45,
    },
    {
      id: "7",
      name: "Sour Cream",
      logo: "/images/brands/sourcream.svg",
      width: 128,
      height: 107,
    },
  ],
  sectionClassName = "w-full bg-white py-12 lg:py-16 relative",
  containerClassName = "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[35px]",
  titleClassName = "text-[#1D1D1D] text-2xl lg:text-[28px] font-semibold leading-9 tracking-[-0.02em] text-center mb-12",
  brandGridClassName = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 lg:gap-8 items-center justify-center",
  showDividers = true,
}: TopBrandsProps) => {
  return (
    <section className={sectionClassName}>
      {/* Top Divider */}
      {showDividers && (
        <div className="absolute top-0 left-0 right-0 border-t border-[#E8E8E8]" />
      )}

      <div className={containerClassName}>
        {/* Section Title */}
        <h2
          className={titleClassName}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {title}
        </h2>

        {/* Brands Grid - Scrollable on Mobile, Grid on Desktop */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6">
          <div className="flex gap-6 px-4 sm:px-6 pb-2">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex items-center justify-center flex-shrink-0 w-[150px] sm:w-[180px] h-[120px]"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    quality={100}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className={`hidden lg:grid ${brandGridClassName}`}>
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center h-full w-full min-h-[120px]"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      {showDividers && (
        <div className="absolute bottom-0 left-0 right-0 border-b border-[#E8E8E8]" />
      )}
    </section>
  );
};
