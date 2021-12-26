import styled from 'styled-components'
import { borderRadius, darkGrey, grey } from 'shared/styles'

export const MessageOuter = styled.div`
  display: flex;
`

export const Avatar = styled.div`
  flex: 0 0 2.25rem;
  height: 2.25rem;
  border-radius: ${borderRadius};
  overflow: hidden;
  background: rgba(211, 211, 211, 0.2);
`

export const MessageInner = styled.div`
  padding-left: 0.5rem;
`

export const MessageMeta = styled.div`
  flex: 1 1 auto;
  display: flex;
  font-size: 0.75rem;
  margin-bottom: 0.1rem;
`

export const UserName = styled.strong``

export const DateTime = styled.div`
  padding-left: 0.25rem;
  color: ${darkGrey};
`

export const Text = styled.p`
  margin: 0;
`

export const ReplaysCount = styled.p`
  color: ${grey};
  margin: 0.25rem 0 0;
  font-size: 0.75rem;
`
