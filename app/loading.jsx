import React from 'react';

export default function Loading() {
    return (
        // min-h-[60vh] দেওয়ার কারণ হলো এটি হেডার ও ফুটারের মাঝখানে সুন্দরভাবে সেন্টারে থাকবে
        <div className="min-h-[60vh] flex flex-col items-center justify-center w-full bg-white/50">

            {/* মডার্ন স্পিনার (Spinner) */}
            <div className="relative w-14 h-14">
                {/* ব্যাকগ্রাউন্ড রিং */}
                <div className="absolute inset-0 rounded-full border-4 border-green-100 opacity-50"></div>
                {/* ঘুরন্ত অ্যানিমেটেড রিং */}
                <div className="absolute inset-0 rounded-full border-4 border-[#2e7d32] border-t-transparent animate-spin"></div>
            </div>

            {/* লোডিং টেক্সট */}
            <p className="mt-4 text-[15px] font-hind font-semibold text-gray-500 animate-pulse tracking-wide">
                লোড হচ্ছে...
            </p>

        </div>
    );
}