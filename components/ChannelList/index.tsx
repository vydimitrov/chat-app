import Link from 'next/link'
import { Title, List, ListItem, ItemLink } from './styles'

export const ChannelList = () => {
  return (
    <>
      <Title>Channels</Title>
      <List>
        <ListItem>
          <Link href="/channels/marketing" passHref>
            <ItemLink>#marketing</ItemLink>
          </Link>
          <Link href="/channels/programming" passHref>
            <ItemLink>#programming</ItemLink>
          </Link>
        </ListItem>
      </List>
    </>
  )
}
