import Container from "./Container";

export default function Section({
  children,
  eyebrow,
  title,
  intro,
  className = "",
  bg = "white",
  id,
  align = "left",
}) {
  const bgClass =
    bg === "muted"
      ? "bg-gray-50"
      : bg === "brand"
        ? "bg-brand text-white"
        : "bg-background";

  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const headingId = id ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-20 sm:py-24 ${bgClass} ${className}`}
    >
      <Container>
        {(eyebrow || title || intro) && (
          <header className={`mb-12 sm:mb-16 max-w-2xl ${alignClass}`}>
            {eyebrow && (
              <p
                className={`text-xs font-semibold uppercase tracking-[0.14em] mb-3 ${
                  bg === "brand" ? "text-accent" : "text-brand"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={headingId}
                className={`text-3xl sm:text-4xl font-semibold ${
                  bg === "brand" ? "text-white" : ""
                }`}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p
                className={`mt-4 text-base sm:text-lg ${
                  bg === "brand" ? "text-white/80" : "text-gray-600"
                } ${align === "center" ? "mx-auto" : ""}`}
              >
                {intro}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
