import styles from './Card.module.css'

export default function Card({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) {
  const getCardClasses = () => {
    const classes = [styles.card];
    
    if (variant === 'service') classes.push(styles.cardService);
    if (variant === 'project') classes.push(styles.cardProject);
    if (variant === 'industry') classes.push(styles.cardIndustry);
    
    if (className) classes.push(className);
    
    return classes.join(' ');
  };

  return (
    <div className={getCardClasses()} {...props}>
      {children}
    </div>
  );
}

// Subcomponents
Card.Header = function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`${styles.cardHeader} ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children, className = '', ...props }) {
  return (
    <div className={`${styles.cardBody} ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={`${styles.cardTitle} ${className}`} {...props}>
      {children}
    </h3>
  );
};

Card.Description = function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={`${styles.cardDescription} ${className}`} {...props}>
      {children}
    </p>
  );
};

Card.Icon = function CardIcon({ children, className = '', ...props }) {
  return (
    <div className={`${styles.cardIcon} ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Actions = function CardActions({ children, className = '', ...props }) {
  return (
    <div className={`${styles.cardActions} ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Tags = function CardTags({ tags = [], variant = 'primary', className = '', ...props }) {
  if (!tags.length) return null;
  
  return (
    <div className={`${styles.cardTags} ${className}`} {...props}>
      {tags.map((tag, index) => (
        <span 
          key={index} 
          className={`${styles.cardTag} ${variant === 'secondary' ? styles.cardTagSecondary : ''}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};