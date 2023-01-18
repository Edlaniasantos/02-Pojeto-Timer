import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`


export const BaseCountdawnButton = styled.button`
  width: 100%;
  border: 0;
  color: ${(props) => props.theme['gray-100']};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
 
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

`
export const StartCountdawnButton = styled(BaseCountdawnButton)`
 background: ${(props) => props.theme['green-500']};
  
  &:not(disabled):houver {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdawnButton = styled(BaseCountdawnButton)`
background: ${(props) => props.theme['red-500']};
 
  &:not(disabled):houver {
    background: ${(props) => props.theme['red-700']};
  }
`
