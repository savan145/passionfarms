"use client";

import React from "react";

const wishlistItems = [
  {
    id: 1,
    name: "Cherry Garcia",
    price: "$1,000.00",
    image: "/images/categories/bigflower.png",
    inStock: true,
  },
  {
    id: 2,
    name: "Italian Ice",
    price: "$500.00",
    image: "/images/categories/canphoto.jpg",
    inStock: true,
  },
  {
    id: 3,
    name: "Sherbinski live resin joints",
    price: "$1,500.00",
    image: "/images/categories/shakker.png",
    inStock: false,
  },
];

export function Wishlist() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Your wishlist is empty</p>
          <a href="#" className="text-yellow-600 font-semibold hover:underline">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.price}</p>
                <p className="text-xs text-gray-500">
                  {item.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  disabled={!item.inStock}
                  className="bg-[#F0BA43] text-[#1D1D1D] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add to Cart
                </button>
                <button className="text-red-600 font-semibold text-sm hover:underline">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
