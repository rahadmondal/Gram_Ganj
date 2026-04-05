import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="bg-background font-sans text-gray-800 antialiased selection:bg-primary-pale selection:text-primary min-h-screen flex flex-col">
      {/* 2. 404 Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-12 text-center">
        {/* Illustration / Emoji */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl drop-shadow-md">🛒</div>
          {/* Broken/Lost element */}
          <div className="absolute -bottom-2 -right-4 text-4xl md:text-5xl">
            🍂
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="font-display text-[80px] md:text-[120px] font-bold text-primary-pale leading-none mb-2">
          404
        </h1>

        <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {t("title")}
        </h2>

        <p className="text-[15px] md:text-[16px] text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
          {t("description")}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="btn-primary bg-earth-light text-white border-none px-7 py-4 rounded-xl text-base font-bold font-hind cursor-pointer transition-all duration-200 no-underline inline-flex items-center gap-2 min-h-13 max-[600px]:w-full max-[600px]:justify-center hover:bg-earth-mid hover:shadow-soft"
          >
            <FaHome className="text-lg" />
            {t("backToHome")}
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto bg-white border-2 border-secondary-pale hover:border-primary text-gray-700 hover:text-primary font-bold text-[16px] px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {t("shopNow")}
          </Link>
        </div>
      </main>
    </div>
  );
}
