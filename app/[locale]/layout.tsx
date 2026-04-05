import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { routing } from "@/i18n/routing";

// ১. গুগল ফন্ট থেকে আপনার পছন্দের ইংরেজি ও বাংলা ফন্ট ইমপোর্ট করুন
import { Inter, Noto_Sans_Bengali } from "next/font/google";

// ২. ফন্টগুলো ইনিশিয়ালাইজ করুন
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Grameen Bazar | গ্রামীণ বাজার",
  description: "Authentic handcrafted products from Bangladesh",
};

// Props type
interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

// Async Layout
const LocaleLayout = async (props: LocaleLayoutProps) => {
  const { children } = props;
  const { locale } = await props.params;

  // start the locale for this request
  setRequestLocale(locale);

  // translations are loaded in parallel with the UI rendering
  const messages = await getMessages();

  // lazy load the font based on the locale
  const currentFontClass =
    locale === "bn" ? notoBengali.className : inter.className;

  return (
    <html suppressHydrationWarning lang={locale} className="h-full antialiased">
      <body className={`${currentFontClass} min-h-full flex flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
