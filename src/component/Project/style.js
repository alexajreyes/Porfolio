import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  display: grid;
`
export const Container = styled.div`
  margin: 16px 4px;
  padding: 12px;
  border-radius: 8px;
  max-width: 360px;
  background-color: ${({ theme }) => theme.card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ContainerImg = styled.div`
  & img {
    width: 100%;
  }
`

export const ContainerIcons = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  gap: 16px;
  & img {
    margin-right: 16px;
    width: 100%;

    &:active {
      transform: scale(0.95);
    }
    &:hover {
      transform: scale(1.05);
    }
  }
`
