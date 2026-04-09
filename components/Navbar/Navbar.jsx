"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { NAV_LINKS } from "./navData";
import Logo from "./Logo";
import AuthButton from "./AuthButton";
import CartButton from "./CartButton";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    const t = useTranslations("Navbar");
    const [cartCount, setCartCount] = useState(2);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="bg-white border-b-2 border-green-200 sticky top-0 z-[100] shadow-sm">
                <div className="container mx-auto px-4 flex items-center justify-between h-16">

                    {/* 1. Logo Section */}
                    <Logo />

                    {/* 2. Desktop Navigation */}
                    <ul className="flex gap-6 max-[900px]:hidden font-medium text-gray-700 items-center">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:text-green-700 transition">
                                    {t(link.labelKey)}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* 3. Right Side Actions (Reordered) */}
                    <div className="flex gap-3 sm:gap-4 items-center">

                        {/* ১. ছোট্ট ল্যাঙ্গুয়েজ সুইচার */}
                        <LanguageSwitcher />

                        {/* ২. কার্ট বাটন */}
                        <CartButton cartCount={cartCount} />

                        {/* ৩. প্রোফাইল/লগইন বাটন (একেবারে ডানদিকে নিয়ে আসা হলো) */}
                        <div className="hidden min-[900px]:block pl-2 border-l border-gray-200">
                            <AuthButton isMobile={false} />
                        </div>

                        {/* ৪. Mobile Hamburger Icon */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="hidden max-[900px]:flex flex-col gap-1.5 p-1 ml-1 cursor-pointer"
                            aria-label="Open Menu"
                        >
                            <span className="w-6 h-0.5 bg-green-800 rounded-full"></span>
                            <span className="w-6 h-0.5 bg-green-800 rounded-full"></span>
                            <span className="w-6 h-0.5 bg-green-800 rounded-full"></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* 4. Mobile Menu Drawer */}
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    );
}