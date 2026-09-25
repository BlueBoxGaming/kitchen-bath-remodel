import Link from "next/link";
import { RoomPhoto } from "@/components/RoomPhoto";

const rooms = [
  {
    href: "/kitchen-remodeling",
    title: "Kitchen remodeling",
    body: "Layouts you can cook in — cabinets, counters, lighting, and the last 10% that makes a kitchen feel finished.",
    image: "/images/portfolio-kitchen-1.jpg",
    cta: "See kitchen work",
  },
  {
    href: "/bathroom-remodeling",
    title: "Bathroom remodeling",
    body: "Primary baths, hall baths, and tub-to-shower conversions built to work every morning.",
    image: "/images/portfolio-bath-1.jpg",
    cta: "See bath work",
  },
] as const;

export function RoomRouter() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {rooms.map((room) => (
        <Link
          key={room.href}
          href={room.href}
          className="group block overflow-hidden rounded-2xl border border-line bg-bg-elevated transition-colors duration-150 hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <div className="relative aspect-[4/3]">
            <RoomPhoto
              src={room.image}
              alt=""
              className="transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </div>
          <div className="p-6">
            <h3 className="font-serif text-[28px] leading-tight text-ink">{room.title}</h3>
            <p className="mt-4 text-[17px] leading-7 text-ink-soft">{room.body}</p>
            <span className="mt-4 inline-block text-[15px] font-semibold text-accent">{room.cta} →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
