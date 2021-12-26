import Image from 'next/image'
import type { Message as MessageType } from 'shared/types'
import {
  MessageOuter,
  MessageInner,
  Avatar,
  MessageMeta,
  UserName,
  DateTime,
  Text,
  ReplaysCount,
} from './styles'

type Props = {
  message: MessageType
  isReplaysVisible?: boolean
}

export const Message: React.FC<Props> = ({ message, isReplaysVisible }) => {
  const { avatar, name, body, date, replyCount } = message

  return (
    <MessageOuter>
      <Avatar>
        <Image
          src={`/${avatar}`}
          alt={`${name} Avatar`}
          width={36}
          height={36}
        />
      </Avatar>
      <MessageInner>
        <MessageMeta>
          <UserName>{name}</UserName>
          <DateTime>{new Date(date).toLocaleString()}</DateTime>
        </MessageMeta>
        <Text>{body}</Text>
        {isReplaysVisible && (
          <ReplaysCount>
            {replyCount} {replyCount === 1 ? 'reply' : 'replies'}
          </ReplaysCount>
        )}
      </MessageInner>
    </MessageOuter>
  )
}
