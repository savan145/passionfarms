"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, User, MapPin, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full bg-[#21465E] py-3 sm:py-4 lg:py-0 lg:h-[80px] relative">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-11 relative h-full">
        <div className="flex items-center lg:h-full gap-2 sm:gap-3 lg:gap-0">
          {/* Logo */}
          <Link
            href="/"
            className="block w-[45px] h-[50px] sm:w-[50px] sm:h-[56px] lg:w-[79px] lg:h-[88px] relative flex-shrink-0 lg:mr-6"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Search Bar */}
          <div className="flex flex-1 h-[44px] sm:h-[48px] lg:h-[54px] bg-[#F5F5F5] rounded-[42px] items-center px-4 sm:px-5 lg:px-6 lg:max-w-[907px]">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#878787] flex-shrink-0" />
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-[#878787] placeholder:text-[#878787] text-xs sm:text-sm lg:text-base px-2 sm:px-3 lg:px-4 font-normal tracking-[-0.02em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3 lg:ml-auto">
            {/* Language */}
            <span
              className="text-white text-xs sm:text-sm lg:text-base font-medium tracking-[-0.02em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              EN
            </span>

            {/* Location Icon */}
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />

            {/* Cart Button */}
            <button
              className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[54px] lg:h-[54px] bg-white rounded-[8px] sm:rounded-[10px] flex items-center justify-center hover:bg-white/90 transition-colors border-2 border-[#2B2E83]"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-[#2B2E83]" />
            </button>

            {/* Profile Button */}
            <button
              className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[54px] lg:h-[54px] bg-white rounded-[8px] sm:rounded-[10px] flex items-center justify-center hover:bg-white/90 transition-colors border border-black"
              aria-label="User profile"
            >
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
