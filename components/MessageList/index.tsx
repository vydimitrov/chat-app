import { useEffect, useState, useRef } from 'react'
import { flushSync } from 'react-dom'
import { Message } from 'components/Message'
import { Socket } from 'hooks/useSocket'
import type { MessageType } from 'shared/types'
import { List, ListItem, ListOuter } from './styles'

type Props = {
  socket: Socket | null
}

export const MessageList: React.FC<Props> = ({ socket }) => {
  const listRef = useRef<HTMLUListElement>(null)
  const [messages, setMessages] = useState<MessageType[]>([])

  useEffect(() => {
    socket?.on('initial-messages', (data) => {
      setMessages(data)
    })

    socket?.on('chat-message', (data) => {
      flushSync(() => {
        setMessages((prev) => [data, ...prev])
      })

      // scroll to the newest added message
      const lastMessage = listRef.current?.firstElementChild
      lastMessage?.scrollIntoView({
        block: 'end',
        inline: 'nearest',
        behavior: 'smooth',
      })
    })
  }, [socket])

  return (
    <ListOuter>
      <List ref={listRef}>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <Message
              name={message.name}
              avatar={message.avatar}
              message={message.message}
              date={message.date}
            />
          </ListItem>
        ))}
      </List>
    </ListOuter>
  )
}
