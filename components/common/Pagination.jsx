"use client";

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useLocale } from 'next-intl';

export default function Pagination({ totalPages = 1, }) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get('page')) || 1;

    if (totalPages <= 1) return null;

    // Locale অনুযায়ী নম্বর কনভার্ট করার ডায়নামিক ফাংশন
    const formatNumber = (num) => {
        const currentLocale = locale === 'bn' ? 'bn-BD' : 'en-US';
        return new Intl.NumberFormat(currentLocale).format(num);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            const params = new URLSearchParams(searchParams);
            params.set('page', page.toString());
            router.push(`${pathname}?${params.toString()}`);
        }
    };

    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="flex justify-center items-center gap-1.5 mt-8 flex-wrap">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-xl border-2 cursor-pointer border-gray-200 bg-white text-lg font-semibold flex items-center justify-center text-gray-500 hover:bg-orange-50/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <FiChevronLeft />
            </button>

            {getPageNumbers().map((page, index) => {
                if (page === '...') {
                    return (
                        <div key={`ellipsis-${index}`} className="w-10 h-10 flex items-center justify-center text-gray-400 font-bold">
                            ...
                        </div>
                    );
                }

                const isActive = page === currentPage;

                return (
                    <button
                        key={`page-${page}`}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-xl border-2 text-sm font-semibold cursor-pointer flex items-center justify-center transition-colors ${isActive
                            ? 'border-[#2e7d32] bg-[#2e7d32] text-white'
                            : 'border-gray-200 bg-white text-gray-600 hover:bg-orange-50/50'
                            }`}
                    >
                        {/* এখানেই ডায়নামিক ফরম্যাটিং হচ্ছে */}
                        {formatNumber(page)}
                    </button>
                );
            })}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 cursor-pointer rounded-xl border-2 border-gray-200 bg-white text-lg font-semibold flex items-center justify-center text-gray-500 hover:bg-orange-50/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <FiChevronRight />
            </button>
        </div>
    );
}