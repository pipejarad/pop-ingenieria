import { services } from "@/content/services";

const BASE_URL = "https://pop-ingenieria.cl";

export default function sitemap() {
  const staticRoutes = ["", "/servicios", "/proyectos", "/acerca-de", "/contacto"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.8,
    })
  );

  const serviceRoutes = services.map((service) => ({
    url: `${BASE_URL}/servicios/${service.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
