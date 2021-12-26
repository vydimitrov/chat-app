import styled from 'styled-components'

export const AreaOuter = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  height: 100%;
`

export const Heading = styled.h3`
  padding: 1rem;
  margin: 0;
`

export const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  cursor: pointer;
`

export const Messages = styled.div`
  flex: 1 1 auto;
  overflow: auto;
`

export const MessageFormOuter = styled.div`
  flex: 0 0 auto;
  padding: 1rem;
`
