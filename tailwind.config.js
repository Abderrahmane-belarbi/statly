"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                // Base
                app: "#0b0f1a",
                surface: "#12172a",
                "surface-2": "#0e1325",
                border: "#1e2547",
                // Brand
                primary: "#3b82f6",
                secondary: "#7c3aed",
                accent: "#60a5fa",
                // Text
                text: "#e5e7eb",
                "text-2": "#cbd5e1",
                muted: "#9ca3af",
                "muted-2": "#6b7280",
                // Status
                success: "#22c55e",
                warning: "#f59e0b",
                danger: "#ef4444",
                info: "#38bdf8"
            },
            borderRadius: {
                brand: "16px"
            },
            boxShadow: {
                soft: "0 12px 30px rgba(0, 0, 0, 0.35)"
            }
        }
    },
    plugins: []
};
