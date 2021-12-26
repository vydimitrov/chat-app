import { forwardRef } from 'react'
import { Message } from 'components/Message'
import type { Message as MessageType } from 'shared/types'
import type { Direction } from './types'
import { List, ListItem, Item } from './styles'

type Props = {
  messages: MessageType[]
  scrollDirection: Direction
  onMessageClick?: (messageId: string) => void
  isReplaysVisible?: boolean
}

export const MessageList = forwardRef<HTMLUListElement, Props>(
  function MessageList(
    { messages, scrollDirection, onMessageClick, isReplaysVisible },
    ref
  ) {
    return (
      <List scrollDirection={scrollDirection} ref={ref}>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <Item
              isClickable={typeof onMessageClick === 'function'}
              onClick={() => onMessageClick?.(message.id)}
            >
              <Message message={message} isReplaysVisible={isReplaysVisible} />
            </Item>
          </ListItem>
        ))}
      </List>
    )
  }
)
