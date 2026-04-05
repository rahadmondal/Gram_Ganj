import { getMessages, setRequestLocale } from "next-intl/server";
import React from "react";

const Dashbroadpage = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getMessages({ locale });
  console.log(t)

  return <div>Dashbroad</div>;
};

export default Dashbroadpage;
