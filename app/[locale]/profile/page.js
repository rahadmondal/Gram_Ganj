import PrimaryButton from "@/components/common/PrimaryButton";
import { getMessages, setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";

const DashboardPage = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getMessages({ locale });

  redirect("/profile/orders"); // default tab
};

export default DashboardPage;
