"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "./navData";
import AuthButton from "./AuthButton";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
    const t = useTranslations("Navbar");

    return (
        <div
            className={`fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm transition-opacity duration-300 min-[900px]:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            onClick={() => setMenuOpen(false)}
        >
            <div
                className={`absolute top-0 left-0 w-72 h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
                    <span className="font-bold text-green-800 text-lg">
                        {t("brandName")}
                    </span>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-gray-500 hover:text-red-500 transition"
                    >
                        <FaTimes className="w-4 h-4" />
                    </button>
                </div>

                {/* Drawer Links */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                    {/* Mobile Auth Button */}
                    <div className="mb-4 pb-4 border-b border-gray-100">
                        <AuthButton isMobile={true} onClick={() => setMenuOpen(false)} />
                    </div>

                    <ul className="flex flex-col gap-2">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-green-50 hover:text-green-800 transition"
                                >
                                    {t(link.labelKey)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 text-center text-xs text-gray-400">
                    {t("copyright")}
                </div>
            </div>
        </div>
    );
}