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
  // Enhanced project: The CBD Show E-commerce
  {
    id: "cbd-show-ecommerce",
    title: "E-commerce The CBD Show",
    client: "The CBD Show",
    category: ["E-commerce", "Web development", "UX/UI"],
    links: {
      caseStudy: "https://sumatd.com/proyectos/e-commerce-the-cbd-show/",
      site: "https://thecbdshow.com/"
    },
    summary:
      "Botiga especialitzada en productes CBD amb enfocament educatiu, catàleg avançat i experiència d'usuari optimitzada per a un sector regulat.",
    description: {
      short:
        "Desenvolupament d'un e-commerce especialitzat en productes CBD que combina venda online amb contingut educatiu, complint amb la normativa del sector.",
      long:
        "Vam crear l'e-commerce de The CBD Show amb un enfocament dual: venda de productes CBD i educació del consumidor sobre aquest sector regulat. " +
        "La plataforma inclou un catàleg detallat amb filtres avançats per tipus de producte, concentració de CBD i propòsit d'ús. " +
        "Cada fitxa de producte incorpora informació técnica completa, certificats d'anàlisi i guies d'ús per garantir la transparència. " +
        "A nivell de compliment normatiu, s'ha implementat verificació d'edat, avís legal específic per CBD i restriccions geogràfiques de venda. " +
        "L'experiència d'usuari està optimitzada amb un blog educatiu integrat, calculadora de dosificació i chat d'assessorament especialitzat."
    },
    techStack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "SCSS", 
      "MySQL",
      "Docker",
      "AWS"
    ],
    features: [
      "Catàleg amb filtres avançats per tipus i concentració",
      "Fitxes de producte amb certificats d'anàlisi",
      "Sistema de verificació d'edat i compliment normatiu",
      "Blog educatiu integrat sobre CBD",
      "Calculadora de dosificació personalitzada",
      "Chat d'assessorament especialitzat"
    ],
    images: [
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/cbd-portada.jpg",
        alt: "Vista de la home de The CBD Show amb destacats de productes",
        caption: "Pàgina principal amb selecció de productes destacats."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/cbd-catalogo.jpg", 
        alt: "Catàleg de productes amb filtres avançats per concentració",
        caption: "Sistema de filtres especialitzat per tipus de CBD."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/cbd-producto.jpg",
        alt: "Fitxa de producte amb certificats i informació tècnica",
        caption: "Detall de producte amb certificats d'anàlisi."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/cbd-blog.jpg",
        alt: "Secció del blog educatiu sobre usos del CBD",
        caption: "Contingut educatiu integrat a la plataforma."
      }
    ],
    tags: [
      "ecommerce",
      "cbd",
      "healthcare",
      "regulated-products",
      "educational-content",
      "age-verification",
      "compliance",
      "woocommerce"
    ]
  },
];