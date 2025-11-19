"use client";

import Image from "next/image";

interface Store {
  id: string;
  name: string;
  logo: string;
  banner: string;
  productsCount: string;
  deliveryTime: string;
}

export const FeaturedStore = () => {
  const stores: Store[] = [
    {
      id: "1",
      name: "TRAP'D OUT JEFFREY",
      logo: "/images/stores/trapd-out-jeffrey-logo.jpg",
      banner: "/images/stores/trapd-out-jeffrey-banner.jpg",
      productsCount: "15,000",
      deliveryTime: "12 minutes",
    },
    {
      id: "2",
      name: "ELYxr",
      logo: "/images/stores/elyxr-logo.jpg",
      banner: "/images/stores/elyxr-banner.jpg",
      productsCount: "18,522",
      deliveryTime: "12 minutes",
    },
    {
      id: "3",
      name: "Budding Blooms",
      logo: "/images/stores/budding-blooms-logo.jpg",
      banner: "/images/stores/budding-blooms-banner.jpg",
      productsCount: "20,000",
      deliveryTime: "12 minutes",
    },
    {
      id: "4",
      name: "Joint venture",
      logo: "/images/stores/joint-venture-logo.jpg",
      banner: "/images/stores/joint-venture-banner.jpg",
      productsCount: "10,000",
      deliveryTime: "12 minutes",
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
          Featured Store
        </h2>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {stores.map((store) => (
            <div
              key={store.id}
              className="w-full max-w-[328px] mx-auto h-[239px] bg-[#F6F6F6] rounded-[10px] shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              {/* Banner Image */}
              <div className="relative w-full h-[94px]">
                <Image
                  src={store.banner}
                  alt={`${store.name} banner`}
                  fill
                  className="object-cover"
                  sizes="328px"
                />
              </div>

              {/* Store Logo - Overlapping */}
              <div className="relative -mt-[44px] ml-[28px] w-[88px] h-[88px] rounded-full overflow-hidden border-4 border-white shadow-md z-10">
                <Image
                  src={store.logo}
                  alt={`${store.name} logo`}
                  fill
                  className="object-cover"
                  sizes="88px"
                />
              </div>

              {/* Store Info */}
              <div className="px-6 pt-3 pb-4">
                <h3
                  className="text-[#000000] text-base font-semibold leading-[22px] tracking-[-0.02em] uppercase mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {store.name}
                </h3>
                <p
                  className="text-[#1D1D1D] text-base font-normal leading-[22px] tracking-[-0.02em] mb-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Sale {store.productsCount} Products
                </p>
                <div className="flex items-center gap-2">
                  {/* Yellow Dot Indicator */}
                  <div className="w-[14px] h-[14px] bg-[#F0BA43] rounded-full flex items-center justify-center">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L3 6L7 2"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-[#1D1D1D] text-base font-normal leading-[22px] tracking-[-0.02em]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Delivery in {store.deliveryTime}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
