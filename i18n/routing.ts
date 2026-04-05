import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "bn"],
  defaultLocale: "bn", // ডিফল্ট ভাষা বাংলা
  localePrefix: "always", // URL এ সব সময় /bn বা /en থাকবে
});

// এই কাস্টম হুকগুলো দিয়ে আমরা নেভিগেশন হ্যান্ডেল করব
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
