import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FeatureBar() {
  const t = useTranslations("HomePage");

  const features = [
    {
      icon: "https://placehold.co/36x36",
      text: t("featCOD"),
    },
    {
      icon: "https://placehold.co/36x36",
      text: t("featReturn"),
    },
    {
      icon: "https://placehold.co/36x36",
      text: t("featGuarantee"),
    },
    {
      icon: "https://placehold.co/36x36",
      text: t("featSupport"),
    },
    {
      icon: "https://placehold.co/36x36",
      text: t("featEco"),
    },
  ];

  return (
    <div className="bg-earth-pale border-b border-border px-5 py-4">
      <div className="container flex justify-between flex-wrap gap-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 text-[13px] font-semibold text-earth-dark"
          >
            <div
              className="w-9 h-9 bg-white rounded-lg flex items-center justify-center"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Image
                src={item.icon || "https://placehold.co/36x36"}
                alt="icon"
                width={20}
                height={20}
              />
            </div>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
