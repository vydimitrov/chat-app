import Link from 'next/link'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { Title, ItemLink } from './styles'

type Props = {
  activeChannel: string
}

export const ChannelList: React.FC<Props> = ({ activeChannel }) => {
  const { user } = useCurrentUser()

  return (
    <div>
      <Title>Channels</Title>
      <ul>
        {user?.channels.map((channel) => (
          <li key={channel}>
            <Link href={`/channels/${channel}`} passHref>
              <ItemLink isSelected={activeChannel === channel}>
                #{channel}
              </ItemLink>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
