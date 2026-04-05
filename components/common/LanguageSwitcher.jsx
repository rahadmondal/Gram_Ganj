"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { FaChevronDown, FaGlobe } from "react-icons/fa";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="relative inline-flex items-center group">
      <div className="absolute left-3 pointer-events-none text-primary group-hover:text-primary-hover transition-colors">
        <FaGlobe className="w-4 h-4" />
      </div>

      <select
        value={locale}
        onChange={handleLanguageChange}
        className="appearance-none w-full bg-white border-2 border-secondary-pale hover:border-primary focus:border-primary focus:ring-0 outline-none text-gray-700 font-sans font-semibold text-[14px] rounded-xl pl-9 pr-8 py-2 cursor-pointer transition-all shadow-sm"
      >
        <option value="bn">বাংলা (BN)</option>
        <option value="en">English (EN)</option>
      </select>

      <div className="absolute right-3 pointer-events-none text-gray-400 group-hover:text-primary transition-colors">
        <FaChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
}
