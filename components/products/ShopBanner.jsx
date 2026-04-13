import React from 'react';
// ইমোজির বদলে মানানসই গমের শীষের আইকন
import { FaWheatAwn } from "react-icons/fa6";

// স্ট্যাটস ডেটাগুলো আলাদা করা হলো যাতে পরে ডাইনামিক করা সহজ হয়
const statsData = [
    { id: 1, value: "৬৭৩", label: "মোট পণ্য" },
    { id: 2, value: "৫০০+", label: "কারিগর" },
    { id: 3, value: "৪.৮★", label: "গড় রেটিং" }
];

const ShopBanner = () => {
    return (
        <div className="bg-green-deep px-6 py-10 relative overflow-hidden">

            {/* Background Gradient (Next.js স্টাইল অবজেক্ট) */}
            <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(196,149,106,.15) 0%, transparent 60%)' }}
            ></div>

            <div className="container  flex justify-between items-center gap-6 relative z-1">

                {/* Left Side Content */}
                <div>
                    <div className="inline-flex items-center gap-1.5 bg-white/12 text-[#c8e6b8] text-[11px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-[20px] mb-2.5">
                        <FaWheatAwn className="text-sm" /> ১০০% হাতে তৈরি · Authentic Handmade
                    </div>
                    <h1 className="font-noto text-[clamp(22px,3vw,34px)] font-bold text-white leading-[1.25] mb-1.5">
                        আমাদের সকল পণ্য দেখুন
                    </h1>
                    <p className="text-sm text-white/60 font-noto">
                        গ্রামের কারিগরদের হাতে তৈরি সেরা পণ্যগুলো আপনার জন্য
                    </p>
                </div>

                {/* Right Side Stats */}
                <div className="flex gap-8 shrink-0 max-[1000px]:hidden">
                    {statsData.map((stat) => (
                        <div key={stat.id} className="text-center">
                            <span className="font-playfair text-[28px] font-bold text-earth-light block">
                                {stat.value}
                            </span>
                            <span className="text-[11px] text-white/50 uppercase tracking-[.5px] font-noto">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ShopBanner;