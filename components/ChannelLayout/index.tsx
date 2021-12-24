import { useEffect } from 'react'
import { MessageForm } from 'components/MessageForm'
import { ChannelList } from 'components/ChannelList'
import { ChannelNameForm } from 'components/ChannelNameForm'
import { MessageList } from 'components/MessageList'
import { useSocket } from 'hooks/useSocket'
import { useCurrentUser } from 'hooks/useCurrentUser'
import { Layout, Aside, Header, Main, Title, Footer } from './styles'

type Props = {
  channel: string
}

export const ChannelLayout: React.FC<Props> = ({ channel }) => {
  const { user, addChannel } = useCurrentUser()
  const socket = useSocket(channel)

  const handleSubmit = (message: string) => {
    const { name, avatar } = user
    socket?.emit('chat-message', { name, avatar, message })
  }

  useEffect(() => {
    // Add chanel in case a user joins a new channel
    const hasChannel = user.channels.some(
      (userChannel) => userChannel === channel
    )
    if (!hasChannel) {
      addChannel(channel)
    }
  }, [user, channel, addChannel])

  return (
    <Layout>
      <Aside>
        <ChannelList activeChannel={channel} />
        <ChannelNameForm />
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
