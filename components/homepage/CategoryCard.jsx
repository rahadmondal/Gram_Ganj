import { getLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

const CategoryCard = async ({ category }) => {
    const locale = await getLocale();
    const primaryName = locale === 'bn' ? category.name?.bn : category.name?.en;
    const secondaryName = locale === 'bn' ? category.name?.en : category.name?.bn;
    return (
        <Link
            href={`/products?category=${category.slug}`}
            className="cat-card bg-cream border-2 border-border rounded-[18px] px-6 py-8 text-center cursor-pointer transition-all duration-250 no-underline block relative overflow-hidden group hover:border-green-mid"
        >
            <div className="relative mb-4 h-15 w-full flex items-center justify-center z-1">
                <Image
                    src={category.imageUrl}
                    alt={primaryName || "Category Image"}
                    fill
                    sizes="(max-width: 768px) 60px, 80px"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <div className="font-noto text-[17px] font-bold text-text-dark mb-1.5 relative z-1">
                {primaryName}
            </div>

            <div className="text-xs text-text-light italic mb-2.5 relative z-1">
                {secondaryName}
            </div>


            <div className="text-xs text-green-mid font-semibold relative z-1">
                {category.productCount || 0} Kg
            </div>
        </Link>
    )
}

export default CategoryCard