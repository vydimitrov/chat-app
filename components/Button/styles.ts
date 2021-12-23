import styled from 'styled-components'
import { borderRadius, primaryColor } from '../../shared/styles'

export const ButtonElement = styled.button`
  width: 100%;
  color: #fff;
  background-color: ${primaryColor};
  border-radius: ${borderRadius};
  padding: 0.5rem 1rem;
  border: 0;
  cursor: pointer;
`
