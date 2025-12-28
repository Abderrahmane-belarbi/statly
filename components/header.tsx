import Link from "next/link";
import Image from "next/image";
export default async function Header() {
    return (
        <div className="w-full h-16 px-4 bg-surface-2 text-text border-b border-border top-0 z-50 flex items-center justify-between">
            <div className="flex items-center gap-1">
                <div className="w-10 h-10 flex items-center justify-center  border border-border/50 shodow-soft rounded-lg">
                    <Image
                        width={36}
                        height={36}
                        src="/icons/statly-logo-64.png"
                        alt="logo"
                    />
                </div>
                <p className="text-text text-lg font-bold">Statly</p>
            </div>
            <Link className="font-light" href="/sign-up">
                Join
            </Link>
        </div>
    );
}
