import Link from "next/link";
import { site } from "@/content/site";
import { footerNav } from "@/lib/nav";

const roomLinks = footerNav.filter(
  (item) => item.href === "/kitchen-remodeling" || item.href === "/bathroom-remodeling",
);

const exploreLinks = footerNav.filter(
  (item) => item.href !== "/kitchen-remodeling" && item.href !== "/bathroom-remodeling",
);

export function Footer() {
  return (
    <footer className="bg-accent pb-[calc(6rem+env(safe-area-inset-bottom,0px))] text-accent-text xl:pb-0">
      <div className="container-site grid gap-8 py-16 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="" width={542} height={590} className="h-16 w-auto shrink-0" />
            <p className="font-serif text-[22px] leading-7 text-white">{site.company}</p>
          </div>
          <p className="mt-2 text-sm leading-6 text-white/70">Kitchen & Bath · {site.city}</p>
          <p className="mt-4 text-[16px] leading-7 text-white">
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-white">
              {site.phone}
            </a>
            <br />
            {site.nap}
          </p>
          <p className="mt-4 text-sm leading-6 text-white/70">Hours: {site.hours}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">Rooms</p>
          <ul className="mt-4 space-y-2">
            {roomLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[14px] leading-[22px] text-white/90 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">Explore</p>
          <ul className="mt-4 space-y-2">
            {exploreLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[14px] leading-[22px] text-white/90 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/70">Trust</p>
          <ul className="mt-4 space-y-2 text-[14px] leading-[22px] text-white/90">
            <li>Years: {site.years}</li>
            <li>License: {site.license}</li>
            <li>Insurance: {site.insurance}</li>
            <li>Warranty: {site.warranty}</li>
            <li>Crews: {site.crewModel}</li>
          </ul>
        </div>
      </div>
      <div className="container-site pb-8">
        <p className="border-t border-white/20 pt-6 text-sm text-white/70">
          © {new Date().getFullYear()} {site.company}. Facts marked with placeholders await company confirmation.
        </p>
      </div>
    </footer>
  );
}
