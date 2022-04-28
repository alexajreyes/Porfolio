import React from 'react'
import { Wrapper, ContainerImg, ContainerDescription } from './style'
import ImgAboutMe from 'assets/img/picAboutme.png'
import { Typography } from 'component/Typography'
const AboutMe = () => {
  return (
    <Wrapper id="aboutMe">
      <ContainerImg>
        <img src={ImgAboutMe} alt="about me" />
      </ContainerImg>
      <ContainerDescription>
        <Typography variant="title2" value="Sobre mi" />
        <Typography variant="body2" value="Soy Alex Reyes" />
        <Typography
          mb="32px"
          variant="Body"
          value="Trabajo full time en React JS, JavaScript, CSS me gusta ayudar con lo que me apasiona el desarrollo web."
        />
        <Typography
          mb="8px"
          variant="title4"
          value="Codificar, Diseñar y Aprender Nuevas Tecnologías "
        />
        <Typography
          variant="Body"
          value="El Front-end es mi pasión y realmente disfruto todo el proceso de creación, me enfoco en el desarrollo web de JavaScript con la habilidad de la programación para ofrecer una experiencia de usuario mejor a través del desarrollo eficiente."
        />
      </ContainerDescription>
    </Wrapper>
  )
}
export default React.memo(AboutMe)
