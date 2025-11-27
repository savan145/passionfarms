"use client";

import React, { useState } from "react";

const addressesData = [
  {
    id: 1,
    type: "Home",
    name: "John Doe",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
    phone: "+1 (555) 123-4567",
    default: true,
  },
  {
    id: 2,
    type: "Office",
    name: "John Doe",
    address: "456 Business Ave",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    country: "USA",
    phone: "+1 (555) 987-6543",
    default: false,
  },
];

export function Addresses() {
  const [addresses, setAddresses] = useState(addressesData);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Addresses</h2>
        <button className="bg-[#F0BA43] text-[#1D1D1D] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
          + Add Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <div key={addr.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm font-semibold text-gray-600">{addr.type}</p>
                <p className="font-bold text-lg">{addr.name}</p>
              </div>
              {addr.default && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  Default
                </span>
              )}
            </div>
            <div className="text-sm text-gray-600 space-y-1 mb-4">
              <p>{addr.address}</p>
              <p>
                {addr.city}, {addr.state} {addr.zip}
              </p>
              <p>{addr.country}</p>
              <p>{addr.phone}</p>
            </div>
            <div className="flex gap-2">
              <button className="text-blue-600 font-semibold text-sm hover:underline">
                Edit
              </button>
              <button className="text-red-600 font-semibold text-sm hover:underline">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
