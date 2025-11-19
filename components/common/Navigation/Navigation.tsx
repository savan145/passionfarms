"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Close mobile menu when route changes
  // Using useEffect with cleanup pattern to avoid cascading renders
  useEffect(() => {
    // Reset menu states on route change
    return () => {
      setIsMobileMenuOpen(false);
      setIsCategoriesOpen(false);
    };
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Forum", href: "/forum" },
    { name: "Contact Us", href: "/contact" },
  ];

  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-11">
        <div className="flex items-center justify-center h-[50px] sm:h-[54px] gap-4 md:gap-8 xl:gap-12 relative">
          {/* Browse All Categories - Desktop */}
          <div className="hidden lg:block absolute left-0">
            <button
              className="flex items-center gap-2 text-[#1D1D1D] text-sm xl:text-base font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors whitespace-nowrap"
              style={{ fontFamily: "Inter, sans-serif" }}
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <Menu className="w-5 h-5 xl:w-6 xl:h-6 text-[#0C0310]" />
              <span>Browse All Categories</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isCategoriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Categories Dropdown - Desktop */}
            {isCategoriesOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsCategoriesOpen(false)}
                />
                <div className="absolute top-full left-0 mt-2 w-56 xl:w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {categories.map((category, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-[#1D1D1D] text-sm xl:text-base hover:bg-gray-50 hover:text-[#F0BA43] transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsCategoriesOpen(false);
                        }}
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center gap-1.5 sm:gap-2 text-[#1D1D1D] text-xs sm:text-sm font-normal absolute left-0 hover:text-[#F0BA43] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#0C0310]" />
            <span>Menu</span>
          </button>

          {/* Navigation Links - Desktop - Centered */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[#1D1D1D] text-sm xl:text-base leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors whitespace-nowrap"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: isActive(link.href) ? 600 : 400,
                }}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute -bottom-[17px] sm:-bottom-[18px] left-1/2 -translate-x-1/2 w-[60px] xl:w-[70px] h-1 bg-[#F0BA43] rounded-[10px] shadow-[0px_10px_48px_rgba(5,6,15,0.1)]" />
                )}
              </Link>
            ))}
          </div>

          {/* Spacer for mobile to keep centered layout */}
          <div className="lg:hidden w-4 sm:w-5" />
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3 sm:py-4 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-2 sm:space-y-3">
              {/* Browse Categories - Mobile */}
              <button
                className="text-left px-3 sm:px-4 py-2 text-[#1D1D1D] text-xs sm:text-sm font-normal hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                Browse All Categories
                <ChevronDown
                  className={`inline w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 transition-transform ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Categories Submenu - Mobile */}
              {isCategoriesOpen && (
                <div className="ml-3 sm:ml-4 space-y-1.5 sm:space-y-2 animate-fadeIn">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-600 hover:bg-gray-50 hover:text-[#F0BA43] rounded transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        setIsCategoriesOpen(false);
                      }}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}

              {/* Navigation Links - Mobile */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between px-3 sm:px-4 py-2 text-[#1D1D1D] text-xs sm:text-sm hover:bg-gray-50 hover:text-[#F0BA43] rounded transition-colors"
                  style={{
                    fontWeight: isActive(link.href) ? 600 : 400,
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  {isActive(link.href) && (
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#F0BA43] rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};
