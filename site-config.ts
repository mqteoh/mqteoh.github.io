import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://mqteoh.github.io',
    avatar: {
        src: avatar,
        alt: 'Mateo Robles Rodríguez'
    },
    title: 'Mateo Robles',
    subtitle: 'Estudiante de Ingeniería de Sistemas',
    description: 'Portafolio de Mateo Robles Rodríguez, estudiante de Ingeniería de Sistemas en la Universidad El Bosque.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Mateo Robles - Portafolio'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Presentación',
            href: '/presentacion'
        },
        {
            text: 'Evidencias',
            href: '/evidencias'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/mqteoh'
        },
        
    ],
    hero: {
        title: 'Hola, soy Mateo ',
        text: "Estudiante de **Ingeniería de Sistemas** en la Universidad El Bosque, enfocado en desarrollo full-stack.\nTrabajo con Angular y Spring Boot construyendo aplicaciones con autenticación JWT y control de acceso por roles, además de Java para estructuras de datos y persistencia de información.\n\nMira mi [video de presentación](/presentacion).",
        image: {
            src: hero,
            alt: 'Mateo Robles Rodríguez'
        },
        actions: [
            {
                text: 'Ver Presentación',
                href: '/presentacion'
            },
            {
                text: 'Contacto',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
