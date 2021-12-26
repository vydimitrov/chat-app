import { useEffect, useState } from 'react'
import { MessageForm } from 'components/MessageForm'
import { ChannelNameList } from 'components/ChannelNameList'
import { ChannelNameForm } from 'components/ChannelNameForm'
import { MessageListContainer } from 'components/MessageListContainer'
import { ThreadsArea } from 'components/ThreadsArea'
import { useSocket } from 'hooks/useSocket'
import { useCurrentUser } from 'hooks/useCurrentUser'
import {
  Layout,
  Aside,
  Header,
  Main,
  Title,
  MessagesArea,
  MessageContainerOuter,
  MessageFormOuter,
} from './styles'

type Props = {
  channel: string
}

export const ChannelLayout: React.FC<Props> = ({ channel }) => {
  const [thread, setThread] = useState<string>()
  const { user, addChannel } = useCurrentUser()
  const socket = useSocket(`channel/${channel}`)

  const handleSubmit = (body: string) => {
    const { name, avatar } = user
    socket?.emit('chat-message', { name, avatar, body })
  }

  useEffect(() => {
    // Add chanel in case a user joins a new channel
    const hasChannel = user.channels.some(
      (userChannel: string) => userChannel === channel
    )
    if (!hasChannel) {
      addChannel(channel)
    }
  }, [user, channel, addChannel])

  useEffect(() => {
    // close thread when switching between channels
    setThread(undefined)
  }, [channel])

  return (
    <Layout>
      <Aside>
        <ChannelNameList activeChannel={channel} />
        <ChannelNameForm />
      </Aside>
      <Header>
        <Title>#{channel}</Title>
      </Header>
      <Main>
        <MessagesArea isThreadOpen={Boolean(thread)}>
          <MessageContainerOuter>
            <MessageListContainer socket={socket} onMessageClick={setThread} />
          </MessageContainerOuter>
          <MessageFormOuter>
            <MessageForm onSubmit={handleSubmit} />
          </MessageFormOuter>
        </MessagesArea>
        {thread && (
          <ThreadsArea
            thread={thread}
            channel={channel}
            onClose={() => setThread(undefined)}
          />
        )}
      </Main>
    </Layout>
  )
}
