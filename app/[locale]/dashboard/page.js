import PrimaryButton from "@/components/common/PrimaryButton";
import { getMessages, setRequestLocale } from "next-intl/server";
import React from "react";

const DashboardPage = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getMessages({ locale });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your profile dashboard is not ready yet. If you want to track your
          order, click the button below.
        </p>

        {/* Button */}
        <PrimaryButton href={"/track-order"}>Track Order</PrimaryButton>
      </div>
    </div>
  );
};

export default DashboardPage;
