"use client";

import React from "react";

export function GiftCards() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gift Cards & Coupons</h2>
        <button className="bg-[#F0BA43] text-[#1D1D1D] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
          + Redeem Code
        </button>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Active Gift Cards</h3>
          <p className="text-gray-600 mb-4">You have no active gift cards</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Coupons</h3>
          <p className="text-gray-600 mb-4">You have no active coupons</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">How it works</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Purchase gift cards and send them to friends or family</li>
            <li>• Redeem coupons and discount codes at checkout</li>
            <li>• Gift cards and coupons will be applied automatically</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
