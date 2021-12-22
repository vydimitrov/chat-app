import styled from 'styled-components'
import { primaryColor, getBorder } from '../../shared/styles'

export const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'aside header'
    'aside main'
    'aside footer';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 220px 1fr;
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
`
export const Header = styled.header`
  grid-area: header;
  border-bottom: ${getBorder()};
  padding: 1rem;
`

export const Main = styled.main`
  grid-area: main;
  padding: 1rem;
`
export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;
  color: ${primaryColor};
`

export const Footer = styled.footer`
  grid-area: footer;
  padding: 0 1rem 1rem;
`
