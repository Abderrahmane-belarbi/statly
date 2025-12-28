"use client";

import { signIn } from "next-auth/react";

export default function AuthButtons() {
  return (
    <div className="flex gap-4">
      <button
        className="border rounded-lg border-gray-200 p-2"
        onClick={() => signIn("github", { callbackUrl: "/" })}
      >
        GitHub
      </button>

      <button
        className="border rounded-lg border-gray-200 p-2"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        Google
      </button>
    </div>
  );
}