import { getFilteredProducts } from "@/actions/productAction";
import Pagination from "@/components/common/Pagination";
import ProductCard from "@/components/products/ProductCard";
import ShopBanner from "@/components/products/ShopBanner";
import ShopSidebar from "@/components/products/ShopSidebar";
import ShopToolbar from "@/components/products/ShopToolbar";
import { getLocale, setRequestLocale } from "next-intl/server";
import React from "react";

const Productpage = async ({ searchParams }) => {
  const locale = await getLocale();
  setRequestLocale(locale);
  const getSearchParams = await searchParams;
  const response = await getFilteredProducts(getSearchParams);
  const products = response?.products;

  return (
    <div>
      <ShopBanner />
      <div className="container py-7 grid gap-7 items-start lg:grid-cols-[260px_1fr]">
        {/* বাম দিকের সাইডবার */}
        <ShopSidebar />

        {/* ডান দিকের মেইন প্রোডাক্ট এরিয়া */}
        <div>
          <ShopToolbar totalProducts={response?.totalProducts} />

          {/* প্রোডাক্ট গ্রিড (এখানে আপনার ProductCard কম্পোনেন্টগুলো ম্যাপ করে বসাবেন) */}
          <div className="grid gap-4.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>

          <Pagination totalPages={response?.totalPages} />
        </div>
      </div>
    </div>
  );
};

export default Productpage;
