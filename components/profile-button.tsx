"use client";

import { useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";

type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export default function ProfileButton({ user }: { user: User }) {
    const [open, setOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement | null>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    // click outside (no stopPropagation)
    useEffect(() => {
        function onDocMouseDown(e: MouseEvent) {
            if (!open) return;
            const target = e.target as Node;

            if (menuRef.current?.contains(target)) return;
            if (btnRef.current?.contains(target)) return;

            setOpen(false);
        }

        document.addEventListener("mousedown", onDocMouseDown);
        return () => document.removeEventListener("mousedown", onDocMouseDown);
    }, [open]);

    return (
        <div className="relative">
            <button
                ref={btnRef}
                onClick={() => setOpen(p => !p)}
                className="inline-flex items-center"
            >
                <img
                    src={user.image ?? ""}
                    width={30}
                    height={30}
                    className="rounded-full"
                    alt="profile"
                />
            </button>

            {/* Dropdown stays mounted -> smooth close animation */}
            <div
                ref={menuRef}
                className={[
                    "fixed top-8 right-8 z-50 w-[220px] rounded-lg border border-gray-500/60",
                    "bg-gray-950/30 backdrop-blur-md p-3 text-xs",
                    "origin-top-right transition-all duration-100 ease-out",
                    open
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-85 -translate-y-1 pointer-events-none"
                ].join(" ")}
            >
                <p className="text-[10px] opacity-80">{user.email}</p>
                <p className="mt-1">{user.name}</p>

                <button className="mt-3 w-full rounded-md border border-gray-500/40 px-3 py-2 text-left hover:bg-white/10 transition"
                onClick={() => signOut()}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
