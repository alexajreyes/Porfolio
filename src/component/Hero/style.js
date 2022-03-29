import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1030px) {
    justify-content: center;
  }
`
export const ContainerImg = styled.div`
  max-width: 480px;
  & img {
    width: 100%;
  }
`
export const ContainerInfo = styled.div`
  max-width: 500px;
  margin-top: 128px;
`

export const ContainerButton = styled.div`
  display: flex;
  @media (max-width: 1030px) {
    justify-content: center;
  }
  & a {
    max-width: 320px;
    text-decoration: none;
  }
`
