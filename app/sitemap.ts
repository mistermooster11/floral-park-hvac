import { MetadataRoute } from "next";

const BASE_URL = "https://floralparkhvac.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL,                            lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about-us`,              lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services-page`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/ac-repair`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/furnace-repair`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/heat-pump`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ac-maintenance`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/heating-maintenance`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/faq`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
    { url: `${BASE_URL}/contact-us`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
