import Image from 'next/image'
import { MessageOuter, MessageInner, Avatar, MessageMeta, UserName, DateTime, Text } from './styles'

type Props = {
  userName: string;
  userAvatar: string;
  date: string;
  message: string;
}

export const Message: React.FC<Props> = ({ userName, userAvatar, date, message }) => {
  return (
    <MessageOuter>
      <Avatar>
        <Image
          src={`/${userAvatar}`}
          alt={`${userName} Avatar`}
          width={36}
          height={36}
        />
      </Avatar>
      <MessageInner>
        <MessageMeta>
          <UserName>{userName}</UserName>
          <DateTime>{new Date(date).toLocaleString()}</DateTime>
        </MessageMeta>
        <Text>{message}</Text>
      </MessageInner>
    </MessageOuter>
  )
}