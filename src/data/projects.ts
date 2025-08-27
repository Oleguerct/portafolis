import { Project, ProjectCategory, LegacyProject, EnhancedProject } from '../types/Project';

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
    responsibilities: [
      "Desenvolupament de la pàgina de producte (estructura i components)",
      "Implementació de llistes i productes relacionats",
      "Maquetació responsive i optimització mobile-first",
      "Integració de banner/gestor de cookies i tracking d'esdeveniments",
      "Disseny i implementació del sistema de recompenses (punts, afiliació, descomptes)",
      "Integració del saldo i redempció al compte d'usuari i al checkout"
    ],
    features: [
      "Fitxa de producte clara i directa",
      "Bloc de productes relacionats",
      "Disseny i comportament mobile-first",
      "Sistema de recompenses a mida (punts, afiliació, descomptes)"
    ],
    rewards: {
      scope:
        "Sistema de fidelització i afiliació personalitzat, integrat end-to-end a l'e-commerce.",
      modules: [
        "Punts de fidelitat acumulables (compres i altres esdeveniments)",
        "Afiliació amb atribució de referències",
        "Descomptes i cupons generats des dels punts"
      ],
      rules: [
        "Escales de punts i multiplicadors per categories/campanyes",
        "Caducitat configurable i exclusions per producte o codi",
        "Límit de redempció per comanda"
      ],
      ux: [
        "Saldo de punts en temps real a l'àrea d'usuari",
        "Historial de moviments i redempcions",
        "Aplicació del descompte en un sol clic al checkout"
      ]
    },
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
  } as EnhancedProject,
  // Legacy projects
  {
    id: 'ecommerce-smoking-paper',
    title: 'E-commerce Smoking Paper',
    shortDescription: 'Plataforma de comerç electrònic especialitzada en papers de fumar amb sistema de gestió d\'inventari avançat.',
    fullDescription: 'Desenvolupament complet d\'una plataforma de comerç electrònic especialitzada en la venda de papers de fumar. El projecte inclou un frontend modern en React amb TypeScript, un backend robust en Node.js amb Express, i una base de dades optimitzada per a la gestió d\'inventari en temps real. La plataforma ofereix funcionalitats avançades com cerca intel·ligent, filtratge per categories, sistema de recomanacions, gestió d\'usuaris amb autenticació JWT, i un panel d\'administració complet per a la gestió de productes i comandes.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe API', 'AWS S3', 'Docker'],
    category: 'fullstack',
    date: '2023-09-15',
    imageUrl: '/images/ecommerce-project.jpg',
    demoUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/user/ecommerce-smoking-paper',
    features: [
      'Sistema d\'autenticació i autorització amb JWT',
      'Gestió d\'inventari en temps real amb notificacions automàtiques',
      'Processament de pagaments segur amb Stripe',
      'Panel d\'administració amb dashboard analític',
      'Sistema de cerca avançada amb filtres dinàmics',
      'Responsive design adaptat a mòbils i tablets',
      'Optimització SEO per a millor posicionament',
      'Sistema de recomanacions basat en l\'historial de compres'
    ],
    challenges: [
      'Implementació d\'un sistema de gestió d\'inventari eficient que pugui manejar actualitzacions concurrents',
      'Optimització de consultes a base de dades per a cerca ràpida amb milers de productes',
      'Integració segura amb l\'API de Stripe per a pagaments',
      'Desenvolupament d\'una arquitectura escalable que pugui créixer amb el negoci'
    ],
    learnings: [
      'Millora en l\'ús de patrons de disseny per a arquitectures escalables',
      'Experiència avançada amb Redis per a caching de sessions i dades freqüents',
      'Implementació de tests automatitzats amb Jest i Cypress',
      'Configuració de CI/CD amb GitHub Actions per a desplegament automàtic'
    ]
  } as LegacyProject,
  {
    id: 'task-management-app',
    title: 'Aplicació de Gestió de Tasques',
    shortDescription: 'Aplicació web per a la gestió col·laborativa de projectes i tasques amb funcionalitats de temps real.',
    fullDescription: 'Aplicació web completa per a la gestió de projectes i tasques en equips de treball. Desenvolupada amb React i implementant Socket.io per a funcionalitats en temps real com notificacions instantànies, actualitzacions col·laboratives i chat integrat. El backend està construït amb Node.js i utilitza PostgreSQL per a l\'emmagatzematge de dades relacionals complexes.',
    technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis', 'Material-UI', 'Jest'],
    category: 'fullstack',
    date: '2023-06-20',
    imageUrl: '/images/task-management.jpg',
    githubUrl: 'https://github.com/user/task-management',
    features: [
      'Gestió de projectes amb múltiples membres',
      'Assignació i seguiment de tasques amb deadlines',
      'Notificacions en temps real amb Socket.io',
      'Chat integrat per a cada projecte',
      'Dashboard amb mètriques de productivitat',
      'Calendari interactiu per a planificació de tasques'
    ],
    challenges: [
      'Sincronització de dades en temps real entre múltiples usuaris',
      'Optimització del rendiment amb grans volums de dades',
      'Implementació d\'un sistema de permisos granular'
    ],
    learnings: [
      'Arquitectura de sistemes en temps real amb WebSockets',
      'Gestió d\'estat complex amb Redux Toolkit',
      'Implementació de tests d\'integració per a funcionalitats col·laboratives'
    ]
  } as LegacyProject,
  {
    id: 'weather-api',
    title: 'API del Temps Avançada',
    shortDescription: 'API RESTful per a dades meteorològiques amb sistema de prediccions i alertes automàtiques.',
    fullDescription: 'Desenvolupament d\'una API RESTful robusta per a la consulta de dades meteorològiques. El sistema integra múltiples fonts de dades externes, processa informació meteorològica en temps real, i ofereix prediccions avançades utilitzant algoritmes de machine learning. Inclou un sistema d\'alertes automàtiques per a condicions meteorològiques extremes.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'Celery', 'TensorFlow'],
    category: 'backend',
    date: '2023-04-10',
    imageUrl: '/images/weather-api.jpg',
    githubUrl: 'https://github.com/user/weather-api',
    features: [
      'Integració amb múltiples APIs meteorològiques externes',
      'Sistema de prediccions amb machine learning',
      'Alertes automàtiques per condicions extremes',
      'Rate limiting i autenticació amb API keys',
      'Documentació interactiva amb Swagger',
      'Caching intel·ligent per optimitzar rendiment'
    ],
    challenges: [
      'Processament eficient de grans volums de dades meteorològiques',
      'Implementació d\'algoritmes de predicció precisos',
      'Gestió de fallades en APIs externes amb circuit breakers'
    ],
    learnings: [
      'Arquitectura de microserveis amb Docker i Kubernetes',
      'Implementació de cues de tasques amb Celery per a processament asíncron',
      'Experiència amb TensorFlow per a models predictius'
    ]
  } as LegacyProject,
  {
    id: 'blog-cms',
    title: 'Sistema de Gestió de Continguts',
    shortDescription: 'CMS modern desenvolupat amb Next.js per a blogs i llocs web de contingut dinàmic.',
    fullDescription: 'Sistema de gestió de continguts (CMS) modern i flexible desenvolupat amb Next.js que permet als usuaris crear, editar i publicar contingut de manera intuïtiva. Inclou un editor de text ric, gestió de mitjans, sistema de comentaris, i optimitzacions avançades per a SEO i rendiment.',
    technologies: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'AWS S3', 'Vercel'],
    category: 'web',
    date: '2023-02-15',
    imageUrl: '/images/blog-cms.jpg',
    demoUrl: 'https://blog-cms-demo.vercel.app',
    githubUrl: 'https://github.com/user/blog-cms',
    features: [
      'Editor de text ric amb formatació avançada',
      'Gestió de mitjans amb optimització automàtica d\'imatges',
      'Sistema de comentaris amb moderació',
      'SEO optimization amb meta tags dinàmics',
      'Generació estàtica per a rendiment òptim',
      'Panel d\'administració intuïtiu'
    ],
    challenges: [
      'Implementació d\'SSG (Static Site Generation) per a millor rendiment',
      'Optimització d\'imatges automàtica per a diferents dispositius',
      'Sistema de caching multinivell per a contingut dinàmic'
    ],
    learnings: [
      'Arquitectura híbrida SSG/SSR amb Next.js',
      'Optimització de Core Web Vitals per a millor UX',
      'Implementació de CDN per a distribució global de contingut'
    ]
  } as LegacyProject
];