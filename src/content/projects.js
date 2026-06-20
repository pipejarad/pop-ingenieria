// Proyectos reales (lista simple). No tienen caso de éxito estructurado.
export const projects = [
  {
    id: "forestal-santa-fe",
    title: "Puesta en marcha Forestal Sta. Fe",
    technologies: ["DCS Honeywell", "PLC Allen-Bradley"],
    featured: true,
  },
  {
    id: "expansion-los-bronces",
    title: "Puesta en servicio — Expansión Los Bronces",
    technologies: [],
    featured: true,
  },
  {
    id: "fd-gd-los-bronces",
    title: "Puesta en marcha — FD y GD Los Bronces",
    technologies: [],
    featured: false,
  },
  {
    id: "planta-moly-lt1",
    title: "Puesta en servicio — Planta de Moly LT1",
    technologies: [],
    featured: false,
  },
  {
    id: "pdlb",
    title: "Puesta en marcha — Proyecto PDLB",
    technologies: [],
    featured: false,
  },
  {
    id: "actualizacion-plc-controllogix",
    title:
      "Actualización de PLC-3 y PLC-5 a ControlLogix L81 (planta de cobre y Moly LT1)",
    technologies: ["Allen-Bradley", "ControlLogix L81"],
    featured: true,
  },
  {
    id: "agua-salada-cerro-dominador",
    title:
      "Configuración y puesta en marcha — Planta de Abastecimiento Agua Salada (Cerro Dominador)",
    technologies: [],
    featured: false,
  },
  {
    id: "profibus-cerro-dominador",
    title: "Mejoras de comunicación Profibus — Cerro Dominador",
    technologies: ["Profibus"],
    featured: false,
  },
  {
    id: "actualizacion-reles-e300",
    title: "Actualización de relés térmicos y E3 Plus a relés E300 en Ethernet/IP",
    technologies: ["Relés E300", "Ethernet/IP"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
