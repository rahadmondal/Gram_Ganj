"use client";

import AuthButton from "@/components/auth/AuthButton";
import Divider from "@/components/auth/Divider";
import InputField from "@/components/common/InputField";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaKey } from "react-icons/fa";
import { FaLeftLong } from "react-icons/fa6";
import { useTranslations, useLocale } from "next-intl";
import { CiMail } from "react-icons/ci";

export default function ForgotPasswordPage() {
    const t = useTranslations("ForgotPasswordPage");
    const locale = useLocale(); // বর্তমান ভাষা বের করার জন্য

    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        setApiError("");

        try {
            // Better Auth এর forgetPassword মেথড কল করা হচ্ছে
            const { data: responseData, error } = await authClient.requestPasswordReset({
                email: data.email,
                redirectTo: `/${locale}/reset-password`,
            });
            if (error) {
                setApiError(error.message || t("errors.sendFailed"));
            } else {
                setIsSuccess(true);
            }
        } catch (err) {
            console.log(err);
            setApiError(t("errors.serverError"));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col justify-center items-center px-5 py-10 relative overflow-hidden">
            {/* Background Decorative Blur Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Main Card */}
            <div className="w-full max-w-125 p-8 sm:p-10 flex flex-col justify-center bg-white rounded-3xl shadow-soft border border-green-light relative z-10">
                {/* যদি ইমেইল সফলভাবে পাঠানো হয়, তবে এই অংশটি দেখাবে */}
                {isSuccess ? (
                    <div className="text-center flex flex-col items-center animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-primary-pale text-primary rounded-full flex items-center justify-center text-4xl mb-6">
                            <CiMail />
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            {t("success.title")}
                        </h2>
                        <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                            {t("success.description")}
                        </p>
                        <Link
                            href={`/${locale}/signin`}
                            className="w-full bg-white border-2 border-primary text-primary hover:bg-primary-pale font-serif font-bold text-lg py-3.5 rounded-xl transition-all block text-center"
                        >
                            {t("success.backToLogin")}
                        </Link>
                    </div>
                ) : (
                    /* মেইল পাঠানোর ফর্ম */
                    <>
                        <div className="mb-8 text-center sm:text-left flex flex-col items-center sm:items-start">
                            <div className="w-14 h-14 bg-primary-pale text-primary rounded-full flex items-center justify-center text-2xl mb-4">
                                <FaKey className="text-green-deep" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                                {t("form.title")}
                            </h2>
                            <p className="text-gray-500 text-[15px] leading-relaxed">
                                {t("form.description")}
                            </p>
                        </div>

                        {/* API Error Message */}
                        {apiError && (
                            <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-200">
                                {apiError}
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <InputField
                                label={t("fields.email.label")}
                                type="email"
                                placeholder={t("fields.email.placeholder")}
                                registerProps={register("email", {
                                    required: t("validation.requiredEmail"),
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: t("validation.invalidEmail"),
                                    },
                                })}
                                error={errors.email?.message}
                            />

                            <AuthButton type="submit" disabled={isLoading}>
                                {isLoading ? t("buttons.sending") : t("buttons.sendLink")}
                            </AuthButton>
                        </form>

                        <Divider label={t("divider")} />

                        {/* Back to Login Link */}
                        <div className="text-center text-[15px] text-gray-600 flex items-center justify-center gap-2">
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
        </div>
    );
}