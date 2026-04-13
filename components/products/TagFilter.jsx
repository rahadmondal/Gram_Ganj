"use client";

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const tagsList = ['হাতে বোনা', 'অর্গানিক', 'কাস্টম সাইজ', 'উপহার', 'সেল', 'নতুন'];

export default function TagFilter() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // URL থেকে বর্তমান ট্যাগগুলো পড়া (কমা দিয়ে আলাদা করা স্ট্রিং হিসেবে থাকবে)
    const currentTagsParam = searchParams.get('tags');

    // ট্যাগগুলোকে একটি অ্যারে (Array) তে কনভার্ট করা, না থাকলে ফাঁকা অ্যারে []
    const activeTags = currentTagsParam ? currentTagsParam.split(',') : [];

    const handleTagToggle = (tag) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));

        let updatedTags;

        // যদি ট্যাগটি আগে থেকেই সিলেক্ট করা থাকে, তবে ফিল্টার করে বাদ দিয়ে দেবো
        if (activeTags.includes(tag)) {
            updatedTags = activeTags.filter((t) => t !== tag);
        } else {
            // আর না থাকলে আগেরগুলোর সাথে নতুন ট্যাগটি যোগ করে দেবো
            updatedTags = [...activeTags, tag];
        }

        // যদি কোনো ট্যাগ সিলেক্ট করা না থাকে, তাহলে URL থেকে 'tags' প্যারামিটার মুছে ফেলবো
        if (updatedTags.length === 0) {
            current.delete('tags');
        } else {
            // অ্যারেটিকে আবার কমা-যুক্ত স্ট্রিং (যেমন: "উপহার,সেল") বানিয়ে URL-এ সেট করবো
            current.set('tags', updatedTags.join(','));
        }

        current.delete('page'); // নতুন ফিল্টার অ্যাপ্লাই হলে পেজ রিসেট

        const search = current.toString();
        const query = search ? `?${search}` : "";

        // scroll: false দেওয়া হয়েছে যাতে ক্লিক করার পর পেজ উপরে লাফিয়ে না ওঠে
        router.push(`${pathname}${query}`, { scroll: false });
    };

    return (
        <div className="p-5 border-b border-border">
            <div className="font-noto text-sm font-bold text-text-dark mb-3.5 flex items-center gap-2">
                <span className="text-base">🏷️</span> ট্যাগ
            </div>
            <div className="flex flex-wrap gap-1.5">
                {tagsList.map((tag, idx) => {
                    // ট্যাগটি activeTags অ্যারেতে আছে কি না তা চেক করা
                    const isActive = activeTags.includes(tag);

                    return (
                        <div
                            key={idx}
                            onClick={() => handleTagToggle(tag)}
                            className={`px-3 py-1.5 rounded-lg border-[1.5px] text-xs font-semibold cursor-pointer transition-all duration-200 ${isActive
                                    // অ্যাকটিভ থাকলে ব্যাকগ্রাউন্ড গাঢ় সবুজ হবে
                                    ? 'border-green-deep bg-green-deep text-white shadow-sm'
                                    // অ্যাকটিভ না থাকলে আগের মতোই থাকবে
                                    : 'border-border text-text-mid bg-cream hover:bg-green-deep hover:text-white hover:border-green-deep'
                                }`}
                        >
                            {tag}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}