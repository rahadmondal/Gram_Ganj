import React, { Suspense } from "react";
import { getLocale, setRequestLocale } from "next-intl/server";

import { getFilteredProducts } from "@/actions/productAction";
import Pagination from "@/components/common/Pagination";
import ProductCard from "@/components/products/ProductCard";
import ShopBanner from "@/components/products/ShopBanner";
import ShopSidebar from "@/components/products/ShopSidebar";
import ShopToolbar from "@/components/products/ShopToolbar";
import ProductCardSkeleton from "@/components/common/ProductCardSkeleton";


// ------------------------------------------------------------------
// ১. ডানপাশের প্রোডাক্ট এরিয়ার জন্য লোডিং স্কেলিটন কম্পোনেন্ট
// ------------------------------------------------------------------
function ShopRightSideSkeleton() {
  return (
    <div>
      {/* টুলবার স্কেলিটন */}
      <div className="bg-white rounded-xl border-2 border-gray-100 px-4.5 py-3.5 flex items-center justify-between gap-3 mb-5 h-[68px] animate-pulse">
        <div className="h-6 w-32 bg-gray-200 rounded-md"></div>
        <div className="h-10 w-48 bg-gray-200 rounded-lg"></div>
      </div>

      {/* প্রোডাক্ট গ্রিড স্কেলিটন (৯টি ফাঁকা কার্ড দেখাবে) */}
      <div className="grid gap-4.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// ২. ডাটা ফেচিং কম্পোনেন্ট (এটি শুধুমাত্র ডানপাশের অংশ রেন্ডার করবে)
// ------------------------------------------------------------------
async function ProductList({ searchParams }) {
  const getSearchParams = await searchParams;
  const response = await getFilteredProducts(getSearchParams);
  const products = response?.products || [];

  return (
    <div>
      {/* টুলবারে মোট প্রোডাক্ট সংখ্যা */}
      <ShopToolbar totalProducts={response?.totalProducts || 0} />

      {/* প্রোডাক্ট গ্রিড */}
      <div className="grid gap-4.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>

      {/* পেজিনেশন */}
      <Pagination totalPages={response?.totalPages || 1} />
    </div>
  );
}

// ------------------------------------------------------------------
// ৩. আপনার মেইন পেজ কম্পোনেন্ট
// ------------------------------------------------------------------
const Productpage = async ({ searchParams }) => {
  const locale = await getLocale();
  setRequestLocale(locale);

  return (
    <div>
      {/* ব্যানার - পেজ রিলোড দেওয়ার সাথে সাথেই এটি দেখা যাবে */}
      <ShopBanner />

      <div className="container py-7 grid gap-7 items-start lg:grid-cols-[260px_1fr]">
        {/* বাম দিকের সাইডবার - এটিও সাথে সাথেই দেখা যাবে */}
        <ShopSidebar />

        {/* ডান দিকের মেইন প্রোডাক্ট এরিয়া - ডাটা ফেচ হওয়া পর্যন্ত এখানে স্কেলিটন দেখাবে */}
        <Suspense fallback={<ShopRightSideSkeleton />}>
          <ProductList searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
};

export default Productpage;
