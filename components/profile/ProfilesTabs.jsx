import Link from "next/link";
import { FaBox, FaHeart, FaMapMarkerAlt, FaStar, FaCog } from "react-icons/fa";

const ProfileTabs = ({ activeTab }) => {
    const tabs = [
        { id: "orders", label: "আমার অর্ডার", icon: <FaBox className="text-[14px] sm:text-base" />, count: 24 },
        { id: "wishlist", label: "উইশলিস্ট", icon: <FaHeart className="text-[14px] sm:text-base" />, count: 8 },
        { id: "addresses", label: "ঠিকানা", icon: <FaMapMarkerAlt className="text-[14px] sm:text-base" /> },
        { id: "reviews", label: "আমার রিভিউ", icon: <FaStar className="text-[14px] sm:text-base" /> },
        { id: "settings", label: "সেটিংস", icon: <FaCog className="text-[14px] sm:text-base" /> },
    ];

    return (
        <div
            className="bg-white border-b border-border sticky top-16 z-40 transition-all"
            style={{ boxShadow: "0 2px 8px rgba(93, 61, 30, 0.04)" }}
        >
            <div className="container mx-auto sm:px-5">
                <div className="flex overflow-x-auto flex-nowrap items-center gap-1 sm:gap-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;

                        return (
                            <Link
                                key={tab.id}
                                href={`/profile/${tab.id}`}
                                className={`relative shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-3 sm:py-4 text-[13px] sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap group rounded-t-lg
                  ${isActive ? "text-green-deep" : "text-gray-500 hover:text-green-deep hover:bg-green-pale/30"}`}
                            >
                                {/* Icon wrapper with hover scaling effect */}
                                <span className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                                    {tab.icon}
                                </span>

                                <span>{tab.label}</span>

                                {tab.count && (
                                    <span
                                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-0.5 transition-colors duration-200
                      ${isActive ? "bg-green-pale text-green-deep" : "bg-gray-100 text-gray-500 group-hover:bg-green-pale group-hover:text-green-deep"}`}
                                    >
                                        {tab.count}
                                    </span>
                                )}

                                {/* Smooth Animated Active Bottom Border */}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.75 bg-green-deep rounded-t-full animate-in fade-in zoom-in-95 duration-300 shadow-[0_-1px_3px_rgba(0,128,0,0.2)]"></span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProfileTabs;