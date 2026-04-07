// ---------------- Reusable Button ----------------
export default function AuthButton({ children, className, ...rest }) {
    return (
        <button
            className={`w-full bg-green-deep hover:bg-green-mid text-white cursor-pointer font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-green-deep/30 hover:-translate-y-0.5 mt-4 ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
