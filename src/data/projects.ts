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
  // Engiser project: Brand design and e-commerce
  {
    id: "engiser-brand-ecommerce",
    title: "Disseny de marca i e-commerce Engiser",
    client: "Engiser",
    category: ["E-commerce", "Web development", "UX/UI"],
    links: {
      caseStudy: "https://sumatd.com/proyectos/diseno-de-marca-y-e-commerce-para-engiser-101/"
    },
    summary:
      "Projecte integral de disseny de marca i desenvolupament d'e-commerce per a Engiser, combinant identitat visual i plataforma de venda online.",
    description: {
      short:
        "Desenvolupament complet de la identitat de marca i implementació d'una plataforma e-commerce per a Engiser, integrant disseny visual i funcionalitat comercial.",
      long:
        "Projecte integral que combina el disseny de la identitat de marca d'Engiser amb el desenvolupament d'una plataforma e-commerce robusta. " +
        "El projecte va abastar des de la conceptualització de la marca, creació del logotip i elements visuals, fins a la implementació tècnica de la botiga online. " +
        "Es va prioritzar la coherència entre la identitat visual i l'experiència d'usuari a la plataforma digital, assegurant una presència online sòlida i professional per al client."
    },
    techStack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Adobe Creative Suite"
    ],
    features: [
      "Disseny complet d'identitat de marca",
      "Desenvolupament d'e-commerce personalitzat",
      "Integració de marca i experiència digital",
      "Plataforma de venda online optimitzada"
    ],
    images: [
      {
        url: "https://sumatd.com/wp-content/uploads/placeholder-engiser.jpg",
        alt: "Presentació de la identitat de marca d'Engiser",
        caption: "Identitat visual i aplicacions de marca."
      }
    ],
    tags: [
      "brand-design",
      "ecommerce",
      "identity",
      "wordpress",
      "woocommerce",
      "web-development"
    ]
  },
];