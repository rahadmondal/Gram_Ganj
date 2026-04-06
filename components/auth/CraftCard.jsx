export default function CraftCard({ emoji, label, animationDelay }) {
  return (
    <div
      className="bg-white/[0.07] border border-white/12 rounded-2xl p-4 text-center
                 animate-[floatCard_5s_ease-in-out_infinite]"
      style={{ animationDelay }}
    >
      <span className="text-3xl block mb-1.5">{emoji}</span>
      <span className="text-[10px] text-white/60 font-noto leading-tight block">
        {label}
      </span>
    </div>
  );
}