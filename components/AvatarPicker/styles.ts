import styled from 'styled-components'
import { borderRadius, getBorder, primaryColor } from '../../shared/styles'

type AvatarProps = {
  isSelected: boolean
}

export const AvatarItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

export const AvatarWrapper = styled.div<AvatarProps>`
  width: 38px;
  height: 38px;
  border: ${({ isSelected }) =>
    getBorder(isSelected ? primaryColor : undefined)};
  border-radius: ${borderRadius};
  cursor: pointer;
`
