"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';

// ✅ React Icons
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function ProductCard({ product }) {
    const locale = useLocale();

    const {
        _id,
        slug,
        name,
        price,
        originalPrice,
        discountPercentage,
        images,
        badges,
        rating,
        specifications,
    } = product;

    const imageSrc = images?.[0] || 'https://placehold.co/400x400/png?text=No+Image';

    const productName = name?.[locale] || name?.bn;
    const secondaryName = locale === 'bn' ? name?.en : name?.bn;

    const originName =
        specifications?.origin?.[locale] ||
        specifications?.origin?.bn ||
        'বাংলাদেশ';

    const mainBadge = badges?.[0];
    const isLiked = false;

    const badgeStyles = {
        hot: "bg-[#e67e22]",
        new: "bg-[#27ae60]",
        best: "bg-[#2980b9]",
        verified: "bg-[#16a085]"
    };

    const badgeLabels = {
        hot: locale === 'bn' ? "হট" : "Hot",
        new: locale === 'bn' ? "নতুন" : "New",
        best: locale === 'bn' ? "সেরা" : "Best",
        verified: locale === 'bn' ? "যাচাইকৃত" : "Verified"
    };

    const renderStars = (avg) => {
        const fullStars = Math.floor(avg || 0);
        const emptyStars = 5 - fullStars;
        return '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
    };

    const formattedPrice = price?.toLocaleString(
        locale === 'bn' ? 'bn-BD' : 'en-US'
    );

    const formattedOriginalPrice = originalPrice?.toLocaleString(
        locale === 'bn' ? 'bn-BD' : 'en-US'
    );

    const discountText =
        locale === 'bn'
            ? `${discountPercentage}% ছাড়`
            : `${discountPercentage}% OFF`;

    return (
        <div className="bg-white rounded-[18px] border-2 border-green-100/50 overflow-hidden cursor-pointer transition-all duration-250 hover:shadow-lg hover:-translate-y-1 relative group">

            {/* Image */}
            <Link href={`/product/${slug}`}>
                <div className="h-52.5 flex items-center justify-center bg-gray-50/50 relative overflow-hidden">
                    <img
                        src={imageSrc}
                        alt={productName}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />

                    {mainBadge && (
                        <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md text-white shadow-sm ${badgeStyles[mainBadge] || 'bg-gray-500'}`}>
                            {badgeLabels[mainBadge] || mainBadge}
                        </span>
                    )}

                    {discountPercentage && (
                        <span className="absolute bottom-3 right-0 bg-[#d32f2f] text-white text-[11px] font-bold px-2.5 py-1 rounded-l-md shadow-sm">
                            {discountText}
                        </span>
                    )}
                </div>
            </Link>

            {/* Wishlist */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    console.log('Wishlist clicked:', _id);
                }}
                className={`absolute top-2.5 right-2.5 bg-white border-none w-8.5 h-8.5 rounded-full text-base cursor-pointer flex items-center justify-center transition-all duration-200 z-10 hover:scale-110 ${isLiked ? 'text-red-500' : 'text-gray-400'}`}
                style={{ boxShadow: "0 2px 8px rgba(93,61,30,.10)" }}
            >
                {isLiked ? <FaHeart /> : <FaRegHeart />}
            </button>

            {/* Body */}
            <div className="p-4">

                {/* Location */}
                <div className="text-[11px] text-gray-500 font-semibold flex items-center gap-1 mb-1.5 uppercase tracking-[.5px]">
                    <MdLocationOn />
                    {originName}
                </div>

                <Link href={`/${locale}/product/${slug}`}>
                    <div className="font-noto text-[15px] font-bold text-gray-800 mb-0.5 leading-[1.3] truncate hover:text-green-700 transition-colors">
                        {productName}
                    </div>

                    <div className="text-xs text-gray-400 italic mb-2 truncate">
                        {secondaryName}
                    </div>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2.5 text-xs text-[#f39c12]">
                    <span>{renderStars(rating?.average)}</span>
                    <span className="text-gray-400 font-medium ml-1">
                        ({rating?.count || 0})
                    </span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2.5 border-t border-gray-100">
                    <div>
                        <span className="font-playfair text-xl font-bold text-[#2e7d32]">
                            ৳{formattedPrice}
                        </span>
                        {originalPrice && (
                            <span className="text-xs text-gray-400 line-through ml-1.5">
                                ৳{formattedOriginalPrice}
                            </span>
                        )}
                    </div>

                    <button
                        onClick={() => console.log('Add to cart clicked:', _id)}
                        className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white border-none px-3.5 py-2 rounded-[9px] text-[13px] font-bold cursor-pointer transition-all duration-200 min-h-9 shadow-sm hover:shadow-md"
                    >
                        {locale === 'bn' ? '+ কার্ট' : '+ Add'}
                    </button>
                </div>
            </div>
        </div>
    );
}