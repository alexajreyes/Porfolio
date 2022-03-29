import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.card};
  width: 100%;
  padding: 0 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
export const ContainerTypography = styled.div`
  justify-content: center;
  margin: 32px 0;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  & a {
    margin: 8px 0;
  }
`
export const ContainerNav = styled.div`
  justify-content: center;
  margin: 32px 0;
  max-width: 280px;
  & a {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.primaryText};
    font-size: 24px;
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
export const ContainerRedSocial = styled.div`
  justify-content: center;
  margin: 32px 0;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  & a {
    margin-bottom: 16px;
  }
`

export const ContainerIconRedSocial = styled.div`
  & a {
    margin: 0 16px;

    :first-child {
      margin: 0;
      margin-right: 16px;
    }
  }
`
