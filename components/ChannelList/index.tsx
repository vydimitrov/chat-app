import Link from 'next/link'
import { Title, List, ListItem, ItemLink } from './styles'

export const ChannelList = () => {
  return (
    <>
      <Title># Channels</Title>
      <List>
        <ListItem>
          <Link href="/channels/marketing" passHref>
            <ItemLink>marketing</ItemLink>
          </Link>
        </ListItem>
      </List>
    </>
  )
}