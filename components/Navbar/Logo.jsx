"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Logo() {
    const t = useTranslations("Navbar");

    return (
        <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-xl shadow-sm">
                🌿
            </div>
            <div className="flex-col leading-tight hidden sm:flex">
                <span className="font-bold text-green-800 text-lg">
                    {t("brandName")}
                </span>
                <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">
                    {t("brandSubName")}
                </span>
            </div>
        </Link>
    );
}