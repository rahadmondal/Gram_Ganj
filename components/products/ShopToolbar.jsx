"use client";

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';

export default function ShopToolbar({ totalProducts = 0 }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentSort = searchParams.get('sort') || 'popular';

    const handleSortChange = (e) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams);

        if (value && value !== 'popular') {
            params.set('sort', value);
        } else {
            params.delete('sort');
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="bg-white rounded-xl border-2 border-green-100/50 px-4.5 py-3.5 flex items-center justify-between gap-3 mb-5 flex-wrap shadow-sm">

            <div className="flex items-center gap-2.5">
                {/* মোবাইল ফিল্টার বাটন */}
                <button className="hidden items-center gap-1.5 px-4 py-2 border-2 border-gray-100 rounded-xl bg-white text-sm font-hind font-semibold cursor-pointer text-gray-600 max-[1000px]:flex hover:bg-gray-50 transition-colors">
                    <FiFilter className="text-[16px]" /> ফিল্টার
                </button>

                {/* ডায়নামিক প্রোডাক্ট সংখ্যা */}
                <span className="text-sm text-gray-600 font-medium">
                    <strong className="text-[#2e7d32] font-bold">{totalProducts}টি</strong> পণ্য পাওয়া গেছে
                </span>
            </div>

            <div className="flex items-center gap-2.5">
                {/* সর্টিং সিলেক্ট বক্স */}
                <select
                    value={currentSort}
                    onChange={handleSortChange}
                    className="py-2 px-3 border-2 border-gray-100 rounded-lg text-[13px] font-hind text-gray-800 cursor-pointer bg-orange-50/30 outline-none focus:border-[#2e7d32]/50 transition-colors"
                >
                    <option value="popular">জনপ্রিয়তা অনুযায়ী</option>
                    <option value="newest">নতুন পণ্য আগে</option>
                    <option value="price-low">মূল্য: কম থেকে বেশি</option>
                    <option value="price-high">মূল্য: বেশি থেকে কম</option>
                    <option value="rating">সেরা রেটিং</option>
                </select>

                {/* গ্রিড / লিস্ট ভিউ বাটন */}
                <div className="flex gap-1">
                    <button className="w-8.5 h-8.5 rounded-lg border-2 border-[#2e7d32] bg-[#2e7d32]/10 flex items-center justify-center cursor-pointer text-[#2e7d32] transition-colors">
                        <FiGrid className="text-[18px]" />
                    </button>
                    <button className="w-8.5 h-8.5 rounded-lg border-2 border-gray-100 bg-orange-50/30 flex items-center justify-center cursor-pointer text-gray-500 hover:bg-gray-100 transition-colors">
                        <FiList className="text-[18px]" />
                    </button>
                </div>
            </div>
        </div>
    );
}