import { Typography } from 'component/Typography'
import React from 'react'
import {
  Wrapper,
  ContainerTypography,
  ContainerNav,
  ContainerRedSocial,
  ContainerIconRedSocial,
} from './style'
import address from 'assets/icons/Managua, Nicaragua.svg'
import emailPersonal from 'assets/icons/alex.reyesf02@gmail.com.svg'
import GithubIcon from 'assets/icons/Github.svg'
import TwitterIcon from 'assets/icons/Vector (1).svg'
import LinkendinIcon from 'assets/icons/Vector.svg'

const Footer = () => {
  return (
    <Wrapper>
      <ContainerTypography>
        <Typography variant="title4" mb="16px" value="Mantente conectado" />
        <a
          href="https://www.google.es/maps/place/Managua/@12.0976239,-86.3985472,11z/data=!4m5!3m4!1s0x8f71560dd907880b:0x6c5ef4a2144f4c6a!8m2!3d12.1149926!4d-86.2361744"
          target="_blank"
        >
          <img src={address} alt="address" />
        </a>
        <a href="tel:+50557441952">
          <Typography variant="body" mb="16px" value="+(505) 5744-1952" />
        </a>
        <Typography
          variant="body2"
          value="© Alex. Todos los derechos reservados"
        />
      </ContainerTypography>
      <ContainerNav>
        <a href="#home">| Inicio |</a>
        <a href="#skill"> Habilidades |</a>
        <a href="#projects"> Proyectos |</a>
        <a href="#aboutMe"> sobre mi |</a>
      </ContainerNav>
      <ContainerRedSocial>
        <a href="href='mailto:alex.reyesf02@gmail.com'">
          <img src={emailPersonal} alt="email personal" />
        </a>
        <ContainerIconRedSocial>
          <a href="https://github.com/alexajreyes">
            <img src={GithubIcon} alt="Github Icon" />
          </a>
          <a href="https://twitter.com/floresalexreyes">
            <img src={TwitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://www.linkedin.com/in/alex-jatniel-flores-reyes-252310215/">
            <img src={LinkendinIcon} alt="Linkendin Icon" />
          </a>
        </ContainerIconRedSocial>
      </ContainerRedSocial>
    </Wrapper>
  )
}
export default React.memo(Footer)
