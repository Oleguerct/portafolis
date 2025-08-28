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
  // Leading Global Consulting Corporate Website
  {
    id: "leading-global-consulting-web",
    title: "Web Corporativa Leading Global Consulting",
    client: "Leading Global Consulting",
    category: ["Web development", "Corporate", "UX/UI"],
    links: {
      caseStudy: "https://sumatd.com/proyectos/web-corporativa-leading-global-consulting/"
    },
    summary:
      "Desenvolupament d'una web corporativa moderna i professional per a una consultora global líder, enfocada en transmetre confiança i expertesa.",
    description: {
      short:
        "Creació d'una presència digital corporativa que reflecteix els valors i l'expertesa d'una consultora internacional de primer nivell.",
      long:
        "Hem desenvolupat una web corporativa completa per a Leading Global Consulting, una empresa líder en consultoria global. El projecte s'ha centrat en crear una experiència digital que transmeti professionalitat, confiança i expertesa. " +
        "La web inclou seccions dedicades als serveis de consultoria, casos d'èxit, equip directiu i informació corporativa. S'ha prioritzat un disseny net i modern que faciliti la navegació i millori l'experiència d'usuari. " +
        "L'arquitectura responsive garanteix una experiència òptima en tots els dispositius, mentre que l'optimització SEO assegura una bona visibilitat en cercadors per atreure clients potencials."
    },
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "WordPress",
      "MySQL"
    ],
    features: [
      "Disseny corporatiu professional",
      "Secció de serveis detallada",
      "Galeria de casos d'èxit",
      "Formulari de contacte avançat",
      "Optimització SEO",
      "Disseny responsive"
    ],
    images: [
      {
        url: "https://sumatd.com/wp-content/uploads/placeholders/corporate-hero.jpg",
        alt: "Capçalera principal de la web corporativa Leading Global Consulting",
        caption: "Hero section amb missatge corporatiu principal."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/placeholders/services-section.jpg",
        alt: "Secció de serveis de consultoria",
        caption: "Presentació clara dels serveis oferits."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/placeholders/team-section.jpg",
        alt: "Secció d'equip directiu",
        caption: "Presentació de l'equip directiu i consultors."
      },
      {
        url: "https://sumatd.com/wp-content/uploads/placeholders/contact-form.jpg",
        alt: "Formulari de contacte corporatiu",
        caption: "Formulari de contacte optimitzat per a leads."
      }
    ],
    tags: [
      "corporate",
      "consulting",
      "professional",
      "responsive",
      "seo",
      "wordpress",
      "business"
    ]
  },
];