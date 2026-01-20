type IconProps = {
    width?: number;
    height?: number;
};

export default function UserIcon({ width = 18, height = 18 }: IconProps) {
    return (
        <svg
            width={width}
            height={width}
            viewBox="0 0 24 24"
            fill="none"
            className="opacity-90"
        >
            <path
                d="M20 21a8 8 0 0 0-16 0"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            <path
                d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                stroke="currentColor"
                strokeWidth="1.8"
            />
        </svg>
    );
}
