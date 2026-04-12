import React from 'react';
// React Icons ইমপোর্ট করা হলো
import { FaSeedling, FaHouseChimney, FaLeaf, FaCircleCheck, FaUser, FaUserTie } from "react-icons/fa6";
import { BsPersonHeart } from "react-icons/bs";

// স্টোরি লিস্টের ডেটা
const storyList = [
    "সরাসরি কারিগরের কাছ থেকে কিনুন — মধ্যস্থতাকারী নেই",
    "প্রতিটি পণ্যের সাথে কারিগরের গল্প জানুন",
    "ক্যাশ অন ডেলিভারি — পণ্য দেখে তারপর টাকা দিন",
    "১০০% খাঁটি ও হাতে তৈরি — কোনো কারখানার পণ্য নয়"
];

// কারিগরদের ডেটা
const makersData = [
    {
        id: 1,
        name: "রহিমা বেগম",
        location: "টাঙ্গাইল",
        icon: <FaUser className="text-white/80" />
    },
    {
        id: 2,
        name: "আলী হোসেন",
        location: "রাজশাহী",
        icon: <FaUserTie className="text-white/80" />
    },
    {
        id: 3,
        name: "সুফিয়া খাতুন",
        location: "ময়মনসিংহ",
        icon: <FaUser className="text-white/80" />
    }
];

const VillageStory = () => {
    return (
        <section className="bg-green-deep text-white py-18" >
            <div className="container mx-auto grid grid-cols-2 gap-16 items-center max-[900px]:grid-cols-1">

                {/* Left Side: Stats / Visuals */}
                <div className="grid grid-cols-2 gap-3 max-[900px]:hidden">

                    <div className="bg-white/[0.07] border border-white/10 rounded-2xl p-8 text-center col-span-2 hover:bg-white/10 transition-colors duration-300">
                        <span className="text-[48px] text-[#c8e6b8] mb-4 flex justify-center">
                            <FaSeedling />
                        </span>
                        <div className="text-[13px] text-white/65 font-noto">
                            বাংলাদেশের ৬৪ জেলা থেকে আসা কারিগরদের হাতে তৈরি পণ্য
                        </div>
                    </div>

                    <div className="bg-white/[0.07] border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300">
                        <span className="text-[48px] text-[#c8e6b8] mb-4 flex justify-center">
                            <BsPersonHeart />
                        </span>
                        <div className="text-[13px] text-white/65 font-noto">দক্ষ কারিগর</div>
                    </div>

                    <div className="bg-white/[0.07] border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300">
                        <span className="text-[48px] text-[#c8e6b8] mb-4 flex justify-center">
                            <FaHouseChimney />
                        </span>
                        <div className="text-[13px] text-white/65 font-noto">গ্রামীণ জীবন</div>
                    </div>

                </div>

                {/* Right Side: Text & Content */}
                <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-white/12 text-[#c8e6b8] text-[11px] font-bold tracking-[2px] uppercase px-3.5 py-1.25 rounded-[20px] mb-3.5">
                        <FaLeaf className="text-sm" /> আমাদের গল্প
                    </div>

                    <h2 className="font-noto text-[clamp(22px,4vw,36px)] text-white text-left mb-2.5 leading-[1.3]">
                        গ্রামের কারিগরদের সাথে
                    </h2>

                    <p className="text-white/70 text-[15px] text-left mb-6">
                        আমরা বিশ্বাস করি প্রতিটি হাতে তৈরি পণ্যের পেছনে একটি গল্প আছে। গ্রামীণ বাজার সেই গল্পগুলোকে আপনার কাছে পৌঁছে দেয়।
                    </p>

                    {/* Bullet List */}
                    <ul className="list-none mb-8 story-list space-y-1">
                        {storyList.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 py-2 text-[15px] text-white/80">
                                <span className="text-lg text-[#c8e6b8] shrink-0 mt-0.5">
                                    <FaCircleCheck />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Makers Grid */}
                    <div className="grid grid-cols-3 gap-4 mt-6 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2">
                        {makersData.map((maker) => (
                            <div
                                key={maker.id}
                                className="maker-card bg-white/[0.07] border border-white/10 rounded-xl py-4.5 px-3.5 text-center cursor-pointer transition-all duration-300 hover:bg-white/12 hover:-translate-y-1 group"
                            >
                                <div className="w-12 h-12 bg-white/15 rounded-full mx-auto mb-2.5 flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110">
                                    {maker.icon}
                                </div>
                                <div className="font-noto text-[13px] font-bold text-white mb-0.5">
                                    {maker.name}
                                </div>
                                <div className="text-[11px] text-white/50">
                                    {maker.location}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VillageStory;