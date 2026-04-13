"use server";

import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function getFilteredProducts(searchParams) {
  try {
    await dbConnect();

    // ২. searchParams থেকে ফিল্টার ভ্যালুগুলো বের করা
    const category = searchParams?.category;
    const minPrice = searchParams?.minPrice;
    const maxPrice = searchParams?.maxPrice;
    const tags = searchParams?.tags;
    const sort = searchParams?.sort || "popular";
    const page = parseInt(searchParams?.page || "1");
    const limit = 12; // প্রতি পেজে কয়টি প্রোডাক্ট দেখাবেন

    // ৩. Mongoose Query অবজেক্ট তৈরি করা
    let query = {};

    // ক্যাটাগরি ফিল্টার
    if (category && category !== "all") {
      query.category = category;
    }

    // প্রাইস ফিল্টার ($gte = Greater Than or Equal, $lte = Less Than or Equal)
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // ট্যাগ/ব্যাজ ফিল্টার (নতুন মডেলে এটি badges হিসেবে আছে)
    if (tags) {
      const tagsArray = tags.split(",");
      query.badges = { $in: tagsArray };
    }

    // ৪. সর্টিং লজিক (নতুন মডেল অনুযায়ী আপডেট করা হয়েছে)
    let sortOptions = {};
    switch (sort) {
      case "newest":
        sortOptions = { createdAt: -1 };
        break;
      case "price-low":
        sortOptions = { price: 1 };
        break;
      case "price-high":
        sortOptions = { price: -1 };
        break;
      case "rating":
        sortOptions = { "rating.average": -1 }; // নতুন মডেলে rating.average
        break;
      case "popular":
      default:
        sortOptions = { soldCount: -1 }; // নতুন মডেলে soldCount
        break;
    }

    // ৫. পেজিনেশন (Pagination) লজিক
    const skip = (page - 1) * limit;

    // ৬. ডাটাবেস থেকে প্রোডাক্ট ফেচ করা এবং শুধু দরকারি ফিল্ডগুলো সিলেক্ট করা
    const products = await Product.find(query)
      .select(
        "slug name price originalPrice discountPercentage images badges rating stock specifications",
      ) // প্রোজেকশন
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .lean();

    // ৭. পেজিনেশনের জন্য মোট প্রোডাক্ট সংখ্যা বের করা
    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);

    return {
      success: true,
      products: JSON.parse(JSON.stringify(products)),
      totalProducts,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      success: false,
      error: "প্রোডাক্ট লোড করতে সমস্যা হয়েছে!",
      products: [],
      totalProducts: 0,
      totalPages: 1,
    };
  }
}
