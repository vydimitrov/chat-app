import { List, ListItem } from './styles'
import { Message } from '../Message'

export const MessageList = () => {
  return (
    <List>
      <ListItem>
        <Message
          userName="Vasil Dimitrov"
          userAvatar="avatar-3.png"
          message="hello"
          date={new Date().toISOString()}
        />
      </ListItem>
      <ListItem>
        <Message
          userName="Boryana Dimitrova"
          userAvatar="avatar-1.png"
          message="I want to do it"
          date={new Date().toISOString()}
        />
      </ListItem>
    </List>
  )
}
