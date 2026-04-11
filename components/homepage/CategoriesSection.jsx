import { getLocale } from 'next-intl/server';
import Link from 'next/link'; // অথবা আপনার যদি next-intl এর Link থাকে: import { Link } from '@/i18n/routing';
import { getCategories } from '../../actions/categoriesAction';

// Slug অনুযায়ী ইমোজির ম্যাপিং
const categoryEmojis = {
  "clothing-textiles": "👘",
  "clay-pottery": "🏺",
  "village-food": "🍿",
  "nakshikantha-quilts": "🧶",
  "wood-crafts": "🪵",
  "jute-products": "🌾"
};

const CategoriesSection = async () => {
  // ডাটাবেস থেকে ক্যাটাগরি ফেচ করা
  const res = await getCategories();
  const categories = res?.data || [];

  // বর্তমান লোকেল (ভাষা) ফেচ করা (এটি 'en' অথবা 'bn' রিটার্ন করবে)
  const locale = await getLocale();

  // স্ট্যাটিক টেক্সটগুলোর জন্য একটি লোকাল ডিকশনারি (আপনি চাইলে next-intl এর messages/t() ও ব্যবহার করতে পারেন)
  const uiTexts = {
    bn: {
      badge: "🗂️ ক্যাটাগরি",
      title: "কী ধরনের পণ্য খুঁজছেন?",
      subtitle: "বাংলাদেশের প্রতিটি কোণ থেকে আনা বিচিত্র হস্তশিল্প",
      productCount: (count) => `${count || "০"}টি পণ্য`
    },
    en: {
      badge: "🗂️ Categories",
      title: "What kind of products are you looking for?",
      subtitle: "Diverse handicrafts brought from every corner of Bangladesh",
      productCount: (count) => `${count || 0} Products`
    }
  };

  const t = uiTexts[locale] || uiTexts.bn; // বর্তমান ভাষার টেক্সটগুলো সিলেক্ট করা

  return (
    <section className="bg-white py-18">
      <div className="container">

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-pale text-green-deep text-[11px] font-bold tracking-[2px] uppercase px-3.5 py-[5px] rounded-[20px] mb-3.5">
            {t.badge}
          </div>

          <h2 className="font-noto text-[clamp(22px,4vw,36px)] text-text-dark mb-2.5 leading-[1.3]">
            {t.title}
          </h2>

          <p className="text-text-mid text-[15px] max-w-120 mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[600px]:grid-cols-2">

          {categories.map((category) => (
            <Link
              key={category._id || category.slug}
              href={`/${locale}/category/${category.slug}`} // লোকেল সহ ডাইনামিক রাউট
              className="cat-card bg-cream border-2 border-border rounded-[18px] px-6 py-8 text-center cursor-pointer transition-all duration-250 no-underline block relative overflow-hidden group hover:border-green-mid"
            >
              {/* ইমোজি রেন্ডার */}
              <span className="text-[52px] mb-4 block relative z-1 transition-transform duration-300 group-hover:scale-110">
                {category.imageUrl?.length < 10
                  ? category.imageUrl
                  : categoryEmojis[category.slug] || "🛍️"}
              </span>

              {/* ডাইনামিক নাম (বর্তমান লোকেল অনুযায়ী) */}
              <div className="font-noto text-[17px] font-bold text-text-dark mb-2 relative z-1">
                {/* locale 'bn' হলে category.name.bn দেখাবে, 'en' হলে category.name.en দেখাবে */}
                {category.name?.[locale] || category.name?.bn || "নাম নেই"}
              </div>

              {/* প্রোডাক্ট কাউন্ট (লোকেল অনুযায়ী) */}
              <div className="text-xs text-green-mid font-semibold relative z-1">
                {t.productCount(category.productCount)}
                
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;