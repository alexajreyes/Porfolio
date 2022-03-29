import styled, { keyframes } from 'styled-components'

const rotate360ccw = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
`

const slideBottom = keyframes`
  0% {
    transform: translateX(150px) rotateY(-90deg);
  }
  100% {
    transform: translateX(0) rotateY(0);
  }
`

export const Container = styled.section`
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  & img {
    width: 64px;
    cursor: pointer;
    &:hover {
      animation: ${rotate360ccw} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
  }
`
export const Wrapper = styled.div`
  width: 95%;
  padding: 0 15%;
  display: flex;
  justify-content: space-between; ;
`

export const Overlay = styled.div`
  transition: all 1s ease;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  background: ${({ theme }) => theme.degradedBlack};
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    background: ${({ theme }) => theme.background};
    height: 80px;
    position: static;
  }
`
export const NavBarMenu = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-gap: 16px;
  border-radius: 4px;
  margin: 5%;
  width: 90%;
  padding: 32px 0px;

  animation: ${slideBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  background: ${({ theme }) => theme.background};
  @media (min-width: 768px) {
    animation: none;
    grid-template-columns: repeat(4, max-content);
    grid-template-rows: max-content;
    justify-content: end;
    margin: 0;
    padding: 0;
    width: auto;
  }

  & a {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.primaryText};
    font-size: 18px;
    position: relative;
    text-align: center;
    padding: 8px 0;

    &:last-of-type {
      color: ${({ theme }) => theme.secondaryText};
    }

    @media (min-width: 768px) {
      color: ${({ theme }) => theme.secondaryText};
      font-size: 14px;
      &:hover {
        color: ${({ theme }) => theme.primaryText};
        font-weight: 700;
      }

      &:hover:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -25px;
        background: ${({ theme }) => theme.secondaryText};
        height: 4px;
      }
    }
    &:last-child {
      color: ${({ theme }) => theme.accent};
    }
  }
`
