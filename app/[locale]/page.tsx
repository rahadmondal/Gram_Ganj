import CategoriesSection from "@/components/homepage/CategoriesSection";
import FeatureBar from "@/components/homepage/FeatureBar";
import HeroSection from "@/components/homepage/HeroSection";
import { getTranslations, setRequestLocale } from "next-intl/server";
interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home(props: HomeProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");

  return (
    <div className="">
      <HeroSection />
      <FeatureBar />
      <CategoriesSection />
    </div>
  );
}
