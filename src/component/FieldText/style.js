import styled from 'styled-components'

export const FieldTextContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  font-family: 'Roboto', sans-serif;
  &:focus-within {
    label {
      color: ${({ theme }) => theme.accent};
    }
  }
`

export const FieldTextLabel = styled.label`
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.secondaryText};
  transition: color 0.25s;
`

export const FieldTextInput = styled.input`
  height: 54px;
  border: none;
  outline: none;
  padding: 10px 8px;
  max-width: 328px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.card};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.secondaryText};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.25s, background-color 0.25s;

  &:placeholder {
    color: ${({ theme }) => theme.background};
    opacity: 1;
  }

  &:focus {
    background-color: ${({ theme }) => theme.card};
    border-color: ${({ theme }) => theme.accent};
  }
  &:hover {
    border-color: ${({ theme }) => theme.accent};
  }
`

export const FieldTextErrorMessage = styled.p`
  margin-top: 4px;
  background-color: ${({ theme }) => theme.error};
  font-size: 14px;
`
