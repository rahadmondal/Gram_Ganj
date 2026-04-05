import { useTranslations } from "next-intl";
import React from "react";

const StatusSection = () => {
  const t = useTranslations("HomePage");

  return (
    <div className=" flex gap-8 mt-12 pt-8 border-t border-white/12 max-[600px]:gap-4">
      <div>
        <div className="text-[28px] font-bold text-earth-light">
          {t("statArtisanCount")}
        </div>
        <div className="text-xs text-white/55 font-medium uppercase tracking-[0.5px]">
          {t("statArtisanLabel")}
        </div>
      </div>

      <div>
        <div className="text-[28px] font-bold text-earth-light">
          {t("statDistrictCount")}
        </div>
        <div className="text-xs text-white/55 font-medium uppercase tracking-[0.5px]">
          {t("statDistrictLabel")}
        </div>
      </div>

      <div>
        <div className="text-[28px] font-bold text-earth-light">
          {t("statCustomerCount")}
        </div>
        <div className="text-xs text-white/55 font-medium uppercase tracking-[0.5px]">
          {t("statCustomerLabel")}
        </div>
      </div>
    </div>
  );
};

export default StatusSection;
