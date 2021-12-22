import { FormInner, Input, SendButton } from './styles'
import { Send } from '../../icons/Send'
import { primaryColor } from '../../shared/styles'

export const MessageForm: React.FC = () => {
  return (
    <form>
      <FormInner>
        <Input contentEditable />
        <SendButton type="submit">
          <Send color={primaryColor} />
        </SendButton>
      </FormInner>
    </form>
  )
}