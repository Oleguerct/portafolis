import { Project, ProjectCategory } from '../types/Project';

export const projectCategories: ProjectCategory[] = [
  {
    id: 'web',
    name: 'Aplicacions Web',
    description: 'Projectes d\'aplicacions web modernes amb frameworks com React, Vue i Angular'
  },
  {
    id: 'mobile',
    name: 'Aplicacions Mòbils',
    description: 'Desenvolupament d\'aplicacions mòbils natives i multiplataforma'
  },
  {
    id: 'backend',
    name: 'Sistemes Backend',
    description: 'APIs, microserveis i arquitectures de servidor robustes'
  },
  {
    id: 'fullstack',
    name: 'Full Stack',
    description: 'Projectes complets amb frontend i backend integrats'
  }
];

export const projects: Project[] = [
  // Enhanced project: Smoking Paper E-commerce
  {
    id: "smoking-paper-ecommerce",
    title: "E-commerce Smoking Paper",
    client: "Smoking Paper",
    category: ["E-commerce", "Web development", "UX/UI"],
    links: {
      caseStudy: "https://sumatd.com/proyectos/e-commerce-smoking-paper/",
      site: "https://www.smokingpaper.com/products/"
    },
    summary:
      "Botiga oficial mobile-first amb fitxa de producte modular, productes relacionats i un sistema de recompenses a mida (punts, afiliació i descomptes).",
    description: {
      short:
        "Implementació d'una botiga oficial centrada en rendiment i conversió, amb una arquitectura de producte modular i un sistema de recompenses a mida (punts, afiliació i descomptes).",
      long:
        "Vam desenvolupar l'e-commerce oficial de Smoking Paper amb enfoc a programació i conversió: components de producte reutilitzables, flux de compra net i maquetació mobile-first. " +
        "La fitxa de producte prioritza informació essencial, galeria i relacionats. A nivell de lògica de negoci, s'ha implementat un sistema de recompenses a mida per als compradors que integra punts de fidelitat, afiliació amb atribució de referències i descomptes automatitzats. " +
        "Aquest sistema és configurable (escales de punts, caducitat, exclusions i límits de redempció) i mostra el saldo i l'historial d'operacions a l'àrea d'usuari, amb aplicació en un clic al checkout. " +
        "També es va cuidar la gestió del consentiment de cookies i una base sòlida per al tracking d'esdeveniments d'e-commerce."
    },
    techStack: [
      "React",
      "TypeScript", 
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Redis",
      "Docker"
    ],
    features: [
      "Fitxa de producte clara i directa",
      "Bloc de productes relacionats",
      "Disseny i comportament mobile-first",
      "Sistema de recompenses a mida (punts, afiliació, descomptes)"
    ],
    images: [
      {
        url: "https://sumatd.com/wp-content/uploads/2022/01/portada.gif",
        alt: "Mockup desktop de la capçalera de la botiga Smoking Paper",
        caption: "Hero de la botiga oficial (mockup)."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2022/01/pag-prod.gif",
        alt: "Detall de la pàgina de producte amb imatges destacades",
        caption: "Pàgina de producte enfocada a conversió."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2022/01/img-cookies.png",
        alt: "Vista del banner i preferències de cookies a la botiga",
        caption: "Gestió de consentiment de cookies."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2022/01/img-mobile.png",
        alt: "Dues vistes mòbils del catàleg i la home de la botiga",
        caption: "Experiència mobile-first."
      }
    ],
    tags: [
      "ecommerce",
      "product-page",
      "related-products",
      "mobile-first",
      "rewards",
      "loyalty",
      "affiliation",
      "discounts"
    ]
  },
  {
    id: "juan-fuentes-stand",
    title: "Stand Juan Fuentes",
    client: "Juan Fuentes",
    category: ["Web development", "UX/UI", "Brand"],
    links: {
      caseStudy: "https://sumatd.com/proyectos/juan-fuentes-stand/"
    },
    summary:
      "Desenvolupament d'un stand digital per a Juan Fuentes amb enfoc en l'experiència d'usuari i la presentació de marca.",
    description: {
      short:
        "Creació d'un stand digital innovador que combina disseny modern amb funcionalitat intuïtiva per a la presentació de Juan Fuentes.",
      long:
        "Vam desenvolupar un stand digital per a Juan Fuentes que prioritza l'experiència d'usuari i la presentació visual de la marca. " +
        "El projecte inclou un disseny responsiu i modern que s'adapta a diferents dispositius, garantint una navegació fluida i una presentació coherent del contingut. " +
        "S'ha posat especial atenció en la usabilitat i l'accessibilitat, creant una plataforma que permet als visitants descobrir fàcilment la informació rellevant i interactuar amb el contingut de manera natural."
    },
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "UX/UI Design"
    ],
    features: [
      "Disseny responsiu i modern",
      "Navegació intuïtiva",
      "Presentació visual optimitzada",
      "Experiència d'usuari fluida"
    ],
    images: [
      {
        url: "https://sumatd.com/wp-content/uploads/2022/01/portada.gif",
        alt: "Vista principal del stand digital de Juan Fuentes",
        caption: "Presentació principal del stand digital."
      }
    ],
    tags: [
      "stand",
      "digital",
      "brand",
      "responsive",
      "ux-ui",
      "presentation"
    ]
  },
];