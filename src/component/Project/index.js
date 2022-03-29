import React from 'react'
import {
  Wrapper,
  Container,
  ContainerImg,
  ContainerTitle,
  ContainerInfoProject,
  ContainerIcons,
} from './style'
import { Typography } from 'component/Typography'
import GotoTheSite from 'assets/icons/ir a sitio.svg'
import GotoTheGihub from 'assets/icons/ir a codigo.svg'

const Project = ({ project }) => {
  return (
    <Wrapper id="projects">
      {project.map((_project, _) => {
        const img = _project.img
        const title = _project.title
        const description = _project.description
        const urlSite = _project.urlSite
        const urlCode = _project.urlCode

        return (
          <Container key={_}>
            <ContainerImg>
              <img src={img} alt={title} />
            </ContainerImg>
            <Typography mt="8px" value={title} variant="title4" />
            <Typography
              mt="12px"
              mb="16px"
              value={description}
              variant="body"
            />
            <ContainerIcons>
              <a href={urlSite} target="_blank">
                <img src={GotoTheSite} alt="icon link" />
              </a>
              {title.toLowerCase() !== 'tempo 3' && (
                <a href={urlCode} target="_blank">
                  <img src={GotoTheGihub} alt="icon link" />
                </a>
              )}
            </ContainerIcons>
          </Container>
        )
      })}
    </Wrapper>
  )
}
export default React.memo(Project)
