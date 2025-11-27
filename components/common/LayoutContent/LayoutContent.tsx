"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/common/Navigation";

export const LayoutContent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  return (
    <>
      {/* Join Banner - Homepage Mobile Only */}
      {isHomepage && (
        <div className="w-full bg-[#F0BA43] py-3 lg:hidden">
          <div className="max-w-[1440px] mx-auto px-4">
            <p
              className="text-center text-base sm:text-lg font-medium tracking-[-0.02em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span className="text-[#1D1D1D]">Join </span>
              <span className="text-white">Passion farms !</span>
            </p>
          </div>
        </div>
      )}
      {/* Navigation - Homepage Only */}
      {isHomepage && <Navigation />}
      {children}
    </>
  );
};
