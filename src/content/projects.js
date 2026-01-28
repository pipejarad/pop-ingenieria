// Casos de éxito y proyectos destacados
export const projects = [
  {
    id: "modernizacion-dcs-refineria",
    title: "Modernización Sistema DCS en Refinería",
    summary:
      "Migración completa de sistema de control distribuido legacy a tecnología moderna",
    industry: "Petróleo y Petroquímica",
    client: "Refinería del Pacífico",
    duration: "18 meses",
    year: "2023-2024",
    image: "/images/projects/refineria-dcs.jpg",
    technologies: [
      "Honeywell Experion",
      "OPC-UA",
      "Ethernet/IP",
      "Redundancia",
    ],

    // Caso de éxito estructurado
    problem: {
      title: "El Desafío",
      description:
        "Sistema DCS obsoleto de 25 años con paradas frecuentes, falta de repuestos y personal especializado limitado.",
      impacts: [
        "Paradas no programadas 15% del tiempo",
        "Costos de mantenimiento elevados",
        "Riesgo de falla catastrófica",
        "Operadores sin confianza en el sistema",
      ],
    },

    solution: {
      title: "La Solución",
      description:
        "Migración progresiva por áreas críticas manteniendo operación continua de refinería.",
      approach: [
        "Análisis detallado del sistema legacy",
        "Diseño de arquitectura moderna redundante",
        "Migración por fases sin parar producción",
        "Capacitación intensiva de operadores",
        "Pruebas exhaustivas de cada subsistema",
      ],
      timeline: [
        { phase: "Ingeniería y diseño", duration: "4 meses" },
        { phase: "Procura y construcción", duration: "8 meses" },
        { phase: "Migración y puesta en marcha", duration: "6 meses" },
      ],
    },

    results: {
      title: "Los Resultados",
      description:
        "Operación más confiable, eficiente y segura con tecnología de punta.",
      metrics: [
        {
          metric: "Disponibilidad del sistema",
          before: "85%",
          after: "99.2%",
          improvement: "+14.2%",
        },
        {
          metric: "Tiempo medio entre fallas",
          before: "720 hrs",
          after: "8,760 hrs",
          improvement: "+1,117%",
        },
        {
          metric: "Costos de mantenimiento",
          before: "$450k/año",
          after: "$180k/año",
          improvement: "-60%",
        },
        {
          metric: "Tiempo de respuesta operador",
          before: "3-5 seg",
          after: "0.5 seg",
          improvement: "-85%",
        },
      ],
      benefits: [
        "Cero paradas no programadas en primer año",
        "Capacidad de operar remoto durante pandemia",
        "Históricos confiables para optimización",
        "Plataforma para futuras mejoras",
      ],
    },

    testimonial: {
      text: "La migración fue un éxito rotundo. El equipo de POP Ingeniería demostró expertise técnico excepcional y un enfoque meticuloso que nos dio confianza durante todo el proceso.",
      author: "Ing. Carlos Mendoza",
      position: "Jefe de Automatización",
      company: "Refinería del Pacífico",
    },

    featured: true,
    tags: ["DCS", "Migración", "Honeywell", "Refinería", "Redundancia"],
  },

  {
    id: "optimizacion-planta-concentradora",
    title: "Optimización Planta Concentradora de Cobre",
    summary:
      "Implementación de control avanzado para maximizar recuperación de cobre",
    industry: "Minería",
    client: "Minera Antofagasta Norte",
    duration: "12 meses",
    year: "2023",
    image: "/images/projects/concentradora-cobre.jpg",
    technologies: [
      "ABB 800xA",
      "Control Predictivo",
      "Análisis de Imagen",
      "OPC-UA",
    ],

    problem: {
      title: "El Desafío",
      description:
        "Baja recuperación de cobre y alta variabilidad en calidad del concentrado debido a control manual.",
      impacts: [
        "Recuperación promedio 87% vs objetivo 92%",
        "Variabilidad de ley +/- 2%",
        "Alto consumo de reactivos",
        "Dependencia crítica de operadores expertos",
      ],
    },

    solution: {
      title: "La Solución",
      description:
        "Control predictivo multivariable con análisis de imagen para optimización automática.",
      approach: [
        "Modelo dinámico del proceso de flotación",
        "Controlador predictivo (MPC) personalizado",
        "Sistema de análisis de espuma por visión",
        "Interface intuitiva para operadores",
        "Optimizador económico en tiempo real",
      ],
    },

    results: {
      title: "Los Resultados",
      description:
        "Mejora significativa en recuperación y estabilidad del proceso.",
      metrics: [
        {
          metric: "Recuperación Cu",
          before: "87.2%",
          after: "91.8%",
          improvement: "+4.6 pp",
        },
        {
          metric: "Variabilidad ley",
          before: "±2.1%",
          after: "±0.8%",
          improvement: "-62%",
        },
        {
          metric: "Consumo reactivos",
          before: "100%",
          after: "88%",
          improvement: "-12%",
        },
        {
          metric: "Valor agregado",
          before: "$0",
          after: "$2.3M/año",
          improvement: "ROI 280%",
        },
      ],
    },

    featured: true,
    tags: ["Control Avanzado", "MPC", "Flotación", "Minería", "Optimización"],
  },

  {
    id: "sistema-proteccion-subestacion",
    title: "Sistema de Protección Subestación 220kV",
    summary:
      "Modernización completa de protecciones eléctricas con relés digitales",
    industry: "Energía y Utilities",
    client: "Empresa Eléctrica Regional",
    duration: "8 meses",
    year: "2024",
    image: "/images/projects/subestacion-220kv.jpg",
    technologies: ["SEL", "IEC 61850", "Comunicación óptica", "SCADA"],

    problem: {
      title: "El Desafío",
      description:
        "Relés electromecánicos obsoletos con falta de selectividad y diagnóstico limitado.",
      impacts: [
        "Disparos intempestivos frecuentes",
        "Tiempo de localización de fallas elevado",
        "Coordinación de protecciones deficiente",
        "Mantenimiento reactivo costoso",
      ],
    },

    solution: {
      title: "La Solución",
      description:
        "Reemplazo integral con relés digitales multifunción y comunicación IEC 61850.",
      approach: [
        "Estudio de coordinación completo",
        "Relés SEL con funciones integradas",
        "Red de comunicación redundante",
        "Sistema SCADA con HMI moderna",
        "Esquemas de automatismo avanzados",
      ],
    },

    results: {
      title: "Los Resultados",
      description:
        "Protección confiable con diagnóstico predictivo y operación remota.",
      metrics: [
        {
          metric: "Tiempo localización fallas",
          before: "4-8 hrs",
          after: "15 min",
          improvement: "-95%",
        },
        {
          metric: "Disparos intempestivos",
          before: "12/año",
          after: "0/año",
          improvement: "-100%",
        },
        {
          metric: "Disponibilidad sistema",
          before: "98.2%",
          after: "99.7%",
          improvement: "+1.5 pp",
        },
      ],
    },

    featured: false,
    tags: ["Protecciones", "SEL", "IEC 61850", "Subestación", "SCADA"],
  },

  {
    id: "linea-envasado-inteligente",
    title: "Línea de Envasado Inteligente",
    summary:
      "Automatización completa con trazabilidad y control de calidad en línea",
    industry: "Industria Alimentaria",
    client: "Alimentos del Sur S.A.",
    duration: "6 meses",
    year: "2024",
    image: "/images/projects/linea-envasado.jpg",
    technologies: [
      "Siemens S7-1500",
      "WinCC",
      "Vision System",
      "MES Integration",
    ],

    problem: {
      title: "El Desafío",
      description:
        "Proceso manual propenso a errores con trazabilidad limitada y baja eficiencia.",
      impacts: [
        "Eficiencia línea 65%",
        "Errores etiquetado 2%",
        "Trazabilidad manual deficiente",
        "Pérdidas por calidad 5%",
      ],
    },

    solution: {
      title: "La Solución",
      description:
        "Automatización integral con visión artificial y trazabilidad completa.",
      approach: [
        "PLC Siemens con Safety integrado",
        "Sistema de visión para inspección",
        "Códigos 2D para trazabilidad",
        "Interface con sistema MES",
        "Reportes automáticos de producción",
      ],
    },

    results: {
      title: "Los Resultados",
      description:
        "Línea más eficiente, confiable y con trazabilidad completa.",
      metrics: [
        {
          metric: "Eficiencia línea",
          before: "65%",
          after: "92%",
          improvement: "+27 pp",
        },
        {
          metric: "Errores etiquetado",
          before: "2%",
          after: "0.1%",
          improvement: "-95%",
        },
        {
          metric: "Pérdidas calidad",
          before: "5%",
          after: "1.2%",
          improvement: "-76%",
        },
      ],
    },

    featured: false,
    tags: ["Automatización", "Siemens", "Vision", "Trazabilidad", "MES"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
