import Link from "next/link";
import { auth } from "/auth";
import Image from "next/image";
import ProfileButton from "@/components/profile-button";

export default async function Header() {
  const session = await auth();
    return (
        <div className="w-full h-16 px-4 bg-surface-2 text-text border-b border-border top-0 z-50 flex items-center justify-between">
            <Link 
            href="/"
            className="flex items-center gap-1">
                <div className="w-10 h-10 flex items-center justify-center  border border-border/50 shodow-soft rounded-lg">
                    <Image
                        width={36}
                        height={36}
                        src="/icons/statly-logo-64.png"
                        alt="logo"
                    />
                </div>
                <p className="text-text text-lg font-bold">Statly</p>
            </Link>
            {session?.user ? (
                <ProfileButton user={session.user} />
            ) : (
                <Link className="font-light" href="/sign-up">
                    Join
                </Link>
            )}
        </div>
    );
}
