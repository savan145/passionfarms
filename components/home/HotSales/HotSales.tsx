"use client";

import Image from "next/image";

interface HotSaleCard {
  id: string;
  image: string;
  title: string;
  description: string;
  hasYellowBorder?: boolean;
}

export const HotSales = () => {
  const hotSaleItems: HotSaleCard[] = [
    {
      id: "1",
      image: "/images/hot-sales/frosted-donuts.svg",
      title: "Starting $300",
      description: "Level up your mood, Frosted Donuts",
      hasYellowBorder: false,
    },
    {
      id: "2",
      image: "/images/hot-sales/rainbow-inferno.svg",
      title: "Best Sellers in this Season",
      description: "RAINBOW INFERNO",
      hasYellowBorder: false,
    },
    {
      id: "3",
      image: "/images/hot-sales/sherbinskis-joints.png",
      title: "Up to 60% off",
      description: "Trending Sherbinskis Live Rosin Joints",
      hasYellowBorder: true,
    },
  ];

  return (
    <section className="w-full bg-white py-4 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[35px]">
        {/* Section Title */}
        <h2
          className="text-[#1D1D1D] text-2xl lg:text-[28px] font-semibold leading-9 tracking-[-0.02em] text-center mb-8 lg:mb-12"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Hot Sales
        </h2>

        {/* Hot Sales Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {hotSaleItems.map((item) => (
            <div key={item.id} className="group w-full">
              {/* Card Container */}
              <div
                className={`relative w-full h-[280px] sm:h-[320px] lg:h-[350px] rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300 ${"shadow-[0px_1px_4px_rgba(12,12,13,0.1),0px_1px_4px_rgba(12,12,13,0.05)]"} hover:border-2 hover:border-[#F0BA43] hover:shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)]`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.description}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={item.id === "1"}
                  />
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-[20px] left-0 right-0 h-auto sm:h-[68px] bg-white/90 flex items-center justify-center px-4 sm:px-6 py-3 sm:py-0">
                  <div className="text-center w-full">
                    <p
                      className="text-[#1D1D1D] text-sm sm:text-base font-semibold leading-[22px] tracking-[-0.02em] uppercase break-words"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.title}
                      {item.description && (
                        <>
                          <span className="mx-1.5">|</span>
                          {item.description}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
