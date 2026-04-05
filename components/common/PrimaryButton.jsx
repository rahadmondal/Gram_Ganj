import React from "react";
import { Link } from "../../i18n/routing";

const PrimaryButton = ({
  href,
  onClick,
  children,
  className = "",
  type = "button",
}) => {
  const baseStyle =
    "btn-primary bg-earth-light text-white border-none px-7 py-4 rounded-xl text-base font-bold font-hind cursor-pointer transition-all duration-200 no-underline inline-flex items-center gap-2 min-h-[52px] max-[600px]:w-full max-[600px]:justify-center hover:bg-earth-mid hover:shadow-soft";

  // 👉 If link
  if (href) {
    return (
      <Link href={href} className={`${baseStyle} ${className}`}>
        {children}
      </Link>
    );
  }

  // 👉 If button
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
