import React, { useContext } from 'react'
import {
  Container,
  ContainerImg,
  ContainerInfo,
  ContainerButton,
  GroupButton,
} from './style.js'
import Develop from '../../assets/img/Website development 1.svg'
import { Typography } from 'component/Typography/index.js'
import { ThemeContext } from 'styled-components'
import Button from 'component/Button/index.js'
import PDF from './CVJatniel.pdf'
const Hero = () => {
  const theme = useContext(ThemeContext)
  return (
    <Container>
      <ContainerInfo theme={theme}>
        <Typography value="Desarrollador Front-End" variant="Body2" />
        <Typography
          mb="24px"
          value="Trabajo en Equipo, Proactivo y Dinamico"
          variant="Title"
        />
        <Typography
          mb="72px"
          value="Hola soy Alex reyes responsable y eficiente en busca de un puesto como Desarrollador Front-End.  Busco desarrollar mi carrera, ayudando."
          variant="Body"
        />

        <ContainerButton>
          <a href="#contact">
            <Button mr="8px" width="200px" variant="filled">
              Contactame
            </Button>
          </a>
          <a href={PDF} download="CV Alex Reyes" target="_blank">
            <Button ml="8px" width="200px" variant="outline">
              Descargar CV
            </Button>
          </a>
        </ContainerButton>
      </ContainerInfo>
      <ContainerImg>
        <img src={Develop} alt="Develop" />
      </ContainerImg>
    </Container>
  )
}
export default React.memo(Hero)
