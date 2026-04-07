'use client';
import InputField from "@/components/common/InputField";
import { Link } from "@/i18n/routing";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Badge from "./Badge";
import { FaLock } from "react-icons/fa";
import SocialButton from "./SocialButton";
import Divider from "./Divider";
import { useLocale } from "next-intl";
import { redirect } from "next/navigation";
import AuthButton from "./AuthButton";



// ---------------- Registration Form ----------------
export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const locale = useLocale();

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const { data, error } = await authClient.signUp.email({
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        callbackURL: "/",
      });
      if (error) {
        toast.error(error.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে");
      } else {
        toast.success("রেজিস্ট্রেশন সফল হয়েছে!");
        redirect(`/${locale}`)
      }
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* header */}
      <div className="mb-7">
        <Badge> <FaLock /> নিরাপদ রেজিস্ট্রেশন</Badge>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          রেজিস্ট্রেশন
        </h2>
        <p className="text-gray-500 text-[15px]">
          নতুন অ্যাকাউন্ট তৈরি করতে নিচের তথ্যগুলো দিন
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          label="আপনার সম্পূর্ণ নাম"
          type="text"
          placeholder="যেমন: রহিম মিয়া"
          registerProps={register("fullName", { required: "নাম অবশ্যই দিতে হবে" })}
          error={errors.fullName?.message}
        />
        <InputField
          label="ইমেইল ঠিকানা"
          type="email"
          placeholder="rahad.doe@example.com"
          registerProps={register("email", { required: "ইমেইল অবশ্যই দিতে হবে" })}
          error={errors.email?.message}
        />
        <InputField
          label="মোবাইল নাম্বার"
          type="tel"
          placeholder="017XX-XXXXXX"
          registerProps={register("phone", {
            required: "মোবাইল নাম্বার দিতে হবে",
            pattern: {
              value: /^[0-9]{11}$/,
              message: "সঠিক ১১ সংখ্যার মোবাইল নাম্বার দিন",
            },
          })}
          error={errors.phone?.message}
        />

        <InputField
          label="নতুন পাসওয়ার্ড দিন"
          type="password"
          placeholder="অন্তত ৬ অক্ষরের পাসওয়ার্ড"
          registerProps={register("password", {
            required: "পাসওয়ার্ড দিতে হবে",
            minLength: { value: 6, message: "পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে" },
          })}
          error={errors.password?.message}
        />

        <AuthButton type="submit" disabled={loading}>
          {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
        </AuthButton>
      </form>

      {/* Social login */}
      <Divider label="অথবা দিয়ে লগইন করুন" />
      <div className="flex gap-2.5">
        <SocialButton
          icon="🌐"
          label="Google"
          onClick={() => toast("Google লগইন শীঘ্রই আসছে!")}
        />
        <SocialButton
          icon="📘"
          label="Facebook"
          onClick={() => toast("Facebook লগইন শীঘ্রই আসছে!")}
        />
      </div>

      <div className="mt-8 text-center text-[15px] text-gray-600 border-t border-earth-pale pt-6">
        আগে থেকেই অ্যাকাউন্ট আছে?
        <Link
          href="/signin"
          className="font-bold text-green-deep hover:text-green-mid hover:underline ml-1"
        >
          লগইন করুন
        </Link>
      </div>
    </>
  );
}