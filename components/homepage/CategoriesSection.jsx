import { getLocale } from 'next-intl/server';
import { getCategories } from '../../actions/categoriesAction';
import CategoriesCard from './CategoryCard.jsx'


const CategoriesSection = async () => {
  const res = await getCategories();
  const categories = res?.data || [];
  const locale = await getLocale();

  const uiTexts = {
    bn: {
      badge: "🗂️ ক্যাটাগরি",
      title: "কী ধরনের পণ্য খুঁজছেন?",
      subtitle: "বাংলাদেশের প্রতিটি কোণ থেকে আনা বিচিত্র হস্তশিল্প",
      unit: "টি পণ্য"
    },
    en: {
      badge: "🗂️ Categories",
      title: "What kind of products are you looking for?",
      subtitle: "Diverse handicrafts brought from every corner of Bangladesh",
      unit: "Products"
    }
  };

  const t = uiTexts[locale] || uiTexts.bn;

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

          {categories.map((cat) => (
            <CategoriesCard key={cat._id} category={cat} />

          ))}

        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;