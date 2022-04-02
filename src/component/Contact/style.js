import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 128px 0;
  width: 100%;
  padding: 0 15%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  display: grid;
  align-items: center;
`
export const ContainerForm = styled.div`
  max-width: 380px;
`
export const ConatinerImg = styled.div`
  width: 100%;
  & img {
    width: 100%;
  }
`
export const ContainerButton = styled.div`
  max-width: 328px;
`
