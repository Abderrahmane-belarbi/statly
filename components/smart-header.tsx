"use client";

import { useEffect, useRef, useState } from "react";

export default function SmartHeader({
  children,
  height = 64,       // header height in px (h-16 = 64px)
  threshold = 3,    // ignore tiny scroll jitter
  topReveal = 400,    // always show near top
}: {
  children: React.ReactNode;
  height?: number;
  threshold?: number;
  topReveal?: number;
}) {
  const [hidden, setHidden] = useState(false);

  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      // Always show at the very top
      if (y <= topReveal) {
        setHidden(false);
      } else {
        // Hide only when scrolling down enough
        if (delta > threshold) setHidden(true);
        // Show only when scrolling up enough
        if (delta < -threshold) setHidden(false);
      }

      lastY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, topReveal]);

  return (
    <>
      {/* Spacer so content doesn't jump under fixed header */}
      <div style={{ height }} />

      <div
        style={{ height }}
        className={[
          "fixed left-0 top-0 z-[9999] w-full",
          "transition-transform duration-300 ease-out",
          hidden ? "-translate-y-full" : "translate-y-0",
          "[transform:translateZ(0)]", // mobile compositing fix
        ].join(" ")}
      >
        {children}
      </div>
    </>
  );
}