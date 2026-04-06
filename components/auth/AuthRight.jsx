// components/auth/AuthRight.jsx

export default function AuthRight({ children }) {
    return (
        <div className="flex-1 bg-white flex flex-col justify-center items-center
                    px-8 py-12 relative overflow-hidden min-h-screen">

            {/* Decorative top-right glow */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full
                      bg-green-pale opacity-40 pointer-events-none" />

            {/* Decorative bottom-left glow */}
            <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full
                      bg-earth-pale opacity-50 pointer-events-none" />

            {/* Form content */}
            <div className="w-full max-w-100 relative z-10 animate-[fadeUp_.45s_ease_both]">
                {children}
            </div>
        </div>
    );
}
