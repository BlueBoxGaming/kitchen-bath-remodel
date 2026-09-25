import Link from "next/link";
import { RoomPhoto } from "@/components/RoomPhoto";
import type { Project } from "@/lib/types";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-bg-elevated transition-colors duration-150 hover:border-accent">
      <Link href={`/portfolio?room=${project.room}`} className="block">
        <div className="relative aspect-[4/3]">
          <RoomPhoto
            src={project.cardImage}
            alt={`${project.title} — AI-generated stand-in, not a client project`}
          />
        </div>
        <div className="p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
            {project.room === "kitchen" ? "Kitchen" : "Bath"} · {project.styles.join(" · ")}
          </p>
          <h3 className="mt-2 font-serif text-[22px] leading-snug text-ink">{project.title}</h3>
          <p className="mt-2 text-[15px] leading-6 text-ink-soft">{project.neighborhood}</p>
        </div>
      </Link>
    </article>
  );
}
