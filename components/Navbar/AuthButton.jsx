import { Link } from "@/i18n/routing";
import { authClient } from "@/lib/auth-client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

export default function AuthButton({ isMobile, onClick }) {
    const t = useTranslations("Navbar");
    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return (
            <div className="w-8 h-8 rounded-full border-2 border-gray-300 border-t-green-700 animate-spin"></div>
        );
    }

    if (session?.user) {
        return (
            <Link
                href="/dashboard"
                onClick={onClick}
                className={`flex items-center gap-2 font-medium transition-all ${isMobile
                    ? "px-4 py-3 bg-green-50 text-green-800 rounded-xl"
                    : "text-gray-700 hover:text-green-700"
                    }`}
            >
                {session.user.image ? (
                    <Image
                        src={session.user.image}
                        alt="Profile"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover border border-green-200"
                    />
                ) : (
                    <FaUserCircle className="w-8 h-8 text-green-700" />
                )}
                {isMobile && <span>{session.user.name || t("profile")}</span>}
            </Link>
        );
    }

    return (
        <Link
            href="/signin"
            onClick={onClick}
            className={`font-medium transition-all ${isMobile
                ? "block px-4 py-3 bg-green-700 text-white text-center rounded-xl hover:bg-green-800 mt-2"
                : "px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 shadow-sm text-sm"
                }`}
        >
            {t("login")}
        </Link>
    );
}