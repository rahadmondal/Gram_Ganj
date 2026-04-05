import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  ...routing,
  localeDetection: true,
});

export const config = {
  // কোন কোন পাথে মিডলওয়্যার কাজ করবে তা ডিফাইন করা
  matcher: ["/", "/(bn|en)/:path*"],
};
