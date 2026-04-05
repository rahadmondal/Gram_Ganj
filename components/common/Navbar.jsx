"use client";

import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaCross } from "react-icons/fa";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(2); // ডেমো হিসেবে কার্টে ২টি আইটেম আছে ধরে নেওয়া হয়েছে
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Navbar");

  return (
    <>
      <nav className="bg-white border-b-2 border-green-200 sticky top-0 z-100 shadow-sm">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-xl shadow-sm">
              🌿
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-green-800 text-lg">
                {t("brandName")}
              </span>
              <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">
                {t("brandSubName")}
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="flex gap-6 max-[900px]:hidden font-medium text-gray-700">
            <li>
              <Link href="/products" className="nav-link">
                {t("navProducts")}
              </Link>
            </li>
            <li>
              <Link href="/popular" className="nav-link">
                {t("navPopular")}
              </Link>
            </li>
            <li>
              <Link href="/custom" className="nav-link">
                {t("navCustom")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                {t("navAbout")}
              </Link>
            </li>
          </ul>

          {/* Right Side (Cart + Hamburger) */}
          <div className="flex gap-4 items-center">
            {/* Cart Button */}
            <Link
              href="/cart"
              className="bg-green-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1 relative hover:bg-green-800 transition shadow-sm"
            >
              <HiOutlineShoppingCart />

              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <LanguageSwitcher />

            {/* Hamburger Icon (Mobile) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="hidden max-[900px]:flex flex-col gap-1.5 p-1 cursor-pointer"
              aria-label="Open Menu"
            >
              <span className="w-6 h-0.5 bg-green-800 rounded-full"></span>
              <span className="w-6 h-0.5 bg-green-800 rounded-full"></span>
              <span className="w-6 h-0.5 bg-green-800 rounded-full"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Fade Animation */}
      <div
        className={`fixed inset-0 z-200 bg-black/50 backdrop-blur-sm transition-opacity duration-300 min-[900px]:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)} // Background-এ ক্লিক করলে বন্ধ হবে
      >
        {/* Mobile Drawer with Slide-in Animation */}
        <div
          className={`absolute top-0 left-0 w-70 h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Drawer-এর ভেতর ক্লিক করলে যেন বন্ধ না হয়
        >
          {/* Drawer Header (Logo & Close Button) */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
            <span className="font-bold text-green-800 text-lg">
              {t("brandName")}
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-gray-500 hover:text-red-500 transition"
            >
              <FaCross className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto p-4">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/products"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-green-50 hover:text-green-800 transition"
                >
                  {t("navProducts")}
                </Link>
              </li>
              <li>
                <Link
                  href="/popular"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-green-50 hover:text-green-800 transition"
                >
                  {t("navPopular")}
                </Link>
              </li>
              <li>
                <Link
                  href="/custom"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-green-50 hover:text-green-800 transition"
                >
                  {t("navCustom")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-green-50 hover:text-green-800 transition"
                >
                  {t("navAbout")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Optional Footer inside Mobile Menu */}
          <div className="p-4 border-t border-gray-100 text-center text-xs text-gray-400">
            {t("copyright")}
          </div>
        </div>
      </div>
    </>
  );
}
