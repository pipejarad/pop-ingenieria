import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  onClick,
  href,
  type = "button",
  className = "",
  ...props
}) {
  // El className del padre se COMBINA con las clases de variante/tamaño
  // (antes el spread lo sobrescribía y se perdían las clases del botón).
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    // Enlace interno (empieza por "/") → next/link (prefetch + navegación SPA).
    // Enlace externo (http, mailto:, tel:, wa.me…) → <a> nativo.
    const esInterno = href.startsWith("/") && !href.startsWith("//");

    if (esInterno) {
      return (
        <Link href={href} className={classes} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
