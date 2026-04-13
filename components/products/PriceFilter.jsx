"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const priceRanges = [
    { label: '৳০–৫০০', min: 0, max: 500 },
    { label: '৳৫০০–১৫০০', min: 500, max: 1500 },
    { label: '৳১৫০০+', min: 1500, max: 50000 },
];

export default function PriceFilter() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();


    const currentMin = searchParams.get('minPrice') || '';
    const currentMax = searchParams.get('maxPrice') || '';


    const [minInput, setMinInput] = useState(currentMin);
    const [maxInput, setMaxInput] = useState(currentMax);

    // URL চেঞ্জ হলে ইনপুট ফিল্ড আপডেট করার জন্য (যেমন চিপসে ক্লিক করলে)
    useEffect(() => {
        setMinInput(currentMin);
        setMaxInput(currentMax);
    }, [currentMin, currentMax]);


    const updateUrlParams = (min, max) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));

        if (min) current.set('minPrice', min);
        else current.delete('minPrice');

        if (max) current.set('maxPrice', max);
        else current.delete('maxPrice');

        current.delete('page');

        const search = current.toString();
        const query = search ? `?${search}` : "";


        router.push(`${pathname}${query}`, { scroll: false });
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            if (minInput !== currentMin || maxInput !== currentMax) {
                updateUrlParams(minInput, maxInput);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [minInput, maxInput, currentMin, currentMax]);


    return (
        <div className="p-5 border-b border-border">
            <div className="font-noto text-sm font-bold text-text-dark mb-3.5 flex items-center gap-2">
                <span className="text-base">💰</span> মূল্য পরিসীমা (৳)
            </div>

            {/* কাস্টম ইনপুট ফিল্ড */}
            <div className="grid grid-cols-2 gap-2.5">
                <input
                    type="number"
                    placeholder="সর্বনিম্ন"
                    value={minInput}
                    onChange={(e) => setMinInput(e.target.value)}
                    className="w-full py-2.5 px-2.5 border-2 border-border rounded-lg text-[13px] font-hind text-center text-text-dark bg-cream outline-none focus:border-green-deep transition-colors"
                />
                <input
                    type="number"
                    placeholder="সর্বোচ্চ"
                    value={maxInput}
                    onChange={(e) => setMaxInput(e.target.value)}
                    className="w-full py-2.5 px-2.5 border-2 border-border rounded-lg text-[13px] font-hind text-center text-text-dark bg-cream outline-none focus:border-green-deep transition-colors"
                />
            </div>

            {/* প্রি-ডিফাইনড প্রাইস চিপস */}
            <div className="flex flex-wrap gap-1.5 mt-3">
                {priceRanges.map((range, idx) => {
                    const isActive = currentMin === String(range.min) && currentMax === String(range.max);

                    return (
                        <div
                            key={idx}
                            onClick={() => updateUrlParams(range.min, range.max)}
                            className={`px-3 py-1.5 rounded-lg border-[1.5px] text-xs font-semibold cursor-pointer transition-all duration-200 ${isActive
                                ? 'border-green-deep bg-green-deep/10 text-green-deep'
                                : 'border-border text-text-mid bg-cream hover:border-green-deep'
                                }`}
                        >
                            {range.label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}