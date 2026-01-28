// Industrias atendidas
export const industries = [
  {
    id: "mineria",
    name: "Minería",
    description: "Automatización de procesos mineros y plantas concentradoras",
    icon: "⛏️",
    applications: [
      "Chancado",
      "Flotación",
      "Lixiviación",
      "Transporte de minerales",
    ],
    featured: true,
  },
  {
    id: "energia",
    name: "Energía y Utilities",
    description: "Generación, transmisión y distribución de energía eléctrica",
    icon: "⚡",
    applications: [
      "Centrales térmicas",
      "Hidroeléctricas",
      "Subestaciones",
      "Redes inteligentes",
    ],
    featured: true,
  },
  {
    id: "petroquimica",
    name: "Petróleo y Petroquímica",
    description: "Refinación y procesamiento de hidrocarburos",
    icon: "🛢️",
    applications: [
      "Refinación",
      "Destilación",
      "Cracking",
      "Sistemas de seguridad",
    ],
    featured: true,
  },
  {
    id: "manufactura",
    name: "Manufactura",
    description: "Procesos de fabricación y líneas de producción",
    icon: "🏭",
    applications: [
      "Líneas de ensamble",
      "Control de calidad",
      "Robotización",
      "Trazabilidad",
    ],
    featured: false,
  },
  {
    id: "alimentaria",
    name: "Industria Alimentaria",
    description: "Procesamiento y empaque de alimentos",
    icon: "🥫",
    applications: [
      "Pasteurización",
      "Envasado",
      "Control de temperatura",
      "HACCP",
    ],
    featured: false,
  },
  {
    id: "farmaceutica",
    name: "Farmacéutica",
    description: "Producción farmacéutica con estándares GMP",
    icon: "💊",
    applications: [
      "Biorreactores",
      "Purificación",
      "Validación",
      "Batch records",
    ],
    featured: false,
  },
  {
    id: "agua",
    name: "Tratamiento de Agua",
    description: "Plantas de tratamiento y distribución de agua",
    icon: "💧",
    applications: [
      "Potabilización",
      "Tratamiento residual",
      "Desalinización",
      "Control de pH",
    ],
    featured: false,
  },
  {
    id: "siderurgia",
    name: "Siderurgia y Metalurgia",
    description: "Procesamiento de metales y aleaciones",
    icon: "🔥",
    applications: ["Fundición", "Laminación", "Temple", "Control de atmósfera"],
    featured: false,
  },
];

export const featuredIndustries = industries.filter(
  (industry) => industry.featured,
);
