"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Email submitted:", email);
  };

  return (
    <footer className="w-full bg-[#21465E]">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[73px] py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Address Column */}
          <div>
            <Link href="/" className="block w-[79px] h-[88px] relative mb-6">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p
              className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our Address: California, Oklahoma, and Texas.
            </p>

            {/* Social Media Icons */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#F0BA43] flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
              >
                <Instagram className="w-8 h-8 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#F0BA43] flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
              >
                <Facebook className="w-8 h-8 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#F0BA43] flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#F0BA43] flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
              >
                <Send className="w-8 h-8 text-black" />
              </a>
            </div>

            {/* Second row of social icons */}
            <div className="grid grid-cols-3 gap-4 max-w-[184px]">
              <a
                href="#"
                className="w-10 h-10 bg-[#F0BA43] flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
              >
                <svg
                  className="w-8 h-8 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.544 10.456a3.997 3.997 0 0 0-3.544-2.201 4.001 4.001 0 0 0 0 8.002 3.997 3.997 0 0 0 3.544-2.201H17v2.201a6.003 6.003 0 0 1-7 5.918 6.001 6.001 0 0 1 0-11.838 6.003 6.003 0 0 1 7 5.918v-5.799h-3.456z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#F0BA43] flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
              >
                <Youtube className="w-8 h-8 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#F0BA43] flex items-center justify-center hover:bg-[#F0BA43]/80 transition-colors"
              >
                <Linkedin className="w-8 h-8 text-black" />
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3
              className="text-white text-xl font-semibold leading-9 tracking-[-0.02em] uppercase mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Explore
            </h3>
            <ul className="space-y-0">
              <li>
                <Link
                  href="/shop"
                  className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3
              className="text-white text-xl font-semibold leading-9 tracking-[-0.02em] uppercase mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Information
            </h3>
            <ul className="space-y-0">
              <li>
                <Link
                  href="/tracking"
                  className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="/fda"
                  className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  FDA Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Refund & Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] hover:text-[#F0BA43] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h3
              className="text-white text-xl font-semibold leading-9 tracking-[-0.02em] uppercase mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Sign for Newsletter
            </h3>
            <p
              className="text-white text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] mb-6 max-w-[450px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Join the PASSION FARMS Community Enter your email below to receive
              exclusive news and special offers!
            </p>

            {/* Email Input */}
            <form onSubmit={handleSubmit} className="relative max-w-[450px]">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[55px] bg-white border border-[#BBBBBB] pl-4 pr-[100px] text-[#878787] text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] outline-none"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 w-[97px] h-[55px] bg-[#F0BA43] text-[#1D1D1D] text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] hover:bg-[#F0BA43]/90 transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#F0BA43] h-[70px] flex items-center justify-center">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <p
            className="text-[#1D1D1D] text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] text-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Copyright @ 2025 Passionfarms.org
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/terms"
              className="text-[#1D1D1D] text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] text-center hover:underline"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Terms & Service
            </Link>
            <Link
              href="/privacy"
              className="text-[#1D1D1D] text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] text-center hover:underline"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-[#1D1D1D] text-base lg:text-xl font-normal leading-9 tracking-[-0.02em] text-center hover:underline"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
