import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sencillopay.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-27"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date("2026-10-27"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date("2026-10-27"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
