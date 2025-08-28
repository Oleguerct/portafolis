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
    id: "hazte-cliente-recomendador-tarifas",
    title: "Recomendador de Tarifes",
    client: "Client Confidencial",
    category: ["Web development", "UX/UI", "Backend"],
    links: {
      caseStudy: "https://sumatd.com/proyectos/hazte-cliente-recomendador-de-tarifas/"
    },
    summary:
      "Sistema intel·ligent de recomanació de tarifes personalitzades per facilitar la conversió de visitants en clients.",
    description: {
      short:
        "Desenvolupament d'una eina de recomanació de tarifes que ajuda als usuaris a trobar l'opció més adequada per les seves necessitats i facilita la conversió en clients.",
      long:
        "Vam crear un sistema intel·ligent de recomanació de tarifes que guia els visitants a través d'un procés personalitzat per trobar l'opció que millor s'adapti a les seves necessitats. " +
        "L'eina combina una interfície intuïtiva amb lògica de negoci sofisticada per analitzar els requeriments de l'usuari i presentar recomanacions personalitzades. " +
        "El sistema inclou un qüestionari dinàmic, comparació de tarifes en temps real, i un flux d'onboarding optimitzat per maximitzar les conversions. " +
        "També integra seguiment d'analítiques avançades per mesurar l'eficàcia del procés de recomanació i optimitzar continuament l'experiència d'usuari."
    },
    techStack: [
      "JavaScript",
      "Vue.js",
      "PHP",
      "Laravel",
      "MySQL",
      "API REST",
      "CSS3",
      "HTML5"
    ],
    features: [
      "Qüestionari dinàmic personalitzat",
      "Motor de recomanació intel·ligent",
      "Comparació de tarifes en temps real",
      "Flux d'onboarding optimitzat",
      "Seguiment d'analítiques avançades",
      "Interfície responsive i accessible"
    ],
    images: [
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/recomendador-hero.png",
        alt: "Pantalla principal del recomendador de tarifes",
        caption: "Interfície principal del sistema de recomanació."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/recomendador-quiz.png",
        alt: "Qüestionari dinàmic per personalitzar recomanacions",
        caption: "Procés de qüestionari personalitzat."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/recomendador-results.png",
        alt: "Pàgina de resultats amb recomanacions personalitzades",
        caption: "Resultats i comparació de tarifes recomanades."
      }
    ],
    tags: [
      "recommendation-engine",
      "conversion-optimization",
      "dynamic-forms",
      "personalization",
      "analytics",
      "lead-generation",
      "vue",
      "laravel"
    ]
  },
];