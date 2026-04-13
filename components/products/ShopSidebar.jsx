"use client";

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FiRefreshCw } from "react-icons/fi"; // React Icon যুক্ত করা হলো

import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import TagFilter from './TagFilter';
// import RatingFilter from './RatingFilter';

export default function ShopSidebar() {
    const router = useRouter();
    const pathname = usePathname();

    // সব ফিল্টার মুছে ফেলার ফাংশন
    const clearAllFilters = () => {
        // শুধু pathname-এ পুশ করলে URL-এর সাথের সব ?category=...&price=... মুছে যাবে
        router.push(pathname, { scroll: false });
    };

    return (
        <aside className="bg-white rounded-[18px] border-2 border-border overflow-hidden sticky top-[88px] max-[1000px]:hidden">
            <CategoryFilter />
            <PriceFilter />
            {/* <RatingFilter /> */}
            <TagFilter />

            <div className="p-5">
                <button
                    onClick={clearAllFilters}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-border bg-cream text-[13px] font-hind font-semibold cursor-pointer text-text-mid transition-all duration-200 hover:bg-red-50 hover:text-red-500 hover:border-red-200"
                >
                    <FiRefreshCw className="text-sm font-bold" /> ফিল্টার মুছুন
                </button>
            </div>
        </aside>
    );
}