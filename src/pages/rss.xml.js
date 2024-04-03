import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Bekir's blog | Pulth",
    description:
      "My personal blog about software development, productivity, and more.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
  });
}
