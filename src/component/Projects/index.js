import Project from 'component/Project'
import React from 'react'
import { ProjectsProps } from 'Constan'
import { Container } from './style'
const Projects = () => {
  return (
    <Container>
      <Project project={ProjectsProps} />
    </Container>
  )
}
export default React.memo(Projects)
