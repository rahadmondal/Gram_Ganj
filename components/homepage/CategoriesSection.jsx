const CategoriesSection = () => {
  return (
    <section className="bg-white py-18 ">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-pale text-green-deep text-[11px] font-bold tracking-[2px] uppercase px-3.5 py-[5px] rounded-[20px] mb-3.5">
            🗂️ ক্যাটাগরি
          </div>

          <h2 className="font-noto text-[clamp(22px,4vw,36px)] text-text-dark mb-2.5 leading-[1.3]">
            কী ধরনের পণ্য খুঁজছেন?
          </h2>

          <p className="text-text-mid text-[15px] max-w-120 mx-auto">
            বাংলাদেশের প্রতিটি কোণ থেকে আনা বিচিত্র হস্তশিল্প
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[600px]:grid-cols-2">
          {/* Card 1 */}
          <a
            href="#"
            className="cat-card bg-cream border-2 border-border rounded-[18px] px-6 py-8 text-center cursor-pointer transition-all duration-250 no-underline block relative overflow-hidden"
          >
            <span className="text-[52px] mb-4 block relative z-1">👘</span>
            <div className="font-noto text-[17px] font-bold text-text-dark mb-1.5 relative z-1">
              কাপড় ও পোশাক
            </div>
            <div className="text-xs text-text-light italic mb-2.5 relative z-1">
              Clothing & Textiles
            </div>
            <div className="text-xs text-green-mid font-semibold relative z-1">
              ১৪৫টি পণ্য
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="#"
            className="cat-card bg-cream border-2 border-border rounded-[18px] px-6 py-8 text-center cursor-pointer transition-all duration-[250ms] no-underline block relative overflow-hidden"
          >
            <span className="text-[52px] mb-4 block relative z-[1]">🏺</span>
            <div className="font-noto text-[17px] font-bold text-text-dark mb-1.5 relative z-[1]">
              মাটির পণ্য
            </div>
            <div className="text-xs text-text-light italic mb-2.5 relative z-[1]">
              Clay & Pottery
            </div>
            <div className="text-xs text-green-mid font-semibold relative z-[1]">
              ৮৯টি পণ্য
            </div>
          </a>

          {/* Card 3 */}
          <a
            href="#"
            className="cat-card bg-cream border-2 border-border rounded-[18px] px-6 py-8 text-center cursor-pointer transition-all duration-[250ms] no-underline block relative overflow-hidden"
          >
            <span className="text-[52px] mb-4 block relative z-[1]">🍿</span>
            <div className="font-noto text-[17px] font-bold text-text-dark mb-1.5 relative z-[1]">
              গ্রামীণ খাবার
            </div>
            <div className="text-xs text-text-light italic mb-2.5 relative z-[1]">
              Village Food
            </div>
            <div className="text-xs text-green-mid font-semibold relative z-[1]">
              ২১২টি পণ্য
            </div>
          </a>

          {/* Card 4 */}
          <a
            href="#"
            className="cat-card bg-cream border-2 border-border rounded-[18px] px-6 py-8 text-center cursor-pointer transition-all duration-[250ms] no-underline block relative overflow-hidden"
          >
            <span className="text-[52px] mb-4 block relative z-[1]">🧶</span>
            <div className="font-noto text-[17px] font-bold text-text-dark mb-1.5 relative z-[1]">
              নকশিকাঁথা
            </div>
            <div className="text-xs text-text-light italic mb-2.5 relative z-[1]">
              Nakshikantha Quilts
            </div>
            <div className="text-xs text-green-mid font-semibold relative z-[1]">
              ৫৬টি পণ্য
            </div>
          </a>

          {/* Card 5 */}
          <a
            href="#"
            className="cat-card bg-cream border-2 border-border rounded-[18px] px-6 py-8 text-center cursor-pointer transition-all duration-[250ms] no-underline block relative overflow-hidden"
          >
            <span className="text-[52px] mb-4 block relative z-[1]">🪵</span>
            <div className="font-noto text-[17px] font-bold text-text-dark mb-1.5 relative z-[1]">
              কাঠের কারুকাজ
            </div>
            <div className="text-xs text-text-light italic mb-2.5 relative z-[1]">
              Wood Crafts
            </div>
            <div className="text-xs text-green-mid font-semibold relative z-[1]">
              ৭৩টি পণ্য
            </div>
          </a>

          {/* Card 6 */}
          <a
            href="#"
            className="cat-card bg-cream border-2 border-border rounded-[18px] px-6 py-8 text-center cursor-pointer transition-all duration-[250ms] no-underline block relative overflow-hidden"
          >
            <span className="text-[52px] mb-4 block relative z-[1]">🌾</span>
            <div className="font-noto text-[17px] font-bold text-text-dark mb-1.5 relative z-[1]">
              পাটজাত পণ্য
            </div>
            <div className="text-xs text-text-light italic mb-2.5 relative z-[1]">
              Jute Products
            </div>
            <div className="text-xs text-green-mid font-semibold relative z-[1]">
              ৯৮টি পণ্য
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
