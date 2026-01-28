import styles from './Button.module.css'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  disabled = false,
  onClick,
  href,
  type = 'button',
  ...props 
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled
  ].filter(Boolean).join(' ');

  // Si tiene href, renderizar como Link/anchor
  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Si no, renderizar como button
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