// components/ui/Divider.jsx

export default function Divider({ label }) {
    return (
        <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-text-light font-semibold whitespace-nowrap">
                {label}
            </span>
            <div className="flex-1 h-px bg-border" />
        </div>
    );
}
