export default function TrustPill({ label }) {
    return (
        <div className="flex items-center gap-2 bg-white/8 border border-white/[0.14]
                    rounded-full px-3.5 py-1.5 text-xs font-semibold text-white/75">
            <span className="w-1.5 h-1.5 rounded-full bg-earth-light shrink-0" />
            {label}
        </div>
    );
}
