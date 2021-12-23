import Link from 'next/link'
import { Title, ItemLink } from './styles'

export const ChannelList = () => {
  return (
    <>
      <Title>Channels</Title>
      <ul>
        <li>
          <Link href="/channels/marketing" passHref>
            <ItemLink>#marketing</ItemLink>
          </Link>
          <Link href="/channels/programming" passHref>
            <ItemLink>#programming</ItemLink>
          </Link>
        </li>
      </ul>
    </>
  )
}
