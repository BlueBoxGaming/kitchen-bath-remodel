import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { PortfolioFilters } from "@/components/PortfolioFilters";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import type { RoomType } from "@/lib/types";

export const metadata: Metadata = pageMetadata({
  title: `Portfolio | ${site.company}`,
  description: `Kitchen and bathroom remodel portfolio for ${site.city}. Filter by room and style. Photos are AI stand-ins until consented project sets are added.`,
  path: "/portfolio",
});

type Props = {
  searchParams: Promise<{ room?: string }>;
};

export default async function PortfolioPage({ searchParams }: Props) {
  const params = await searchParams;
  const roomParam = params.room;
  const initialRoom: "all" | RoomType =
    roomParam === "kitchen" || roomParam === "bath" ? roomParam : "all";

  return (
    <>
      <PageIntro
        eyebrow="Work"
        h1="Portfolio"
        lede={`Filter by room and style. Photos are AI-generated stand-ins — replace with consented before/after photography from real ${site.city} projects.`}
      />
      <section className="pb-20 pt-10 lg:pb-28">
        <div className="container-site">
          <PortfolioFilters initialRoom={initialRoom} />
        </div>
      </section>
    </>
  );
}
