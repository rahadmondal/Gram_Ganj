"use client";

import { Link } from "@/i18n/routing";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function CartButton({ cartCount }) {
    return (
        <Link
            href="/cart"
            className="bg-green-50 text-green-800 p-2.5 rounded-lg text-lg flex items-center gap-1 relative hover:bg-green-100 transition shadow-sm"
        >
            <HiOutlineShoppingCart />
            {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {cartCount}
                </span>
            )}
        </Link>
    );
}