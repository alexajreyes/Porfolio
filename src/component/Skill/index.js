import { Typography } from 'component/Typography'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Container, ContainerCard, CardIcon, ContentBadge } from './style'
import IconHtml from 'assets/icons/iconHtml.svg'
import IconsFigma from 'assets/icons/Figma.svg'
import IconCSS from 'assets/icons/CSS3.svg'
import IconsJS from 'assets/icons/8546937_js_square_icon 1.svg'
import IconSass from 'assets/icons/8666425_sass_icon 1.svg'
import IconReact from 'assets/icons/8666372_react_icon 1.svg'
import IconGit from 'assets/icons/Group (1).svg'
import IconGitHub from 'assets/icons/_x31__stroke.svg'

const ListIcons = [
  { icon: IconHtml, title: 'HTML' },
  { icon: IconsFigma, title: 'Figma' },
  { icon: IconCSS, title: 'CSS' },
  { icon: IconGitHub, title: 'Github' },
  { icon: IconGit, title: 'Git' },
  { icon: IconReact, title: 'React' },
  { icon: IconSass, title: 'Sass' },
  { icon: IconsJS, title: 'JavaScript' },
]
const Skills = () => {
  const theme = useContext(ThemeContext)

  return (
    <Container theme={theme} id="skill">
      <Typography
        mb="16px"
        value="Mi experiencia incluye pero no se limita."
        variant="title4"
      />
      <ContainerCard>
        {ListIcons.map((icon, _) => {
          const _icon = icon.icon
          const title = icon.title

          return (
            <ContentBadge key={_}>
              <CardIcon>
                <img src={_icon} alt={'icons_skill'} />
              </CardIcon>
              <Typography mt="8px" value={title} variant="body3" />
            </ContentBadge>
          )
        })}
      </ContainerCard>
    </Container>
  )
}
export default React.memo(Skills)
