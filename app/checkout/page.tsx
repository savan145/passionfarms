"use client";

import React from "react";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";

export default function CheckoutPage() {
  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ];

  const companyOptions = [
    { value: "none", label: "-- None --" },
    { value: "acme", label: "ACME Co." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: form (50%) */}
        <div className="space-y-6">


          {/* All form details in one box */}
          <div className="bg-white rounded-lg shadow p-6">
            {/* Payment methods */}
            <div className="mb-6 pb-6 ">
              {/* Top banner / photo area */}
              <div className="w-full h-48 rounded-lg overflow-hidden  flex items-center justify-center">
                <div className="w-full max-w-4xl px-4">
                  <div className="flex gap-4 items-center">
                    <div className="flex-1 flex items-center justify-center border border-gray-200 rounded-lg p-3 bg-white">
                      <img src="/images/categories/googlepay.png" alt="G Pay" className="h-8 md:h-10 object-contain" />
                    </div>

                    <div className="flex-1 flex items-center justify-center border border-gray-200 rounded-lg p-3 bg-white">
                      <img src="/images/categories/paypal.png" alt="PayPal" className="h-8 md:h-10 object-contain" />
                    </div>

                    <div className="flex-1 flex items-center justify-center border border-gray-200 rounded-lg p-3 bg-white">
                      <img src="/images/categories/amazonpay.png" alt="Amazon Pay" className="h-8 md:h-10 object-contain" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b mt-2">
                <div className="text-center text-sm text-gray-400">or</div>
              </div>
            </div>

            {/* Contact information */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Contact information</h3>
              <a href="/account/login" className="text-sm text-blue-600 hover:underline">Already have an account? Login</a>
            </div>

            <div className="space-y-4 mb-6">
              <Input label="Email" placeholder="Email" type="email" className="!w-[560px]" />
              <div className="flex items-center">
                <input type="checkbox" id="newsletter" className="mr-2" />
                <label htmlFor="newsletter" className="text-sm text-gray-600">Keep me up to date on news and exclusive offers</label>
              </div>
            </div>


            {/* Divider */}

            {/* Shipping address */}
            <h3 className="text-lg font-semibold mb-4">Shipping address</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input placeholder="First name" className="!md:w-[305px]" />
                </div>
                <div className="flex-1">
                  <Input placeholder="Last name" className="!md:w-[305px]" />
                </div>
              </div>


              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <Input placeholder="Address 1" className="w-full" />
                </div>
                <div className="flex-1">
                  <Input placeholder="Address 2" className="w-full" />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Select options={countryOptions} placeholder="Select a country" />
                </div>
                <div className="flex-1">
                  <Input placeholder="City" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <Input placeholder="Postal code" className="!w-[560px]" />
                </div>

              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <Select className="w-full" options={companyOptions} />
                </div>
                <div className="flex-1">
                  <Input placeholder="Phone" className="w-full" />
                </div>
              </div>

              <textarea placeholder="Additional information" rows={5} className="border rounded-[10px] border-gray-100" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <a href="/cart" className="inline-flex items-center gap-2 text-sm text-gray-700">
              ← Return to Cart
            </a>

            <button className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold">
              Place an Order →
            </button>
          </div>
        </div>

        {/* Right: order summary (50%) */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Your order</h2>

            <div className="space-y-3 mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 border rounded-md p-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-md" />
                  <div className="flex-1">
                    <div className="font-medium">Product name</div>
                    <div className="text-sm text-gray-500">x1</div>
                  </div>
                  <div className="font-medium">$1,075.00</div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Input placeholder="Enter coupon code" />
              <button className="px-4 bg-amber-400 text-white rounded-md hover:bg-amber-500">Apply</button>
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between text-sm text-gray-600">
                <div>Subtotal</div>
                <div>$3,225.00</div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <div>Shipping</div>
                <div>—</div>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-3">
                <div>Total</div>
                <div>$3,225.00</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
