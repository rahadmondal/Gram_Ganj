'use client';
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
export default function InputField({ label, type, placeholder, error, registerProps }) {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
        <div>
            <label className="block text-[14px] font-semibold text-gray-700 mb-2">
                {label}
            </label>
            <div className="relative">
                <input
                    type={inputType}
                    placeholder={placeholder}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 ${error ? "border-red-500" : "border-earth-pale"
                        } bg-cream focus:bg-white focus:border-green-deep focus:ring-0 outline-none transition-all text-[15px]`}
                    {...registerProps}
                />
                {type === "password" && (
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <BiHide size={25} /> : <BiShow size={25} />}
                    </button>
                )}
            </div>
            {error && <p className="text-red-500 text-[13px] mt-1">{error}</p>}
        </div>
    );
}
