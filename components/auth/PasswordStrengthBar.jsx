// components/ui/PasswordStrengthBar.jsx

function getScore(password) {
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]|[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
}

const LABELS = ["", "দুর্বল", "মাঝারি", "ভালো", "শক্তিশালী"];
const BAR_COLORS = ["bg-border", "bg-danger", "bg-earth-light", "bg-green-light", "bg-green-mid"];
const LABEL_COLORS = {
    1: "text-danger",
    2: "text-earth-light",
    3: "text-green-mid",
    4: "text-green-mid",
};

export default function PasswordStrengthBar({ password }) {
    if (!password) return null;

    const score = getScore(password);

    return (
        <div className="flex items-center gap-1.5 mt-2">
            {[1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    className={[
                        "flex-1 h-[3px] rounded-sm transition-colors duration-300",
                        i <= score ? BAR_COLORS[score] : "bg-border",
                    ].join(" ")}
                />
            ))}
            <span className={[
                "text-[10px] font-bold min-w-[54px] text-right",
                LABEL_COLORS[score] ?? "text-text-light",
            ].join(" ")}>
                {LABELS[score]}
            </span>
        </div>
    );
}
