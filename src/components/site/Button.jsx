import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-[10px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-600 shadow-xs",
  secondary:
    "bg-white text-brand border border-brand/20 hover:border-brand hover:bg-brand/[0.03]",
  ghost: "text-gray-700 hover:text-brand hover:bg-gray-50",
  "outline-light":
    "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white/70",
};

const sizes = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
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
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
