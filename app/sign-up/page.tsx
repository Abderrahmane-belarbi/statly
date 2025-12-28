"use client";

import Image from "next/image";
import Link from "next/link";
import SocialButton from "@/components/auth/social-button";
import { useState } from "react";
import { User, userSchema } from "@/lib/validation";
import { Mail, Lock, User as UserIcon } from "lucide-react";
import z from "zod";

export default function SignUpPage() {
    const [userData, setUserData] = useState<User>({
        username: "",
        email: "",
        password: ""
    });

    return (
        <div className="w-full h-[calc(100dvh-64px)] flex flex-col items-center justify-center">
            <div className="max-w-[300px] flex flex-col items-start gap-3 border border-border p-7 bg-surface rounded-3xl">
                <div className="flex items-end gap-2">
                    <div className="w-10 h-10 flex items-center justify-center  border border-border/50 shodow-soft rounded-lg">
                        <Image
                            width={36}
                            height={36}
                            src="/icons/statly-logo-64.png"
                            alt="logo"
                        />
                    </div>
                    <div className="flex flex-col gap-0 -mb-1">
                        <p className="text-muted text-xs m-0">Welcom back</p>
                        <p className="text-text text-xl font-bold -mt-1">
                            Statly
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <h1 className="font-bold text-xl text-text">
                        Create your account
                    </h1>
                    <p className="text-muted text-xs">
                        Organize tasks, track progress and stay focused across
                        all your projects.
                    </p>
                </div>
                <div className="w-full flex flex-col gap-2">
                    
                    <div className="relative">
                        <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                        <input
                            value={userData.username}
                            type="Full name"
                            placeholder="John doe"
                            className="pl-10 pr-3 input-app"
                            onChange={event =>
                                setUserData({
                                    ...userData,
                                    username: event.target.value
                                })
                            }
                        />
                    </div>
                    
                    <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                        <input
                            value={userData.email}
                            type="email"
                            placeholder="Email"
                            className="pl-10 pr-3 input-app"
                            onChange={event =>
                                setUserData({
                                    ...userData,
                                    email: event.target.value
                                })
                            }
                        />
                    </div>

                    <div className="relative">
                        <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                        <input
                            value={userData.password}
                            type="password"
                            placeholder="••••••••"
                            className="pl-10 pr-3 input-app"
                            onChange={event =>
                                setUserData({
                                    ...userData,
                                    password: event.target.value
                                })
                            }
                        />
                    </div>

                    <button
                        className="py-1 mt-2 rounded-xl font-bold text-white bg-[linear-gradient(90deg,#3B4ED3_0%,#4749C7_28%,#5A3EB4_62%,#6A3AA7_100%)] shadow-[0_18px_60px_rgba(72,76,210,0.22)] ring-1 ring-white/10 hover:brightness-110 active:brightness-95 transition"
                        onClick={() => {}}
                    >
                        Get Started
                    </button>
                </div>
                <div className="w-full flex items-center gap-2">
                    <div className="h-px flex-1 bg-[#1e2547]" />
                    <p className="text-xs text-muted text-sm">
                        or continue with
                    </p>
                    <div className="h-px flex-1 bg-[#1e2547]" />
                </div>
                <div className="w-full flex items-center justify-center gap-4">
                    <SocialButton target="Github" />
                    <SocialButton target="Google" />
                </div>
                <div className="w-full text-xs flex items-center justify-center gap-2">
                    <p className="text-muted">Already have an account ?</p>
                    <Link href="/sign-in">
                        <button className="font-bold text-accent active:underline transition-colors">
                            Sign in
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
