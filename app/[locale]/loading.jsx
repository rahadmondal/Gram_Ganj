import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center w-full bg-white/50">
            <div className="relative w-14 h-14">
                <div className="absolute inset-0 rounded-full border-4 border-green-100 opacity-50"></div>
                <div className="absolute inset-0 rounded-full border-4 border-[#2e7d32] border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-4 text-[15px] font-hind font-semibold text-gray-500 animate-pulse tracking-wide">
                লোড হচ্ছে...
            </p>
        </div>
    );
}