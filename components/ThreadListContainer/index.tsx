import { useEffect, useState, useRef } from 'react'
import { flushSync } from 'react-dom'
import { useRouter } from 'next/router'
import { MessageList } from 'components/MessageList'
import { Socket } from 'hooks/useSocket'
import type { Message as MessageType } from 'shared/types'
import { scrollToElement } from 'shared/utils'

type Props = {
  socket: Socket | null
  channel: string
}

export const ThreadListContainer: React.FC<Props> = ({ socket, channel }) => {
  const router = useRouter()
  const listRef = useRef<HTMLUListElement>(null)
  const [messages, setMessages] = useState<MessageType[]>([])

  useEffect(() => {
    if (socket === null) {
      return
    }

    socket.on('initial-thread-messages', (data) => {
      // check if there is a message for the thread
      if (!data[0]) {
        router.push(`/channels/${channel}`)
      } else {
        setMessages(data)
      }
    })

    socket.on('thread-message', (data) => {
      flushSync(() => {
        setMessages((prev) => [...prev, data])
      })

      // scroll to the last added message
      const lastMessage = listRef.current?.lastElementChild
      scrollToElement(lastMessage)
    })
  }, [socket, channel, router])

  return <MessageList ref={listRef} messages={messages} scrollDirection="top" />
}
