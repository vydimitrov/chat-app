import styled from 'styled-components'
import {
  getBorder,
  borderRadius,
  darkGrey,
  grey,
  primaryColor,
  transitionTime,
} from '../../shared/styles'

export const InputElement = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: ${getBorder()};
  border-radius: ${borderRadius};
  outline: none;
  transition: border ${transitionTime};

  &:hover,
  &:focus {
    border: ${getBorder(primaryColor)};
  }

  ::placeholder {
    color: ${grey};
  }
`

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
`

export const LabelText = styled.div`
  color: ${darkGrey};
  margin-bottom: 0.25rem;
`
