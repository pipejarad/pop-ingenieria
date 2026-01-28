import styles from './Container.module.css'

export default function Container({ 
  children, 
  maxWidth = 'default',
  className = '',
  ...props 
}) {
  const getContainerClass = () => {
    switch (maxWidth) {
      case 'narrow':
        return styles.containerNarrow;
      case 'wide':
        return styles.containerWide;
      case 'fluid':
        return styles.containerFluid;
      default:
        return styles.container;
    }
  };

  const classes = [getContainerClass(), className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}