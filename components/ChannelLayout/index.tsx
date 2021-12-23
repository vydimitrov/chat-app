import { useEffect } from 'react'
import { Layout, Aside, Header, Main, Title, Footer } from './styles'
import { MessageForm } from '../MessageForm'
import { ChannelList } from '../ChannelList'
import { MessageList } from '../MessageList'
import { useSocket } from '../../hooks/useSocket'
import { useCurrentUser } from '../../hooks/useCurrentUser'

type Props = {
  channel: string
}

export const ChannelLayout: React.FC<Props> = ({ channel }) => {
  const [{ name, avatar }] = useCurrentUser()
  const socket = useSocket(channel)

  const handleSubmit = (message: string) => {
    socket?.emit('chat-message', { name, avatar, message })
  }

  return (
    <Layout>
      <Aside>
        <ChannelList />
      </Aside>
      <Header>
        <Title>#{channel}</Title>
      </Header>
      <Main>
        <MessageList socket={socket} />
      </Main>
      <Footer>
        <MessageForm onSubmit={handleSubmit} />
      </Footer>
    </Layout>
  )
}
