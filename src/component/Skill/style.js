import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 8px 0;
`
export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1030px) {
    justify-content: center;
  }
`
export const ContentBadge = styled.div`
  display: flex;
  flex-direction: column;
`
export const CardIcon = styled.div`
  width: 90px;
  height: 90px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 32px;
  :first-child {
    margin: 0;
    margin-right: 32px;
  }
  & img {
    width: 48px;
    height: 48px;
  }
`
