import TempoImg from 'assets/img/tempo.png'
import EcommerceImg from 'assets/img/eCommerce.png'
import LandingImg from 'assets/img/landing.png'

export const ProjectsProps = [
  {
    img: TempoImg,
    title: 'Tempo 3',
    description:
      'Esta aplicacion de gestion de ticketes de loteria fue creada con React utilizando consumo de api con axios y Redux para el menejo de estados.',
    urlSite: 'https://tempo3-dev.xolosoftapps.net/app/#/',
  },
  {
    img: EcommerceImg,
    title: ' eCommerce',
    description:
      'Esta aplicacion de eCommerce fue creada con React, plantillas de Material UI, implementando carrito de compra y sistema de autenticacion con Firebase.',
    urlSite: 'https://ecormmerce.vercel.app/',
    urlCode: 'https://github.com/alexajreyes/ecommerce',
  },
  {
    img: LandingImg,
    title: 'Landing Page',
    description:
      'Esta landing page fue creada con React y Styled Components, inspirada por un diseño de Frontend Mentor.',
    urlSite: 'https://blogr-eight.vercel.app/',
    urlCode: 'https://github.com/alexajreyes/Blogr',
  },
]
