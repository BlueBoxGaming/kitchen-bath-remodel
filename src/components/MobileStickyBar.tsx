"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-[var(--z-sticky)] border-t border-line bg-bg-elevated pb-[env(safe-area-inset-bottom)] xl:hidden"
    >
      <div className="grid h-16 grid-cols-2">
        <a
          href={`tel:${site.phoneTel}`}
          className="flex items-center justify-center bg-accent px-2 text-center text-[16px] font-semibold text-accent-text"
          data-cta="sticky-call"
        >
          Call {site.phone}
        </a>
        <Link
          href="/schedule-consultation"
          className="flex items-center justify-center border-l border-line px-2 text-center text-[16px] font-semibold text-accent"
          data-cta="sticky-consult"
        >
          Consult
        </Link>
      </div>
    </nav>
  );
}
