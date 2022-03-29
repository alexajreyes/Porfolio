import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 128px 0;
  width: 100%;
  padding: 0 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1086px) {
    justify-content: center;
  }
`
export const ContainerForm = styled.div`
  max-width: 380px;
`
export const ConatinerImg = styled.div`
  max-width: 380px;
  & img {
    width: 100%;
  }
`
