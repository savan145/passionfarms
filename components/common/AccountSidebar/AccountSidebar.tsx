"use client";

import React from "react";
import { cn } from "@/lib/utils";

const accountLinks = [
  { id: "dashboard", label: "Dashboard" },
  { id: "orders", label: "Orders" },
  { id: "addresses", label: "Addresses" },
  { id: "paymentMethods", label: "Payment Methods" },
  { id: "wishlist", label: "Wishlist" },
  { id: "giftCards", label: "Gift Cards" },
  { id: "privacy", label: "Privacy & Security" },
];

interface AccountSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function AccountSidebar({ activeTab, onTabChange }: AccountSidebarProps) {
  return (
    <ul className="space-y-2">
      {accountLinks.map((link) => (
        <li key={link.id}>
          <button
            onClick={() => onTabChange(link.id)}
            className={cn(
              "w-full text-left px-4 py-2 rounded-[10px] transition-colors border border-[#bbbbbb]",
              activeTab === link.id
                ? "bg-[#F0BA43] border-[#f0ba43] text-white"
                : "hover:bg-gray-100"
            )}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  );
}