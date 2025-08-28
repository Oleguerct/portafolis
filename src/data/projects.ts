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
  // Corporate website: Metal Converter Spain
  {
    id: "metal-converter-spain-website",
    title: "Web Corporativa Metal Converter Spain",
    client: "Metal Converter Spain",
    category: ["Web development", "Corporate website", "UX/UI"],
    links: {
      caseStudy: "https://sumatd.com/proyectos/web-corporativa-metal-converter-spain/"
    },
    summary:
      "Lloc web corporatiu per a Metal Converter Spain, especialitzada en conversió i tractament de metalls.",
    description: {
      short:
        "Desenvolupament d'un lloc web corporatiu modern per a Metal Converter Spain, enfocant-se en la presentació professional dels serveis de conversió i tractament de metalls.",
      long:
        "Vam crear un lloc web corporatiu per a Metal Converter Spain que reflecteix la seva expertesa en conversió i tractament de metalls. " +
        "El projecte va incloure un disseny modern i professional que transmet confiança i solidesa tècnica. " +
        "La web presenta de manera clara els serveis de l'empresa, la seva trajectòria i capacitats tècniques, " +
        "amb una arquitectura d'informació optimitzada per facilitar la navegació i la captació de clients potencials."
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
      "Disseny corporatiu modern i professional",
      "Presentació clara dels serveis",
      "Secció sobre l'empresa i trajectòria",
      "Formulari de contacte optimitzat",
      "Disseny responsive"
    ],
    images: [
      {
        url: "https://sumatd.com/wp-content/uploads/2023/01/metal-converter-hero.jpg",
        alt: "Vista principal del lloc web de Metal Converter Spain",
        caption: "Pàgina principal amb disseny corporatiu modern."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/01/metal-converter-services.jpg",
        alt: "Secció de serveis de Metal Converter Spain",
        caption: "Presentació dels serveis de conversió de metalls."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/01/metal-converter-about.jpg",
        alt: "Secció sobre l'empresa Metal Converter Spain",
        caption: "Informació corporativa i trajectòria de l'empresa."
      }
    ],
    tags: [
      "corporate",
      "industrial",
      "metals",
      "responsive",
      "wordpress",
      "professional"
    ]
  },
];