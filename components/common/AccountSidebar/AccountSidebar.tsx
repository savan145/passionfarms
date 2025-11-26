"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const accountLinks = [
  { href: "/account/dashboard", label: "Dashboard" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/addresses", label: "Addresses" },
  { href: "/account/payment-methods", label: "Payment Methods" },
  { href: "/account/wishlist", label: "Wishlist" },
  { href: "/account/gift-cards", label: "Gift Cards" },
  { href: "/account/privacy", label: "Privacy & Security" },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white rounded-lg shadow p-4">
      <ul className="space-y-2">
        {accountLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "block px-4 py-2 rounded transition-colors",
                pathname === link.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
