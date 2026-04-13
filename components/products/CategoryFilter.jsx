"use client";

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const categories = [
    { id: 'all', icon: '🏪', name: 'সকল পণ্য', count: '৬৭৩' }, // active: true রিমুভ করা হয়েছে কারণ এটি এখন ডাইনামিক
    { id: 'clothing', icon: '👘', name: 'কাপড় ও পোশাক', count: '১৪৫' },
    { id: 'clay', icon: '🏺', name: 'মাটির পণ্য', count: '৮৯' },
    { id: 'food', icon: '🍿', name: 'গ্রামীণ খাবার', count: '২১২' },
    { id: 'quilt', icon: '🧶', name: 'নকশিকাঁথা', count: '৫৬' },
    { id: 'craft', icon: '🪵', name: 'কাঠের কারুকাজ', count: '৭৩' },
    { id: 'jute', icon: '🌾', name: 'পাটজাত পণ্য', count: '৯৮' },
];

export default function CategoryFilter() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // URL থেকে বর্তমান ক্যাটাগরি বের করা, না থাকলে ডিফল্ট 'all'
    const activeCategory = searchParams.get('category') || 'all';

    // ক্যাটাগরিতে ক্লিক করলে URL আপডেট করার ফাংশন
    const handleCategoryClick = (categoryId) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));

        // যদি 'all' এ ক্লিক করে, তবে URL থেকে category প্যারামিটার মুছে ফেলবো
        if (categoryId === 'all') {
            current.delete('category');
        } else {
            current.set('category', categoryId);
        }

        // নতুন ফিল্টারে ক্লিক করলে পেজ নাম্বার ১-এ নিয়ে যাওয়ার জন্য page মুছে দেওয়া ভালো
        current.delete('page');

        const search = current.toString();
        const query = search ? `?${search}` : "";

        // URL পুশ করা (যেমন: /shop?category=clay)
        router.push(`${pathname}${query}`);
    };

    return (
        <div className="p-5 border-b border-border">
            <div className="font-noto text-sm font-bold text-text-dark mb-3.5 flex items-center gap-2">
                <span className="text-base">🗂️</span> ক্যাটাগরি
            </div>
            <div className="flex flex-col gap-1">
                {categories.map((cat) => {
                    // এটি চেক করবে URL-এর ক্যাটাগরি আর এই আইটেমের id মিলছে কি না
                    const isActive = activeCategory === cat.id;

                    return (
                        <div
                            key={cat.id}
                            onClick={() => handleCategoryClick(cat.id)}
                            className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 border border-transparent text-sm font-medium ${isActive
                                    ? 'bg-green-deep/10 text-green-deep'
                                    : 'text-text-mid hover:bg-cream'
                                }`}
                        >
                            <span>
                                <span className="text-[18px] mr-2">{cat.icon}</span>
                                {cat.name}
                            </span>
                            <span className="text-[11px] font-bold bg-black/[.08] px-[7px] py-[2px] rounded-xl">
                                {cat.count}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}