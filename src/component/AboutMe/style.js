import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  display: grid;
  align-items: center;
  gap: 8px;
`
export const ContainerImg = styled.div`
  margin: 32px 0;

  & img {
    max-width: 100%;
  }
`
export const ContainerDescription = styled.div`
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
