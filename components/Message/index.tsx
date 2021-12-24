import Image from 'next/image'
import {
  MessageOuter,
  MessageInner,
  Avatar,
  MessageMeta,
  UserName,
  DateTime,
  Text,
} from './styles'

type Props = {
  name: string
  avatar: string
  date: string
  message: string
}

export const Message: React.FC<Props> = ({ name, avatar, date, message }) => {
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
        <Text>{message}</Text>
      </MessageInner>
    </MessageOuter>
  )
}
