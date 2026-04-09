"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = () => {
        // বর্তমান ভাষা যদি 'bn' হয়, তবে 'en' এ যাবে, নাহলে 'bn' এ
        const nextLocale = locale === "bn" ? "en" : "bn";
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 border border-gray-200 text-[13px] font-bold text-gray-600 hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-all shadow-sm"
            title="Change Language"
        >
            {locale === "bn" ? "EN" : "BN"}
        </button>
    );
}