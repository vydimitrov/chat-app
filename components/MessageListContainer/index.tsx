import { useEffect, useState, useRef } from 'react'
import { flushSync } from 'react-dom'
import { MessageList } from 'components/MessageList'
import { Socket } from 'hooks/useSocket'
import type { Message as MessageType } from 'shared/types'
import { scrollToElement } from 'shared/utils'

type Props = {
  socket: Socket | null
  onMessageClick: (messageId: string) => void
}

export const MessageListContainer: React.FC<Props> = ({
  socket,
  onMessageClick,
}) => {
  const listRef = useRef<HTMLUListElement>(null)
  const [messages, setMessages] = useState<MessageType[]>([])

  useEffect(() => {
    if (socket === null) {
      return
    }

    socket.on('initial-messages', (data) => {
      setMessages(data)
    })

    socket.on('chat-message-updated', (data) => {
      setMessages((prevMessages) => {
        const nextMessages = [...prevMessages]
        const index = prevMessages.findIndex((msg) => msg.id === data.id)
        // replace a message with the new one
        nextMessages.splice(index, 1, data)
        return nextMessages
      })
    })

    socket.on('chat-message', (data) => {
      flushSync(() => {
        setMessages((prev) => [data, ...prev])
      })

      // scroll to the newest added message
      const lastMessage = listRef.current?.firstElementChild
      scrollToElement(lastMessage)
    })
  }, [socket])

  return (
    <MessageList
      ref={listRef}
      messages={messages}
      scrollDirection="bottom"
      onMessageClick={onMessageClick}
      isRepliesVisible
    />
  )
}
