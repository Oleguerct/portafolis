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
  },
  {
    id: 'corporate',
    name: 'Webs Corporatives',
    description: 'Websites corporatius i institucionals amb enfoc professional'
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
  // New project: Romanesco Studio Corporate Website
  {
    id: "romanesco-studio-web",
    title: "Web Corporativa Romanesco Studio",
    client: "Romanesco Studio",
    category: ["Web development", "corporate", "UX/UI"],
    links: {
      caseStudy: "https://sumatd.com/proyectos/web-corporativa-romanesco-studio/",
      site: "https://romanescostudio.com/"
    },
    summary:
      "Web corporativa moderna i elegant per a un estudi de disseny, amb enfoc en la presentació de serveis i portafoli de projectes.",
    description: {
      short:
        "Desenvolupament d'una web corporativa per a Romanesco Studio amb disseny modern, navegació intuïtiva i presentació professional dels seus serveis de disseny.",
      long:
        "Vam desenvolupar la web corporativa de Romanesco Studio amb un enfoc modern i professional que reflecteix la qualitat del seu treball en disseny. " +
        "La web prioritza una presentació clara dels serveis de l'estudi, amb seccions dedicades al portafoli, l'equip i els processos de treball. " +
        "S'ha implementat un sistema de gestió de continguts que permet a l'equip actualitzar fàcilment els projectes i notícies. " +
        "El disseny responsive garanteix una experiència òptima en tots els dispositius, mentre que l'optimització SEO millora la visibilitat en cercadors. " +
        "També s'ha integrat un formulari de contacte avançat amb validació i sistema de notificacions automàtiques."
    },
    techStack: [
      "WordPress",
      "PHP",
      "JavaScript",
      "SCSS",
      "MySQL",
      "ACF",
      "Elementor",
      "WP Rocket"
    ],
    features: [
      "Disseny responsive i modern",
      "Sistema de gestió de portafoli",
      "Formulari de contacte avançat",
      "Optimització SEO i rendiment",
      "Integració amb xarxes socials",
      "Sistema de gestió de continguts"
    ],
    images: [
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/romanesco-home.jpg",
        alt: "Pàgina principal de Romanesco Studio amb disseny modern",
        caption: "Pàgina d'inici amb hero visual impactant."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/romanesco-portfolio.jpg",
        alt: "Secció de portafoli amb projectes destacats",
        caption: "Galeria de projectes amb filtres i categories."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/romanesco-services.jpg",
        alt: "Pàgina de serveis amb informació detallada",
        caption: "Presentació clara dels serveis oferits."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/2023/03/romanesco-contact.jpg",
        alt: "Formulari de contacte i informació de l'estudi",
        caption: "Formulari de contacte integrat amb mapa."
      }
    ],
    tags: [
      "corporate",
      "design-studio",
      "portfolio",
      "cms",
      "responsive",
      "seo",
      "contact-form",
      "wordpress"
    ]
  },
];