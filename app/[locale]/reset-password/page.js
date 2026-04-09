"use client";

import AuthButton from "@/components/auth/AuthButton";
import InputField from "@/components/common/InputField";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react"; // <-- Suspense ইমপোর্ট করা হলো
import { useForm } from "react-hook-form";
import { FaLock, FaRegCheckCircle } from "react-icons/fa";
import { FaLeftLong } from "react-icons/fa6";
import { useTranslations, useLocale } from "next-intl";

// ১. মূল ফর্মের জন্য একটি আলাদা কম্পোনেন্ট তৈরি করা হলো
function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const t = useTranslations("ResetPasswordPage");
  const locale = useLocale();

  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const newPassword = watch("newPassword", "");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError("");

    try {
      const { data: responseData, error } = await authClient.resetPassword({
        newPassword: data.newPassword,
        token,
      });

      if (error) {
        setApiError(error.message || t("errors.updateFailed"));
      } else {
        setIsSuccess(true);
        setTimeout(() => {
          router.push(`/${locale}/signin`);
        }, 3000);
      }
    } catch (err) {
      setApiError(t("errors.serverError"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-125 p-8 sm:p-10 flex flex-col justify-center bg-white rounded-3xl shadow-soft border border-secondary-pale relative z-10">
      {isSuccess ? (
        <div className="text-center flex flex-col items-center animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-sm">
            <FaRegCheckCircle />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t("success.title")}
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
            {t("success.description")}
          </p>
          <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="mb-8 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="w-14 h-14 bg-primary-pale text-primary rounded-full flex items-center justify-center text-2xl mb-4">
              <FaLock className="text-green-mid" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
              {t("form.title")}
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              {t("form.description")}
            </p>
          </div>

          {apiError && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-200">
              {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <InputField
              label={t("fields.newPassword.label")}
              type="password"
              placeholder={t("fields.newPassword.placeholder")}
              registerProps={register("newPassword", {
                required: t("validation.requiredNewPassword"),
                minLength: {
                  value: 8,
                  message: t("validation.minLength"),
                },
              })}
              error={errors.newPassword?.message}
            />

            <InputField
              label={t("fields.confirmPassword.label")}
              type="password"
              placeholder={t("fields.confirmPassword.placeholder")}
              registerProps={register("confirmPassword", {
                required: t("validation.requiredConfirmPassword"),
                validate: (value) =>
                  value === newPassword || t("validation.passwordMismatch"),
              })}
              error={errors.confirmPassword?.message}
            />

            <AuthButton type="submit" disabled={isLoading}>
              {isLoading ? t("buttons.updating") : t("buttons.save")}
            </AuthButton>
          </form>

          <div className="mt-8 text-center text-[15px] text-gray-600 border-t border-secondary-pale pt-6 flex items-center justify-center gap-2">
            <FaLeftLong />
            <Link
              href={`/${locale}/signin`}
              className="font-bold text-primary hover:text-primary-hover hover:underline"
            >
              {t("links.backToLogin")}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

// ২. মেইন পেজ কম্পোনেন্ট, যেখানে Suspense ব্যবহার করা হয়েছে
export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-5 py-10 relative overflow-hidden">
      {/* Background Decorative Blur Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Suspense দিয়ে মূল কন্টেন্ট মুড়িয়ে দেওয়া হলো */}
      <Suspense
        fallback={
          // লোডিং স্টেটে একটি স্পিনার বা টেক্সট দেখাতে পারেন
          <div className="flex flex-col items-center justify-center relative z-10">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <ResetPasswordContent />
      </Suspense>
    </div>
  );
}
