import type { MetadataRoute } from "next"
import { company } from "@/lib/company"

const routes = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/terms",
  "/privacy-policy",
  "/refund-policy",
  "/shipping-policy",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${company.website}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
