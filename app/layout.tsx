import { ReactNode } from "react";

// এই ফাইলটির কাজ হলো Next.js-কে ডিফল্ট লেআউট তৈরি করা থেকে বিরত রাখা
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
