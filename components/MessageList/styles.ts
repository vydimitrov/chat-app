import styled from 'styled-components'
import { transitionTime, lightGrey } from 'shared/styles'
import type { Direction } from './types'

type ListProps = {
  scrollDirection: Direction
}

type ItemProps = {
  isClickable: boolean
}

export const List = styled.ul<ListProps>`
  display: flex;
  flex-direction: ${({ scrollDirection }) =>
    scrollDirection === 'bottom' ? 'column-reverse' : 'column'};
`

export const ListItem = styled.li`
  margin-top: 0.5rem;
`

export const Item = styled.div<ItemProps>`
  padding: 0.5rem 1rem;
  background-color: #fff;
  transition: background-color ${transitionTime};
  padding: 0.5rem 1rem;
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};

  &:hover {
    background-color: ${({ isClickable }) =>
      isClickable ? lightGrey : '#fff'};
  }
`
