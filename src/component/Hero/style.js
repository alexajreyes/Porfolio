import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  gap: 0 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 0 15%;
  display: grid;
  margin-bottom: 40px;
`
export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  & img {
    width: 100%;
  }
`
export const ContainerInfo = styled.div`
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
