import React from 'react';
// React Icons ইমপোর্ট করা হলো
import { FaHandshakeAngle, FaScaleBalanced } from "react-icons/fa6";
import { BsGlobeAmericas, BsHouseHeartFill } from "react-icons/bs";

// মিশনের ডেটাগুলো (আইকনসহ)
const missionData = [
    {
        id: 1,
        icon: <FaHandshakeAngle />, // '🤝' এর বদলে হ্যান্ডশেক আইকন
        title: "সরাসরি সংযোগ",
        description: "কারিগর ও ক্রেতার মধ্যে সরাসরি সম্পর্ক"
    },
    {
        id: 2,
        icon: <FaScaleBalanced />, // '💰' এর বদলে ন্যায্য মূল্যের (দাঁড়িপাল্লা) আইকন
        title: "ন্যায্য মূল্য",
        description: "কারিগর পান সঠিক মূল্য, ক্রেতা পান সেরা দাম"
    },
    {
        id: 3,
        icon: <BsGlobeAmericas />, // '🌿' এর বদলে পরিবেশ/গ্লোব আইকন
        title: "পরিবেশবান্ধব",
        description: "টেকসই ও প্রাকৃতিক উপকরণে তৈরি পণ্য"
    },
    {
        id: 4,
        icon: <BsHouseHeartFill />, // '🏘️' এর বদলে গ্রামীণ/ঘর আইকন
        title: "গ্রামীণ উন্নয়ন",
        description: "গ্রামীণ অর্থনীতি ও কারিগরদের জীবনমান উন্নয়ন"
    }
];

const MissionSection = () => {
    return (
        <section className="bg-white py-18 ">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-green-pale text-green-deep text-[11px] font-bold tracking-[2px] uppercase px-3.5 py-1.25 rounded-[20px] mb-3.5">
                        <span className="mr-1">💚</span> আমাদের লক্ষ্য
                    </div>
                    <h2 className="font-noto text-[clamp(22px,4vw,36px)] text-text-dark mb-2.5 leading-[1.3]">
                        কেন গ্রামীণ বাজার?
                    </h2>
                </div>

                {/* Mission Cards Grid */}
                <div className="grid grid-cols-4 gap-6 mt-5 max-[900px]:grid-cols-2 max-[600px]:grid-cols-2">
                    {missionData.map((mission) => (
                        <div
                            key={mission.id}
                            className="mission-card text-center py-8 px-5 rounded-2xl border-2 border-border transition-all duration-200 hover:border-green-mid group"
                        >
                            {/* React Icon রেন্ডার করা হচ্ছে */}
                            <span className="text-[40px] text-green-deep mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                {mission.icon}
                            </span>
                            <div className="font-noto text-base font-bold text-text-dark mb-2">
                                {mission.title}
                            </div>
                            <div className="text-[13px] text-text-mid leading-relaxed">
                                {mission.description}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MissionSection;