import styled from 'styled-components'
import { borderRadius, primaryColor, secondaryColor } from '../../shared/styles'
import { Props } from './types'

export const ButtonElement = styled.button<Props>`
  width: 100%;
  color: #fff;
  background-color: ${({ variant }) =>
    variant === 'primary' ? primaryColor : secondaryColor};
  border-radius: ${borderRadius};
  padding: 0.5rem 1rem;
  border: 0;
  cursor: pointer;
`
