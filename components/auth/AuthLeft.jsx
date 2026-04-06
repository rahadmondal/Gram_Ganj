import CraftCard from "./CraftCard";
import TrustPill from "./TrustPill";

export default function AuthLeft({ cards, headline, sub, trusts }) {
    return (
        <div className="hidden md:flex w-[44%] bg-green-deep flex-col justify-center
                    px-12 py-16 relative overflow-hidden shrink-0">

            {/* Radial glow layers */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(ellipse at 20% 30%, rgba(125,175,106,.22) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 75%, rgba(196,149,106,.14) 0%, transparent 45%)
          `,
                }}
            />

            {/* Decorative SVG rings */}
            <svg
                className="absolute -right-16 -bottom-16 w-95 h-95 opacity-[0.06] pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
            >
                <ellipse cx="200" cy="200" rx="170" ry="85" stroke="white" strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="85" ry="170" stroke="white" strokeWidth="1" />
                <circle cx="200" cy="200" r="170" stroke="white" strokeWidth="1" />
                <circle cx="200" cy="200" r="110" stroke="white" strokeWidth="1" />
                <circle cx="200" cy="200" r="50" stroke="white" strokeWidth="1" />
            </svg>

            {/* Floating craft cards grid */}
            {/* <div className="grid grid-cols-2 gap-3 mb-10 max-w-75 relative z-10">
                {cards.map((card, i) => (
                    <CraftCard
                        key={i}
                        emoji={card.emoji}
                        label={card.label}
                        animationDelay={`${i * 1.4}s`}
                    />
                ))}
            </div> */}

            {/* Brand + headline */}
            <div className="relative z-10 mx-auto max-w-75">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/12 border border-white/20 rounded-full
                          flex items-center justify-center text-xl">
                        🌿
                    </div>
                    <div>
                        <span className="text-[18px] font-bold text-white block leading-tight">
                            গ্রামীণ বাজার
                        </span>
                        <span className="text-[10px] text-white/40 uppercase tracking-[2px]">
                            Grameen Bazar
                        </span>
                    </div>
                </div>

                {/* Headline */}
                <h2 className=" text-[clamp(20px,2.4vw,28px)] font-bold text-white
                       leading-[1.35] mb-3">
                    {headline[0]}
                    <br />
                    <span className="font-playfair italic text-earth-light">{headline[1]}</span>
                </h2>

                {/* Sub-text */}
                <p className="text-[13px] text-white/60 leading-[1.75] mb-7 max-w-70">
                    {sub}
                </p>

                {/* Trust pills */}
                <div className="flex flex-wrap gap-2">
                    {trusts.map((t, i) => (
                        <TrustPill key={i} label={t} />
                    ))}
                </div>
            </div>
        </div>
    );
}