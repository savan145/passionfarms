"use client";

import { useState } from "react";
import { ProductCard } from "@/components/common/Card";

export const AvailableNow = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Products" },
    { id: "new", label: "New Arrivals" },
    { id: "best", label: "Best Sellers" },
    { id: "sale", label: "Sale Items" },
  ];

  // Sample product data - replace with your actual data
  const products = [
    {
      id: "1",
      image: "/images/products/placeholder.svg",
      category: "Bulk Flowers",
      title: "Cherry Garcia",
      price: 1075.0,
      rating: 4.4,
    },
    {
      id: "2",
      image: "/images/products/placeholder.svg",
      category: "Disposables",
      title: "2g Dual Chamber Plume dispose (Authentic)",
      price: 1075.0,
      rating: 4.4,
      featured: true, // This product has yellow border
    },
    {
      id: "3",
      image: "/images/products/placeholder.svg",
      category: "Prerolls",
      title: "Sherbinski live resin joints",
      price: 200.0,
      rating: 4.4,
    },
    {
      id: "4",
      image: "/images/products/placeholder.svg",
      category: "Edibles",
      title: "UGI Cannabis Infused Gummies",
      price: 200.0,
      rating: 4.4,
      isFavorite: true,
    },
    {
      id: "5",
      image: "/images/products/placeholder.svg",
      category: "Bulk Flowers",
      title: "Cherry Garcia",
      price: 1075.0,
      rating: 4.4,
    },
    {
      id: "6",
      image: "/images/products/placeholder.svg",
      category: "Disposables",
      title: "2g Dual Chamber Plume dispose (Authentic)",
      price: 1075.0,
      rating: 4.4,
    },
    {
      id: "7",
      image: "/images/products/placeholder.svg",
      category: "Prerolls",
      title: "Sherbinski live resin joints",
      price: 200.0,
      rating: 4.4,
    },
    {
      id: "8",
      image: "/images/products/placeholder.svg",
      category: "Edibles",
      title: "UGI Cannabis Infused Gummies",
      price: 400.0,
      rating: 4.4,
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[35px]">
        {/* Section Title */}
        <h2
          className="text-[#1D1D1D] text-2xl lg:text-[28px] font-semibold leading-9 tracking-[-0.02em] text-center mb-6"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Available Now
        </h2>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 lg:mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`min-w-[118px] h-9 px-4 rounded-[40px] text-base font-normal leading-9 tracking-[-0.02em] transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#F0BA43] text-[#1D1D1D] shadow-[0px_10px_48px_rgba(5,6,15,0.1)]"
                  : "bg-white text-[#1D1D1D] border border-[rgba(187,187,187,0.73)]"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-[20px] mb-8">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard
                id={product.id}
                image={product.image}
                category={product.category}
                title={product.title}
                price={product.price}
                rating={product.rating}
                isFavorite={product.isFavorite}
                onAddToCart={() => console.log(`Add to cart: ${product.id}`)}
                onToggleFavorite={() =>
                  console.log(`Toggle favorite: ${product.id}`)
                }
              />
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-end">
          <button
            className="min-w-[200px] h-[50px] px-8 bg-[#F0BA43] rounded-[40px] text-[#1D1D1D] text-base font-medium leading-9 tracking-[-0.02em] hover:bg-[#F0BA43]/90 transition-colors shadow-[0px_10px_48px_rgba(5,6,15,0.1)]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            View all products
          </button>
        </div>
      </div>
    </section>
  );
};
