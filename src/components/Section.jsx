import Container from './Container'
import styles from './Section.module.css'

export default function Section({ 
  children, 
  spacing = 'normal',
  background = 'white',
  containerWidth = 'default',
  className = '',
  ...props 
}) {
  const getSectionClasses = () => {
    const classes = [styles.section];
    
    if (spacing === 'tight') classes.push(styles.sectionTight);
    if (spacing === 'spaced') classes.push(styles.sectionSpaced);
    
    if (background === 'gray') classes.push(styles.sectionBgGray);
    if (background === 'primary') classes.push(styles.sectionBgPrimary);
    
    if (className) classes.push(className);
    
    return classes.join(' ');
  };

  return (
    <section className={getSectionClasses()} {...props}>
      <Container maxWidth={containerWidth}>
        {children}
      </Container>
    </section>
  );
}