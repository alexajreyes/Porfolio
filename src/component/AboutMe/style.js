import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1370px) {
    padding: 0 8%;
    justify-content: center;
  }
`
export const ContainerImg = styled.div`
  margin: 32px 0;
  max-width: 400px;
  & img {
    width: 100%;
  }
`
export const ContainerDescription = styled.div`
  max-width: 50%;
  margin-top: 32px;
  @media (max-width: 400px) {
    & h2,
    p,
    h4,
    span {
      text-align: center;
    }
  }
`
