import React from 'react'
import { Container, ContainerTitle, ConatinerInfo } from './style'
import { Typography } from 'component/Typography'
const Experiencia = () => {
  return (
    <Container id="experiencia">
      <Typography variant="title3" value="Experiencia" />
      <ConatinerInfo>
        <ContainerTitle>
          <Typography variant="Body2" value="AlySystem" />
          <Typography
            color="rgba(255, 255, 255, 0.84)"
            variant="Body2"
            value="Desarollador Front-End"
          />
          <Typography
            mt="16px"
            variant="Body"
            value="Encargado de creación de las pantallas."
          />
          <Typography variant="Body" value="Consumo de Api Rest." />
          <Typography variant="Body" value="Creación de landing Pages." />
          <Typography
            variant="Body"
            value="Trabajar con el equipo de Diseño UI/UX y los desarrolladores back-end."
          />
          <Typography variant="Body" value="Validación de formularios." />
        </ContainerTitle>
        <ContainerTitle>
          <Typography variant="Body2" value="Tempo" />
          <Typography
            color="rgba(255, 255, 255, 0.84)"
            variant="Body2"
            value="Desarollador Front-End"
          />
          <Typography mt="16px" variant="Body" value="Uso de Material Ui." />
          <Typography
            variant="Body"
            value="Encargado de creación de nuevas funcionalidades."
          />
          <Typography variant="Body" value="Consumo de Api Rest." />
          <Typography variant="Body" value="Mejorar funcionalidades." />
          <Typography variant="Body" value="Uso de Redux." />
        </ContainerTitle>
      </ConatinerInfo>
    </Container>
  )
}
export default React.memo(Experiencia)
