import styled from 'styled-components'
import {
  primaryColor,
  getBorder,
  borderRadius,
  transitionTime,
} from '../../shared/styles'

export const FormInner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  border: ${getBorder()};
  border-radius: ${borderRadius};
  transition: border ${transitionTime};

  &:hover,
  &:focus {
    border: ${getBorder(primaryColor)};
  }
`

export const Input = styled.div`
  width: 100%;
  min-height: 4rem;
  padding: 0.5rem 3rem 0.5rem 0.5rem;
  outline: none;
`

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  border: 0;
  background: transparent;
  cursor: pointer;
`
