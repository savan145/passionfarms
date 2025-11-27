"use client";

import React from "react";

interface OrderItem {
    name: string;
    qty: number;
    price: string;
}

interface Order {
    id: number;
    orderNumber: string;
    date: string;
    total: string;
    status: string;
    items: OrderItem[];
}

interface OrderDetailsProps {
    order: Order;
    onBack: () => void;
}

export function OrderDetails({ order }: OrderDetailsProps) {
    return (
        <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold">Order Details</h2>
                </div>

                <div className="flex items-center gap-4">
                    <button className="border border-gray-300 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-50">
                        View Order
                    </button>
                    <button className="bg-amber-400 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-amber-500">
                        View Invoice
                    </button>
                </div>
            </div>

            {/* Order Info Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 font-semibold">Date ordered</p>
                    <p className="text-lg font-bold mt-2">{order.date}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 font-semibold">Order Number</p>
                    <p className="text-lg font-bold mt-2">{order.orderNumber}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 font-semibold">Total Amount</p>
                    <p className="text-lg font-bold mt-2">{order.total}</p>
                </div>
            </div>

            {/* Items */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-4">Order Items</h3>

                {order.items.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">No items in this order.</div>
                ) : (
                    <div className="space-y-4">
                        {order.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg"
                            >
                                {/* Product Image Placeholder */}
                                <div className="w-20 h-20 bg-gray-100 rounded-lg shrink-0" />

                                {/* Product Details */}
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Cherry Garcia is a crowd favorite! Smooth, smooth, smooth. Expect a blend of cherry and creamy berry notes in the finish, rounded by earthy undertones that linger pleasantly.
                                    </p>

                                    {/* Delivery Status */}
                                    <div className="flex items-center gap-2 mt-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <p className="text-sm text-green-600 font-semibold">
                                            Delivered on 12/11/2025
                                        </p>
                                    </div>
                                </div>

                                {/* Quantity and Price */}
                                <div className="text-right shrink-0">
                                    <p className="text-lg font-bold">{item.price}</p>
                                    <p className="text-sm text-gray-600 mt-1">x{item.qty}</p>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col gap-2 mt-3">
                                        <button className="text-amber-500 hover:underline font-semibold text-sm">
                                            View Product
                                        </button>
                                        <button className="text-amber-500 hover:underline font-semibold text-sm">
                                            Buy again
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Empty State if no items */}
            {order.items.length === 0 && (
                <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                    <p className="text-gray-500 font-semibold">No more results to display</p>
                </div>
            )}
        </div>
    );
}
