import React, { useContext, useState, useEffect } from 'react'
import { Container, Overlay, NavBarMenu, Wrapper } from './style'
import Hamburger from 'hamburger-react'
import Logo from '../../assets/img/logo.svg'

import { ThemeContext } from 'styled-components'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { Context } from '../../context'

const NavBar = () => {
  const theme = useContext(ThemeContext)

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const windowWidth = useWindowWidth()
  const { openModal } = useContext(Context)

  useEffect(() => {
    windowWidth >= 768 ? setIsOpenMenu(true) : setIsOpenMenu(false)
  }, [windowWidth])

  const handleClick = () => {
    windowWidth <= 768 && setIsOpenMenu(false)
  }

  return (
    <Container id="home">
      <Wrapper>
        <a href="#home">
          <img src={Logo} alt="Logo" />
        </a>
        <Overlay visible={isOpenMenu} theme={theme}>
          <NavBarMenu theme={theme}>
            <a href="#aboutMe">Sobre mi</a>
            <a href="#skill">Habilidades</a>
            <a href="#projects">Proyectos</a>
            <a
              href="#contact"
              onClick={() => {
                handleClick()
                openModal()
              }}
            >
              Contactame
            </a>
          </NavBarMenu>
        </Overlay>
        {windowWidth < 768 && (
          <Hamburger
            color="rgba(255, 255, 255, 0.84)"
            size={32}
            toggled={isOpenMenu}
            toggle={setIsOpenMenu}
          />
        )}
      </Wrapper>
    </Container>
  )
}
export default React.memo(NavBar)
