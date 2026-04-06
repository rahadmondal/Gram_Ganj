// components/ui/Badge.jsx

export default function Badge({ children }) {
    return (
        <div className="inline-flex items-center gap-1.5 bg-green-pale text-green-deep
                    text-[10px] font-bold tracking-[1.5px] uppercase
                    px-3 py-1.25 rounded-full mb-3">
            {children}
        </div>
    );
}
