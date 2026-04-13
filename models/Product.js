import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema(
  {
    // URL ফ্রেন্ডলি নাম
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // পণ্যের নাম (ইংরেজি ও বাংলা)
    name: {
      en: { type: String, required: true },
      bn: { type: String, required: true },
    },

    // ক্যাটাগরির আইডি (ObjectId হিসেবে)
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // যদি Category নামে কোনো মডেল থাকে
      required: true,
    },

    // বর্তমান দাম
    price: {
      type: Number,
      required: true,
    },

    // আগের দাম (যদি ডিসকাউন্ট থাকে)
    originalPrice: {
      type: Number,
    },

    // ডিসকাউন্ট পার্সেন্টেজ
    discountPercentage: {
      type: Number,
    },

    // ছবির অ্যারে
    images: [
      {
        type: String,
        required: true,
      },
    ],

    // ব্যাজ (যেমন: hot, new, best)
    badges: [
      {
        type: String,
        trim: true,
      },
    ],

    // প্রোডাক্টটি ওয়েবসাইটে দেখানো হবে কি না
    isActive: {
      type: Boolean,
      default: true,
    },

    // স্টকের পরিমাণ
    stock: {
      type: Number,
      required: true,
      default: 0,
    },

    // ভ্যারিয়েন্ট (রঙ এবং সাইজ)
    variants: {
      colors: [
        {
          name: { type: String }, // যেমন: "লাল"
          hexCode: { type: String }, // যেমন: "#d32f2f"
        },
      ],
      sizes: [
        {
          size: { type: String }, // যেমন: "Regular" বা "M"
          inStock: { type: Boolean, default: true },
        },
      ],
    },

    // রেটিং অবজেক্ট
    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },

    // মোট কত পিস বিক্রি হয়েছে (Popular সর্টিংয়ের জন্য লাগবে)
    soldCount: {
      type: Number,
      default: 0,
    },

    // পণ্যের বিবরণ (ইংরেজি ও বাংলা)
    description: {
      en: { type: String, required: true },
      bn: { type: String, required: true },
    },

    // স্পেসিফিকেশন (যেহেতু এর ফিল্ডগুলো নির্দিষ্ট নয়, যেমন: material, length, origin; তাই Map ব্যবহার করা হয়েছে)
    specifications: {
      type: Map,
      of: {
        en: { type: String },
        bn: { type: String },
      },
    },

    // ফিচারের তালিকা (যেমন: "ক্যাশ অন ডেলিভারি")
    features: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true, // createdAt এবং updatedAt স্বয়ংক্রিয়ভাবে তৈরি হবে
  },
);

// মডেল আগে থেকে থাকলে রিউজ করবে, না থাকলে নতুন করে বানাবে
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
