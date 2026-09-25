"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/content/site";
import { primaryNav } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  return <HeaderInner key={pathname} />;
}

function HeaderInner() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = document.getElementById(menuId);
    if (!root) return;

    const focusable = () =>
      Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((node) => !node.hasAttribute("disabled"));

    const list = focusable();
    list[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, menuId, closeMenu]);

  return (
    <>
    <header className="sticky top-0 z-[var(--z-header)]">
      <div className="border-b border-line bg-[rgba(246,241,234,0.94)] backdrop-blur-[16px]">
      <div className="container-site flex h-16 items-center justify-between gap-3 xl:h-[72px]">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element -- static mark, same direct path as room photos */}
          <img
            src="/images/logo.png"
            alt=""
            width={542}
            height={590}
            className="h-12 w-auto shrink-0"
          />
          <span className="min-w-0">
            <span className="line-clamp-2 font-serif text-[14px] leading-[18px] text-ink xl:text-[16px] xl:leading-5">
              {site.company}
            </span>
            <span className="hidden text-[12px] leading-4 text-ink-soft xl:block">Kitchen & Bath</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-semibold leading-5 text-ink hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a href={`tel:${site.phoneTel}`} className="text-[15px] font-semibold text-accent" data-cta="header-call">
            {site.phone}
          </a>
          <Link href="/schedule-consultation" className="btn-primary !w-auto" data-cta="header-consult">
            Schedule Consultation
          </Link>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-accent"
            aria-label={`Call ${site.phone}`}
            data-cta="header-phone-icon"
          >
            <PhoneIcon />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-ink"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => (open ? closeMenu() : setOpen(true))}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      </div>
    </header>

      {open ? (
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-[var(--z-menu)] overflow-y-auto bg-bg px-6 pt-6 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] xl:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-4 text-lg font-semibold text-ink"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/reviews" className="py-4 text-lg font-semibold" onClick={closeMenu}>
              Reviews
            </Link>
            <Link href="/contact" className="py-4 text-lg font-semibold" onClick={closeMenu}>
              Contact
            </Link>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/schedule-consultation" className="btn-primary" onClick={closeMenu}>
                Schedule Consultation
              </Link>
              <a href={`tel:${site.phoneTel}`} className="btn-secondary" onClick={closeMenu}>
                Call {site.phone}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
