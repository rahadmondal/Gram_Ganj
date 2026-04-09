import React from "react";
import { FaCheck, FaEdit, FaPhone, FaUser, FaCamera, FaCalendarAlt, FaCrown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ProfileHero = () => {
    return (
        <div className="bg-green-deep relative overflow-hidden">
            {/* Radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(
              ellipse at 80% 50%,
              rgba(196, 149, 106, 0.18) 0%,
              transparent 55%
            ),
            radial-gradient(
              ellipse at 10% 80%,
              rgba(125, 175, 106, 0.14) 0%,
              transparent 45%
            )
          `,
                }}
            ></div>

            {/* SVG rings */}
            <svg
                className="absolute right-0 bottom-0 w-64 h-64 opacity-[.06] pointer-events-none"
                viewBox="0 0 300 300"
                fill="none"
            >
                <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="1" />
                <circle cx="300" cy="300" r="140" stroke="white" strokeWidth="1" />
                <circle cx="300" cy="300" r="80" stroke="white" strokeWidth="1" />
            </svg>

            <div className="container relative z-10 py-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-5">

                    {/* Avatar */}
                    <div className="relative shrink-0">
                        <div className="avatar-ring w-24 h-24 rounded-3xl bg-green-mid/30 border-[3px] border-earth-light/60 flex items-center justify-center text-3xl shadow-2xl text-white">
                            <FaUser />
                        </div>

                        <button
                            className="absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-xl bg-earth-light border-2 border-white flex items-center justify-center text-sm cursor-pointer hover:bg-accent transition-colors shadow-lg"
                        >
                            <FaCamera />
                        </button>

                        <span className="online-dot absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full border-2 border-green-deep"></span>
                    </div>

                    {/* User info */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                            <h1 className="font-noto text-2xl font-bold text-white">
                                নাহিদা সুলতানা
                            </h1>

                            <span className="flex items-center gap-1 bg-earth-light/25 text-earth-light border border-earth-light/30 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                                <FaCheck /> যাচাইকৃত
                            </span>
                        </div>

                        <p className="flex items-center gap-2 text-white/55 text-sm mb-3">
                            nahida@example.com · <FaPhone /> 01712-345678
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <span className="flex items-center gap-1 bg-white/10 border border-white/15 text-white/75 text-xs font-medium px-3 py-1 rounded-full">
                                <FaLocationDot /> ঢাকা, বাংলাদেশ
                            </span>

                            <span className="flex items-center gap-1 bg-white/10 border border-white/15 text-white/75 text-xs font-medium px-3 py-1 rounded-full">
                                <FaCalendarAlt /> সদস্য: জানুয়ারি ২০২৪
                            </span>

                            <span className="flex items-center gap-1 bg-white/10 border border-white/15 text-white/75 text-xs font-medium px-3 py-1 rounded-full">
                                <FaCrown /> প্রিমিয়াম সদস্য
                            </span>
                        </div>
                    </div>

                    {/* Edit profile button */}
                    <button
                        className="shrink-0 flex items-center gap-2 bg-white/12 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200"
                    >
                        <FaEdit /> প্রোফাইল সম্পাদনা
                    </button>
                </div>

                {/* Stats strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10">
                    {[
                        { value: "২৪", label: "মোট অর্ডার" },
                        { value: "৮", label: "উইশলিস্ট" },
                        { value: "৳৩৪,৫৬০", label: "মোট ব্যয়" },
                        { value: "১২", label: "রিভিউ দিয়েছি" },
                    ].map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="font-playfair text-2xl font-bold text-earth-light">
                                {item.value}
                            </div>
                            <div className="text-[11px] text-white/45 uppercase tracking-[.5px] mt-0.5 font-noto">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileHero;