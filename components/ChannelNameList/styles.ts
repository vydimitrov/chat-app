import styled from 'styled-components'
import { secondaryColor, transitionTime } from 'shared/styles'

type ItemLinkProps = {
  isSelected: boolean
}

export const Title = styled.h2`
  font-size: 1rem;
  margin: 0.3rem 0 0.25rem;
`

export const ItemLink = styled.a<ItemLinkProps>`
  display: block;
  padding: 0.25rem 0;
  font-size: 0.9rem;
  color: ${({ isSelected }) => (isSelected ? secondaryColor : 'white')};
  transition: color ${transitionTime};
`
