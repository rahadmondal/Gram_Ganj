import { Link } from "@/i18n/routing";
import PrimaryButton from "../common/PrimaryButton";
import StatusSection from "./StatusSection";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="bg-green-deep relative overflow-hidden min-h-[88vh] flex items-center">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(125,175,106,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(196,149,106,0.12) 0%, transparent 40%)",
        }}
      ></div>

      {/* Decorative SVG */}
      <svg
        className="absolute -right-15 top-1/2 -translate-y-1/2 w-120 h-120 opacity-[0.08]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <ellipse
          cx="200"
          cy="200"
          rx="160"
          ry="80"
          stroke="white"
          strokeWidth="1"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="80"
          ry="160"
          stroke="white"
          strokeWidth="1"
        />
        <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="1" />
        <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1" />
        <circle cx="200" cy="200" r="40" stroke="white" strokeWidth="1" />
      </svg>

      <div className="max-w-275 mx-auto px-5 py-15 grid grid-cols-2 gap-15 items-center relative z-2 max-[900px]:grid-cols-1">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/12 border border-white/20 text-[#c8e6b8] text-xs font-semibold px-3.5 py-1.5 rounded-[30px] tracking-wider uppercase mb-6">
            {t("heroBadge")}
          </div>

          <h1 className="text-[clamp(30px,5vw,52px)] text-white leading-tight mb-3 font-bold">
            {t("heroTitle1")}
            <br />
            <span className="text-earth-light italic">{t("heroTitle2")}</span>
          </h1>

          <p className="text-[18px] text-white/75 mb-2.5 font-light">
            {t("heroDesc1")}
          </p>

          <p className="text-[13px] text-white/50 mb-9 italic">
            <em>{t("heroDesc2")}</em>
          </p>

          <div className="flex gap-3 flex-wrap max-[600px]:flex-col">
            <PrimaryButton href="/products">{t("btnShopNow")}</PrimaryButton>

            <Link
              href="/about"
              className="btn-outline bg-transparent text-white border-2 border-white/35 px-6 py-4 rounded-xl text-[15px] font-semibold cursor-pointer transition-all duration-200 no-underline inline-flex items-center gap-2 min-h-13 max-[600px]:w-full max-[600px]:justify-center"
            >
              {t("btnWatchStory")}
            </Link>
          </div>

          {/* Stats section */}
          <StatusSection />
        </div>

        <div className="grid grid-cols-2 gap-3 rounded-[20px] overflow-hidden max-[900px]:hidden">
          <div className="bg-white/6 rounded-xl overflow-hidden flex items-center justify-center text-[72px] relative border border-white/8 row-span-2">
            🧵
            <span className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/50 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md text-center">
              {t("catClothing")}
            </span>
          </div>

          <div className="bg-white/6 rounded-xl overflow-hidden flex items-center justify-center text-[48px] relative border border-white/8 h-50">
            🏺
            <span className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/50 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md text-center">
              {t("catPottery")}
            </span>
          </div>

          <div className="bg-white/6 rounded-xl overflow-hidden flex items-center justify-center text-[48px] relative border border-white/8 h-50">
            🍿
            <span className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/50 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md text-center">
              {t("catFood")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
