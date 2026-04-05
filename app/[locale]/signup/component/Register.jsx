import React from "react";

export default function RegistrationForm() {
  return (
    <div className="w-full md:w-7/12 p-8 md:p-14 flex flex-col justify-center bg-white">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
          রেজিস্ট্রেশন
        </h2>
        <p className="text-gray-500 text-[15px]">
          নতুন অ্যাকাউন্ট তৈরি করতে নিচের তথ্যগুলো দিন
        </p>
      </div>

      <form action="#" method="POST" className="space-y-5">
        <InputField
          label="আপনার সম্পূর্ণ নাম"
          type="text"
          placeholder="যেমন: রহিম মিয়া"
        />
        <InputField
          label="মোবাইল নাম্বার"
          type="tel"
          placeholder="017XX-XXXXXX"
        />
        <InputField
          label="নতুন পাসওয়ার্ড দিন"
          type="password"
          placeholder="অন্তত ৬ অক্ষরের পাসওয়ার্ড"
        />

        <button
          type="submit"
          className="w-full bg-green-deep hover:bg-green-mid text-white font-serif font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-green-deep/30 hover:-translate-y-0.5 mt-4"
        >
          অ্যাকাউন্ট তৈরি করুন
        </button>
      </form>

      <div className="mt-8 text-center text-[15px] text-gray-600 border-t border-earth-pale pt-6">
        আগে থেকেই অ্যাকাউন্ট আছে?
        <a
          href="login.html"
          className="font-bold text-green-deep hover:text-green-mid hover:underline ml-1"
        >
          লগইন করুন
        </a>
      </div>
    </div>
  );
}

function InputField({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-[14px] font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-xl border-2 border-earth-pale bg-cream focus:bg-white focus:border-green-deep focus:ring-0 outline-none transition-all text-[15px]"
      />
    </div>
  );
}
