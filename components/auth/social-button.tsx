import { signIn } from "next-auth/react";
type Prop = {
    target: "Google" | "Github";
    w?: string;
    h?: string;
};
export default function SocialButton({ target, w=18, h=18 }: Prop) {
    return (
        <button
            className="px-3 py-1.5 flex items-center gap-2 text-sm text-text rounded-lg border border-border active:bg-[#1e2547] active:scale-90 transition-all"
            onClick={() => {
              signIn((target as string).toLowerCase(), { callbackUrl: "/" })
            }}
        >
            <span>
                {target === "Github" ? (
                    <svg
                        width={w}
                        height={h}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            fill="#eee"
                            d="M12 .5A12 12 0 0 0 8.2 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.3 4.4 4.4 0 0 1 .1-3.2s1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.4 4.4 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.2 3.3c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"
                        />
                    </svg>
                ) : (
                    <svg
                        width={w}
                        height={h}
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            fill="#FFC107"
                            d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.1-.1-2.2-.4-3.5z"
                        />
                        <path
                            fill="#FF3D00"
                            d="M6.3 14.7 12.9 19.5C14.7 15.1 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.6 6 29.6 4 24 4c-7.7 0-14.4 4.4-17.7 10.7z"
                        />
                        <path
                            fill="#4CAF50"
                            d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.5 35.1 26.9 36 24 36c-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.5 39.6 16.2 44 24 44z"
                        />
                        <path
                            fill="#1976D2"
                            d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.5l.1.1 6.3 5.3C40.3 36.2 44 31.7 44 24c0-1.1-.1-2.2-.4-3.5z"
                        />
                    </svg>
                )}
            </span>
            <span>{target}</span>
        </button>
    );
}
