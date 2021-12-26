import styled from 'styled-components'
import { primaryColor, getBorder, transitionTime } from 'shared/styles'

type Props = {
  isThreadOpen: boolean
}

export const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'aside header'
    'aside main';
  grid-template-rows: auto 1fr;
  grid-template-columns: 260px 1fr;
  grid-row-gap: 0;
  grid-column-gap: 0;
  height: 100vh;
  width: 100%;
`

export const Aside = styled.aside`
  grid-area: aside;
  background: #4b4e53;
  color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
export const Header = styled.header`
  grid-area: header;
  border-bottom: ${getBorder()};
  padding: 1rem;
`

export const Main = styled.main`
  grid-area: main;
  display: flex;
  height: 100%;
  overflow: hidden;
`

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;
  color: ${primaryColor};
`

export const MessagesArea = styled.div<Props>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${({ isThreadOpen }) =>
    isThreadOpen ? 'calc(100% - 300px)' : '100%'};
  transition: width ${transitionTime};
  border-right: ${({ isThreadOpen }) =>
    isThreadOpen ? '1px solid #ccc' : '0'};
`

export const MessageContainerOuter = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
`

export const MessageFormOuter = styled.div`
  flex: 0 0 auto;
  padding: 0.5rem 1rem 1rem;
`
