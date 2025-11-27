"use client";

import React, { useState } from "react";

const paymentMethods = [
  {
    id: 1,
    type: "Visa",
    lastFour: "4242",
    expiryMonth: 12,
    expiryYear: 2026,
    holderName: "John Doe",
    default: true,
  },
  {
    id: 2,
    type: "Mastercard",
    lastFour: "5555",
    expiryMonth: 8,
    expiryYear: 2025,
    holderName: "John Doe",
    default: false,
  },
];

export function PaymentMethods() {
  const [methods, setMethods] = useState(paymentMethods);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Payment Methods</h2>
        <button className="bg-[#F0BA43] text-[#1D1D1D] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
          + Add Payment Method
        </button>
      </div>

      <div className="space-y-4">
        {methods.map((method) => (
          <div key={method.id} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">{method.type.slice(0, 2)}</span>
                </div>
                <div>
                  <p className="font-semibold">
                    {method.type} ending in {method.lastFour}
                  </p>
                  <p className="text-sm text-gray-600">
                    {method.holderName} • Expires {method.expiryMonth}/{method.expiryYear}
                  </p>
                </div>
              </div>
              {method.default && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded inline-block">
                  Default
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <button className="text-blue-600 font-semibold text-sm hover:underline">
                Edit
              </button>
              <button className="text-red-600 font-semibold text-sm hover:underline">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
