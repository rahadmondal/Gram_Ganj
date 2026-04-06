// components/ui/InputField.jsx

export default function InputField({
    label,
    icon,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    rightSlot,
    hint,
}) {
    return (
        <div className="mb-4">
            {/* Label */}
            <label className="block text-[13px] font-semibold text-gray-800 mb-1.5 font-noto">
                {label}
            </label>

            {/* Input wrapper */}
            <div className="relative">
                {icon && (
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base
                           text-text-light pointer-events-none select-none
                           transition-colors duration-200">
                        {icon}
                    </span>
                )}

                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={[
                        "w-full py-3 border-2 rounded-xl text-sm font-hind bg-cream text-gray-900",
                        "outline-none transition-all duration-200 placeholder:text-text-light placeholder:text-xs",
                        icon ? "pl-10" : "pl-4",
                        rightSlot ? "pr-10" : "pr-4",
                        error
                            ? "border-danger focus:shadow-[0_0_0_4px_rgba(192,57,43,0.10)]"
                            : "border-border focus:border-green-mid focus:bg-white focus:shadow-[0_0_0_4px_rgba(74,124,63,0.10)]",
                    ].join(" ")}
                />

                {rightSlot && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {rightSlot}
                    </div>
                )}
            </div>

            {/* Hint text */}
            {hint && !error && (
                <p className="text-[11px] text-text-light mt-1">{hint}</p>
            )}

            {/* Error text */}
            {error && (
                <p className="text-[11px] text-danger mt-1 flex items-center gap-1 font-semibold">
                    <span>⚠</span> {error}
                </p>
            )}
        </div>
    );
}
