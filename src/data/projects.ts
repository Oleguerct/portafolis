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
        category: ["E-commerce", "Web development"],
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
            "WordPress",
            "PHP",
            "HTML5",
            "CSS3/SCSS",
            "JavaScript",
            "WooCommerce"
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
                alt: "Hero de la botiga Smoking Paper en escriptori",
                caption: "Hero del nou e-commerce en desktop."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2022/01/pag-prod.gif",
                alt: "Animació de la fitxa de producte amb detalls i relacionats",
                caption: "Fitxa de producte orientada a conversió."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2022/01/img-cookies.png",
                alt: "Banner i preferències de cookies a la botiga",
                caption: "Gestió de consentiment de cookies."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2022/01/img-mobile.png",
                alt: "Vistes mòbils de la home i del catàleg",
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
        category: ["Web development", "corporate"],
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
            "HTML5",
            "CSS3/SCSS",
            "JavaScript"
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
                url: "https://sumatd.com/wp-content/uploads/2022/01/romanesco_header-1.png",
                alt: "Hero de Romanesco Studio en escriptori",
                caption: "Capçalera del lloc amb imatge hero."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2022/01/Mockup-Romanesco-x2.png",
                alt: "Composició de diverses pantalles del lloc Romanesco",
                caption: "Visió general de seccions i pàgines clau."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2022/01/Mockup-Romanesco-x3.png",
                alt: "Lloc de Romanesco mostrat en portàtil, tauleta i mòbil",
                caption: "Disseny responsive multi-dispositiu."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2022/01/mobile_romanesco.png",
                alt: "Vista mòbil del lloc de Romanesco",
                caption: "Experiència optimitzada en mòbil."
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

    // Enhanced project: The CBD Show E-commerce
    {
        id: "cbd-show-ecommerce",
        title: "E-commerce The CBD Show",
        client: "The CBD Show",
        category: ["E-commerce", "Web development"],
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
            "PHP",
            "HTML5",
            "CSS3/SCSS",
            "JavaScript",
            "WooCommerce"
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
                url: "https://sumatd.com/wp-content/uploads/2021/06/devices-cbd-2.png",
                alt: "Home del e-commerce The CBD Show en diferents dispositius",
                caption: "Vista multi-dispositiu del catàleg."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/pagina-producto-cbd-1.png",
                alt: "Pàgina de producte amb certificats i informació tècnica",
                caption: "Fitxa de producte completa i clara."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/mobile-cbd-2-1.png",
                alt: "Pantalles mòbils amb promocions i fitxa",
                caption: "Disseny mobile-first i conversió."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/modal-cbd-1.png",
                alt: "Mòdul de verificació d’edat",
                caption: "Compliment normatiu (+18)."
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

    // Web Corporativa Neumáticos Seminuevos
    {
        id: "neumaticos-seminuevos-corporativa",
        title: "Web Corporativa Neumáticos Seminuevos",
        client: "Neumáticos Seminuevos",
        category: ["Web development", "Corporate"],
        links: {
            caseStudy: "https://sumatd.com/proyectos/web-corporativa-neumaticos-seminuevos/"
        },
        summary:
            "Web corporativa per a empresa de neumàtics seminous amb disseny modern, catàleg de productes i sistema de contacte integrat.",
        description: {
            short:
                "Desenvolupament d'una web corporativa moderna per a empresa especialitzada en neumàtics seminous, amb enfoc en experiència d'usuari i conversió.",
            long:
                "Vam crear una web corporativa completa per a una empresa especialitzada en neumàtics seminous, prioritzant la presentació clara dels serveis i productes. " +
                "El projecte inclou un disseny modern i responsive, catàleg de productes organitzat per categories, sistema de contacte integrat i optimització SEO. " +
                "La web està pensada per generar confiança en els clients potencials i facilitar la conversió a través d'un disseny net i una navegació intuïtiva. " +
                "S'ha implementat un sistema de gestió de continguts que permet a l'empresa actualitzar fàcilment la informació de productes i serveis."
        },
        techStack: [
            "WordPress",
            "PHP",
            "HTML5",
            "CSS3/SCSS",
            "JavaScript"
        ],
        features: [
            "Disseny corporatiu modern i professional",
            "Catàleg de productes organitzat",
            "Sistema de contacte integrat",
            "Disseny responsive i mobile-first",
            "Optimització SEO",
            "Gestió de continguts fàcil"
        ],
        images: [
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/img-banner-neum-1-2.png",
                alt: "Hero amb formulari de contacte a Neumáticos Seminuevos",
                caption: "Capçalera amb CTA i formulari."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/img-home-neumaticos-1.png",
                alt: "Composició de pantalles de la home de Neumáticos Seminuevos",
                caption: "Presentació de la home i seccions destacades."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/mobile-neumaticos-1.png",
                alt: "Vista mòbil del lloc de Neumáticos Seminuevos",
                caption: "Interfície optimitzada per a dispositius mòbils."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/blog-instagrm-1-1.png",
                alt: "Secció de blog i disseny d’Instagram",
                caption: "Estratègia de contingut i xarxes socials."
            }
        ],
        tags: [
            "corporate",
            "automotive",
            "tires",
            "catalog",
            "contact-form",
            "responsive",
            "seo",
            "cms"
        ]
    },

    {
        id: "hazte-cliente-recomendador-tarifas",
        title: "Recomendador de Tarifes",
        client: "Client Confidencial",
        category: ["Web development", "Backend"],
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
            "WordPress",
            "PHP",
            "HTML5",
            "CSS3/SCSS",
            "JavaScript"
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
                url: "https://sumatd.com/wp-content/uploads/2021/06/img-banner-1-2.png",
                alt: "Pantalla inicial del recomanador de tarifes",
                caption: "Hero del flux d’onboarding."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/01/img-bloque1-new2.png",
                alt: "Pantalla de tarifa recomanada",
                caption: "Resultat amb proposta de tarifa."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/01/img-tarjetas.png",
                alt: "Targetes de selecció: Llum, Gas, Llum+Gas",
                caption: "Qüestionari dinàmic per necessitats."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/mobile-griss-scaled-9.jpg",
                alt: "Vista en mòbil del recomanador",
                caption: "Interfície responsive."
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

    // Leading Global Consulting Corporate Website
    {
        id: "leading-global-consulting-web",
        title: "Web Corporativa Leading Global Consulting",
        client: "Leading Global Consulting",
        category: ["Web development", "Corporate"],
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
            "WordPress",
            "PHP",
            "HTML5",
            "CSS3/SCSS",
            "JavaScript"
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
                url: "https://sumatd.com/wp-content/uploads/2021/06/LeadingGlobalConsulting-2.png",
                alt: "Home de Leading Global Consulting en escriptori",
                caption: "Hero i missatge corporatiu."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/01/Pantallas-1.png",
                alt: "Composició de diferents pantalles del lloc",
                caption: "Visió general de pàgines clau."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/01/Colores-mobile-1.png",
                alt: "Vista mòbil amb paleta corporativa",
                caption: "Aplicació de marca en mobile."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/01/Contactar-1.png",
                alt: "Pàgina de contacte amb formulari",
                caption: "Contacte i mapa integrats."
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

    // Engiser project: Brand design and e-commerce
    {
        id: "engiser-brand-ecommerce",
        title: "Disseny de marca i e-commerce Engiser",
        client: "Engiser",
        category: ["E-commerce", "Web development"],
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
            "PHP",
            "HTML5",
            "CSS3/SCSS",
            "JavaScript",
            "WooCommerce"
        ],
        features: [
            "Disseny complet d'identitat de marca",
            "Desenvolupament d'e-commerce personalitzat",
            "Integració de marca i experiència digital",
            "Plataforma de venda online optimitzada"
        ],
        images: [
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/imagen_portada_engiser-2.png",
                alt: "Catàleg de la botiga Engiser en escriptori",
                caption: "Catàleg e-commerce Engiser 101."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/img-1-engiser-1.png",
                alt: "Secció de serveis i metrologia en mòbil",
                caption: "Secció de serveis en mobile."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/img-2-engiser-1.png",
                alt: "Fitxa de producte i resum de compra en mòbil",
                caption: "Flux de compra en dispositiu mòbil."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2020/06/engiser_4.png",
                alt: "Aplicació de la identitat visual Engiser",
                caption: "Identitat de marca i interfície."
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

    // Suma Tax Corporate Website
    {
        id: "suma-tax-corporate",
        title: "Web Corporativa Suma Tax",
        client: "Suma Tax",
        category: ["Web development", "Corporate"],
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
                "Es va prioritzar un disseny net i professional, amb una paleta de colors que transmet confiança i serietat, adequada per al sector financer. " +
                "La web inclou seccions detallades sobre els diferents serveis, informació corporativa, i canals de contacte optimitzats per a la conversió de visitants en clients potencials."
        },
        techStack: [
            "WordPress",
            "PHP",
            "HTML5",
            "CSS3/SCSS",
            "JavaScript"
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
                url: "https://sumatd.com/wp-content/uploads/2019/06/sumatax_banner.jpg",
                alt: "Vista mòbil de la home i formulari",
                caption: "Hero i formulari en mobile."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2019/06/sumatax_1-1-scaled.jpg",
                alt: "Home desktop amb plans i serveis",
                caption: "Plans i serveis destacats."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2019/06/sumatax_ordenador.png",
                alt: "Pàgina de serveis en escriptori",
                caption: "Detall de serveis fiscals i consultoria."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2019/06/sumatax_blog.png",
                alt: "Llistat d’entrades del blog corporatiu",
                caption: "Estratègia de contingut per SEO."
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

    {
        id: "juan-fuentes-stand",
        title: "Stand Juan Fuentes",
        client: "Juan Fuentes",
        category: ["Web development", "Brand"],
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
            "WordPress",
            "PHP",
            "HTML5",
            "CSS3/SCSS",
            "JavaScript"
        ],
        features: [
            "Disseny responsiu i modern",
            "Navegació intuïtiva",
            "Presentació visual optimitzada",
            "Experiència d'usuari fluida"
        ],
        images: [
            {
                url: "https://sumatd.com/wp-content/uploads/2019/06/Banner-principal-1.jpg",
                alt: "Home de Juan Fuentes Stand en mockup",
                caption: "Hero amb claim i navegació."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2019/06/juanfu_sinfondo_1.png",
                alt: "Composició de pàgines inclinades",
                caption: "Mostra de la home i seccions."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2019/06/juanfu2-1-scaled.jpg",
                alt: "Pàgina de procés i equip",
                caption: "Procés de treball i professionals."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2019/06/juanfu3-2.jpg",
                alt: "Projecte CRESSI amb galeria d’imatges",
                caption: "Detall de projecte del portafoli."
            }
        ],
        tags: [
            "stand",
            "digital",
            "brand",
            "responsive",
            "presentation"
        ]
    },

    // Corporate website: Metal Converter Spain
    {
        id: "metal-converter-spain-website",
        title: "Web Corporativa Metal Converter Spain",
        client: "Metal Converter Spain",
        category: ["Web development", "Corporate website"],
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
            "WordPress",
            "PHP",
            "HTML5",
            "CSS3/SCSS",
            "JavaScript"
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
                url: "https://sumatd.com/wp-content/uploads/2021/06/principal-2.png",
                alt: "Home de Metal Converter Spain en mockup",
                caption: "Pàgina principal del lloc."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/mac-1.png",
                alt: "Secció de productes reciclats",
                caption: "Detall de secció 'Productes'."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/pa%CC%81ginas_sin-fondo-1.png",
                alt: "Composició de diverses pàgines",
                caption: "Presentació de diferents pantalles."
            },
            {
                url: "https://sumatd.com/wp-content/uploads/2021/06/mobile-1.png",
                alt: "Seccions en mòbil: valorització i reciclatge",
                caption: "Responsive i recorregut en mobile."
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
    }
];

