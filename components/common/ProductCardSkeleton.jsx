import React from 'react';

export default function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-[18px] border-2 border-gray-100 overflow-hidden relative shadow-sm animate-pulse flex flex-col">

            {/* Image Skeleton */}
            <div className="h-52.5 w-full bg-gray-200 flex items-center justify-center relative">
                {/* Wishlist Button Skeleton */}
                <div
                    className="absolute top-2.5 right-2.5 bg-gray-300 w-8.5 h-8.5 rounded-full z-10"
                    style={{ boxShadow: "0 2px 8px rgba(93,61,30,.10)" }}
                ></div>
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col grow">

                {/* Location Skeleton */}
                <div className="h-3 w-20 bg-gray-200 rounded mb-2.5"></div>

                {/* Primary Name Skeleton (যেমন: বাংলা নাম) */}
                <div className="h-5 w-4/5 bg-gray-300 rounded mb-2"></div>

                {/* Secondary Name Skeleton (যেমন: ইংরেজি নাম) */}
                <div className="h-3 w-1/2 bg-gray-200 rounded mb-3.5"></div>

                {/* Rating Skeleton */}
                <div className="h-3 w-1/4 bg-gray-200 rounded mb-4"></div>

                {/* Footer (Price & Button) */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                    {/* Price Area */}
                    <div className="flex items-center gap-1.5">
                        <div className="h-6 w-16 bg-gray-300 rounded"></div>
                        <div className="h-3 w-10 bg-gray-200 rounded"></div>
                    </div>

                    {/* Add to Cart Button Skeleton */}
                    <div className="w-20 h-9 bg-gray-300 rounded-[9px]"></div>
                </div>
            </div>
        </div>
    );
}