import React from 'react';

const ratings = [
    { val: 5, stars: '★★★★★', count: '৪৮৬' },
    { val: 4, stars: '★★★★☆', count: '২৩৪' },
    { val: 3, stars: '★★★☆☆', count: '৯৮' },
];

export default function RatingFilter() {
    return (
        <div className="p-5 border-b border-border">
            <div className="font-noto text-sm font-bold text-text-dark mb-3.5 flex items-center gap-2">
                <span className="text-base">⭐</span> রেটিং
            </div>
            <div className="flex flex-col gap-1.5">
                {ratings.map((rate) => (
                    <label key={rate.val} className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-lg transition-colors duration-[150ms] hover:bg-cream">
                        <input type="radio" name="rating" value={rate.val} className="accent-green-deep w-3.5 h-3.5 cursor-pointer" />
                        <span className="text-orange-400 text-[13px] tracking-widest">{rate.stars}</span>
                        <span className="text-xs text-text-light">({rate.count})</span>
                    </label>
                ))}
                <label className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-lg transition-colors duration-[150ms] hover:bg-cream">
                    <input type="radio" name="rating" value="0" defaultChecked className="accent-green-deep w-3.5 h-3.5 cursor-pointer" />
                    <span className="text-text-mid text-[13px]">সকল রেটিং</span>
                </label>
            </div>
        </div>
    );
}