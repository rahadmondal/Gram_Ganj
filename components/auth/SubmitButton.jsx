// components/ui/SubmitButton.jsx

export default function SubmitButton({ loading, children, className = "" }) {
    return (
        <button
            type="submit"
            disabled={loading}
            className={[
                "relative w-full flex items-center justify-center gap-2.5",
                "bg-green-deep text-white font-noto font-bold text-base",
                "py-3.5 rounded-xl mt-1 border-none cursor-pointer overflow-hidden",
                "transition-all duration-250",
                "hover:not-disabled:bg-green-mid hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[0_10px_28px_rgba(45,90,39,0.28)]",
                "active:not-disabled:translate-y-0",
                "disabled:opacity-60 disabled:cursor-not-allowed",
                className,
            ].join(" ")}
        >
            {/* Shine overlay */}
            <span className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none" />

            {loading ? (
                <>
                    <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    প্রক্রিয়া হচ্ছে...
                </>
            ) : (
                children
            )}
        </button>
    );
}
