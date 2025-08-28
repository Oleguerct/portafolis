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
  // Suma Tax Corporate Website
  {
    id: "suma-tax-corporate",
    title: "Web Corporativa Suma Tax",
    client: "Suma Tax",
    category: ["Web development", "Corporate", "UX/UI"],
    links: {
      caseStudy: "https://sumatd.com/proyectos/web-corporativa-suma-tax/"
    },
    summary:
      "Desenvolupament d'una web corporativa moderna per a Suma Tax, centrada en la presentació de serveis fiscals i comptables amb un disseny professional i accessible.",
    description: {
      short:
        "Creació d'una presència digital professional per a Suma Tax que transmet confiança i professionalitat en el sector dels serveis fiscals i comptables.",
      long:
        "Vam desenvolupar la web corporativa de Suma Tax amb l'objectiu de crear una presència digital sòlida que reflectís la professionalitat i experiència de l'empresa en el sector fiscal i comptable. " +
        "El projecte es va centrar en crear una estructura clara i navegable que permetés als clients potencials trobar fàcilment la informació sobre els serveis oferits. " +
        "Es va priorititzar un disseny net i professional, amb una paleta de colors que transmet confiança i serietat, adequada per al sector financer. " +
        "La web inclou seccions detallades sobre els diferents serveis, informació corporativa, i canals de contacte optimitzats per a la conversió de visitants en clients potencials."
    },
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "WordPress",
      "PHP",
      "MySQL"
    ],
    features: [
      "Disseny corporatiu professional",
      "Secció de serveis detallada",
      "Formularis de contacte optimitzats",
      "Disseny responsive i accessible",
      "Integració amb sistemes de gestió",
      "Optimització SEO per al sector fiscal"
    ],
    images: [
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/suma-tax-hero.jpg",
        alt: "Vista principal de la web corporativa de Suma Tax",
        caption: "Pàgina principal amb disseny corporatiu professional."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/suma-tax-services.jpg",
        alt: "Secció de serveis de la web de Suma Tax",
        caption: "Presentació clara dels serveis fiscals i comptables."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/suma-tax-contact.jpg",
        alt: "Formulari de contacte de Suma Tax",
        caption: "Formulari de contacte optimitzat per a conversions."
      }
    ],
    tags: [
      "corporate",
      "fiscal-services",
      "professional",
      "responsive",
      "seo",
      "wordpress",
      "business"
    ]
  },
];