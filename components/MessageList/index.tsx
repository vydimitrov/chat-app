import { forwardRef } from 'react'
import { Message } from 'components/Message'
import type { Message as MessageType } from 'shared/types'
import type { Direction } from './types'
import { List, ListItem, Item } from './styles'

type Props = {
  messages: MessageType[]
  scrollDirection: Direction
  onMessageClick?: (messageId: string) => void
}

export const MessageList = forwardRef<HTMLUListElement, Props>(
  function MessageList({ messages, scrollDirection, onMessageClick }, ref) {
    return (
      <List scrollDirection={scrollDirection} ref={ref}>
        {messages.map(({ id, name, avatar, message, date }) => (
          <ListItem key={id}>
            <Item
              isClickable={typeof onMessageClick === 'function'}
              onClick={() => onMessageClick?.(id)}
            >
              <Message
                name={name}
                avatar={avatar}
                message={message}
                date={date}
              />
            </Item>
          </ListItem>
        ))}
      </List>
    )
  }
)
