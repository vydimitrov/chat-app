import { useRouter } from 'next/router'
import { ThreadListContainer } from 'components/ThreadListContainer'
import { MessageForm } from 'components/MessageForm'
import { useSocket } from 'hooks/useSocket'
import { useCurrentUser } from 'hooks/useCurrentUser'
import { Close } from 'icons/Close'
import { grey } from 'shared/styles'
import {
  AreaOuter,
  Heading,
  CloseIcon,
  Messages,
  MessageFormOuter,
} from './styles'

type Props = {
  thread: string
  channel: string
}

export const ThreadsArea: React.FC<Props> = ({ thread, channel }) => {
  const router = useRouter()
  const { user } = useCurrentUser()
  const socket = useSocket(`thread/${thread}`)

  const handleSubmit = (body: string) => {
    const { name, avatar } = user
    socket?.emit('thread-message', { name, avatar, body })
  }

  return (
    <AreaOuter>
      <CloseIcon onClick={() => router.push(`/channels/${channel}`)}>
        <Close color={grey} />
      </CloseIcon>
      <Heading>Thread</Heading>
      <Messages>
        <ThreadListContainer socket={socket} channel={channel} />
      </Messages>
      <MessageFormOuter>
        <MessageForm onSubmit={handleSubmit} />
      </MessageFormOuter>
    </AreaOuter>
  )
}
