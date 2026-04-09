// components/auth/LoginForm.jsx
"use client";
import Badge from "@/components/auth/Badge";
import Divider from "@/components/auth/Divider";
import SocialButton from "@/components/auth/SocialButton";
import InputField from "@/components/common/InputField";
import { Link } from "@/i18n/routing";
import { authClient } from "@/lib/auth-client";
import { useLocale } from "next-intl";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaLock } from "react-icons/fa";
import AuthButton from "./AuthButton";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);
    const locale = useLocale();



    // ── Submit ──────────────────────────────────────────
    const onSubmit = async (formData) => {
        setLoading(true);
        try {
            const { error } = await authClient.signIn.email({
                email: formData.email,
                password: formData.password,
                callbackURL: `/${locale}/profile`,
                rememberMe: formData.rememberMe,
            });
            if (error) {
                toast.error(error.message || "লগইন ব্যর্থ হয়েছে");
            } else {
                toast.success(`${locale === "en" ? "Login successful!" : "লগইন সফল হয়েছে!"}`);
                redirect(`/${locale}/profile`);
            }
        } catch (err) {
            toast.error(`${locale === "en" ? "An error occurred during login." : "লগইন করার সময় একটি ত্রুটি ঘটেছে."}`);
        } finally {
            setLoading(false);
        }
    };

    // ── Render ──────────────────────────────────────────
    return (
        <>
            {/* Header */}
            <div className="mb-7">
                <Badge> <FaLock /> নিরাপদ লগইন</Badge>
                <h2 className=" text-3xl font-bold text-gray-900 mb-2">
                    লগইন করুন
                </h2>
                <p className="text-gray-500 text-[15px]">
                    আপনার অ্যাকাউন্টে প্রবেশ করতে তথ্যগুলো দিন
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    label="ইমেইল ঠিকানা"
                    type="email"
                    placeholder="rahad.doe@example.com"
                    registerProps={register("email", { required: "ইমেইল অবশ্যই দিতে হবে" })}
                    error={errors.email?.message}
                />
                <InputField
                    label="পাসওয়ার্ড"
                    type="password"
                    placeholder="আপনার পাসওয়ার্ড"
                    registerProps={register("password", {
                        required: "পাসওয়ার্ড দিতে হবে",
                        minLength: { value: 6, message: "পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে" },
                    })}
                    error={errors.password?.message}
                />
                <div className="flex items-center justify-between mb-5 -mt-1">
                    <label className="flex items-center gap-2 text-xs text-text-mid cursor-pointer">
                        <input
                            type="checkbox"
                            className="accent-green-deep w-3.5 h-3.5 cursor-pointer"
                            {...register("rememberMe")}
                        />
                        মনে রাখুন
                    </label>
                    <Link
                        href="/forgot-password"
                        className="text-xs font-semibold text-earth-mid
                       hover:text-green-deep transition-colors"
                    >
                        পাসওয়ার্ড ভুলে গেছেন?
                    </Link>
                </div>

                <AuthButton type="submit" disabled={loading}>
                    {loading ? "লগইন হচ্ছে..." : "লগইন"}
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

            {/* Switch to register */}
            <p className="mt-6 text-center text-[15px] text-text-mid pt-5 border-t border-border">
                নতুন ব্যবহারকারী?{" "}
                <Link
                    href="/signup"
                    className="font-bold text-green-deep hover:text-green-mid hover:underline"
                >
                    অ্যাকাউন্ট তৈরি করুন
                </Link>
            </p>
        </>
    );
}
