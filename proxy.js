import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
const intlMiddleware = createIntlMiddleware({
  ...routing,
  localeDetection: true,
});

export default async function middleware(request) {
  const { pathname } = request.nextUrl;

  // ১. সেশন চেক করা (Better Auth এর জন্য request.headers পাস করতে হবে)
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const isLoggedIn = !!session; // সেশন থাকলে true, না থাকলে false

  // ২. প্রটেক্টেড রুট চেক (যেমন: /dashboard)
  // মনে রাখবেন: next-intl এর কারণে pathname এ /en/dashboard বা /bn/dashboard থাকতে পারে
  const isProfilePage = pathname.includes("/profile");
  const isAuthPage =
    pathname.includes("/signin") || pathname.includes("/signup");

  if (isProfilePage && !isLoggedIn) {
    // লগইন করা না থাকলে লগইন পেজে পাঠান
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (isAuthPage && isLoggedIn) {
    // লগইন করা থাকলে ড্যাশবোর্ডে পাঠান
    return NextResponse.redirect(new URL("/profile/orders", request.url));
  }

  // ৩. সব ঠিক থাকলে next-intl মিডলওয়্যার কল করুন
  return intlMiddleware(request);
}

export const config = {
  // এই প্যাটার্নটি api এবং স্ট্যাটিক ফাইল বাদ দিয়ে বাকি সব রুট কভার করবে
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
