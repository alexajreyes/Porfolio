import Navbar from 'component/Navbar'
import { memo } from 'react'
import { Container } from './style'
import Experiencia from 'component/Experiencia'
import Hero from 'component/Hero'
import Project from 'component/Projects'
import Skill from 'component/Skill'
import Comment from 'component/Comment'
import AboutMe from 'component/AboutMe'
import Contact from 'component/Contact'
import Footer from 'component/Footer'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../style/theme'

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <Hero />
        <Skill />
        <Comment />
        <Project />
        <AboutMe />
        <Experiencia />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
export default memo(Home)
