"use client";
import Link from "next/link";
import "./globals.css";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-600 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-500 mb-8">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="bg-green-700 text-white px-6 py-3 rounded-xl font-medium"
          >
            Go to Homepage
          </Link>
        </div>
      </body>
    </html>
  );
}
