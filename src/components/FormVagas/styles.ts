import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    gap: 8px;
    grid-template-columns: 1fr;
  }
`

export const Input = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`

export const Button = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`
