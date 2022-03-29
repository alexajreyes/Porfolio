import { Typography } from 'component/Typography'
import React from 'react'
import { Wrapper, ContainerIcon } from './style'
import IconDown from 'assets/icons/arrow-down.svg'

const Comment = () => {
  return (
    <Wrapper>
      <Typography
        mt="112px"
        align="center"
        variant="title4"
        value="A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles"
      />
      <Typography
        mt="24px"
        variant="body"
        value=" Aquí hay algunos que me gustaría compartir."
      />
      <ContainerIcon>
        <img src={IconDown} alt={'Icon_down'} />
      </ContainerIcon>
    </Wrapper>
  )
}
export default React.memo(Comment)
