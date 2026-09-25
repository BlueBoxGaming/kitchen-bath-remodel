import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/kitchen-remodeling",
    "/bathroom-remodeling",
    "/portfolio",
    "/schedule-consultation",
    "/contact",
    "/reviews",
    "/about",
  ];

  return routes.map((path) => ({
    url: new URL(path, site.siteUrl).toString(),
    changeFrequency: path === "/" || path.includes("remodeling") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
