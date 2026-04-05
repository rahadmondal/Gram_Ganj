import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarker,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-earth-dark text-white/75 py-15 px-5 pb-8">
      <div className="container mx-auto grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:gap-8">
        {/* Company Info & Social Links */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 bg-green-deep rounded-full flex items-center justify-center text-xl">
              🌿
            </div>
            <div>
              <div className=" text-[17px] font-bold text-earth-light">
                {t("brandName")}
              </div>
              <div className="text-[11px] text-white/40 font-medium tracking-widest uppercase">
                {t("brandSubName")}
              </div>
            </div>
          </div>
          <p className="text-sm mt-4 mb-4 leading-[1.7] text-white/60 ">
            {t("description")}
          </p>
          <div className="flex gap-2.5 mt-5">
            <Link
              className="social-btn w-9.5 h-9.5 bg-white/8 rounded-lg flex items-center justify-center text-[18px] no-underline cursor-pointer transition-colors duration-200"
              href="#"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-btn w-9.5 h-9.5 bg-white/8 rounded-lg flex items-center justify-center text-[18px] no-underline cursor-pointer transition-colors duration-200"
              href="#"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-btn w-9.5 h-9.5 bg-white/8 rounded-lg flex items-center justify-center text-[18px] no-underline cursor-pointer transition-colors duration-200"
              href="#"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
        {/* Products popular Categories */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-[1px] mb-4.5">
            {t("titleProducts")}
          </h4>
          <ul className="list-none">
            <li className="mb-2.5">
              <Link
                href="#"
                className="footer-link text-white/60 no-underline text-sm transition-colors duration-200 "
              >
                {t("prodClothing")}
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                href="#"
                className="footer-link text-white/60 no-underline text-sm transition-colors duration-200 "
              >
                {t("prodPottery")}
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                href="#"
                className="footer-link text-white/60 no-underline text-sm transition-colors duration-200 "
              >
                {t("prodFood")}
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                href="#"
                className="footer-link text-white/60 no-underline text-sm transition-colors duration-200 "
              >
                {t("prodNakshiKatha")}
              </Link>
            </li>
          </ul>
        </div>
        {/* Information */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-[1px] mb-4.5">
            {t("titleInfo")}
          </h4>
          <ul className="list-none">
            <li className="mb-2.5">
              <Link
                href="#"
                className="footer-link text-white/60 no-underline text-sm transition-colors duration-200 "
              >
                {t("infoStory")}
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                href="#"
                className="footer-link text-white/60 no-underline text-sm transition-colors duration-200 "
              >
                {t("infoArtisan")}
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                href="#"
                className="footer-link text-white/60 no-underline text-sm transition-colors duration-200 "
              >
                {t("infoReturn")}
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                href="#"
                className="footer-link text-white/60 no-underline text-sm transition-colors duration-200 "
              >
                {t("infoPrivacy")}
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-[1px] mb-4.5">
            {t("titleContact")}
          </h4>
          <div className="flex items-start gap-2.5 mb-3 text-sm text-white/60">
            <span className="text-base shrink-0 mt-0.5">
              <FaPhone />
            </span>{" "}
            {t("contactPhone")}
          </div>
          <div className="flex items-start gap-2.5 mb-3 text-sm text-white/60">
            <span className="text-base shrink-0 mt-0.5">
              <FaEnvelope />
            </span>{" "}
            {t("contactEmail")}
          </div>
          <div className="flex items-start gap-2.5 mb-3 text-sm text-white/60">
            <span className="text-base shrink-0 mt-0.5">
              <FaMapMarker />
            </span>{" "}
            {t("contactAddress")}
          </div>
        </div>
      </div>
      {/* Copyright  */}
      <div className="border-t border-white/10 pt-6 flex justify-between items-center flex-wrap gap-3 text-[13px] text-white/40">
        <span>{t("copyright")}</span>
        <span>{t("madeWithLove")}</span>
      </div>
    </footer>
  );
};

export default Footer;
