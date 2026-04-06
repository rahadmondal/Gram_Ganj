// components/ui/SocialButton.jsx

export default function SocialButton({ icon, label, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex-1 flex items-center justify-center gap-2
                 border-2 border-border bg-cream rounded-xl py-3
                 text-[13px] font-semibold text-text-mid cursor-pointer
                 transition-all duration-200
                 hover:border-green-mid hover:bg-green-pale hover:text-green-deep"
        >
            <span className="text-base">{icon}</span>
            {label}
        </button>
    );
}
