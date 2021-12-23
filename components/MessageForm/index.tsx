import { useState } from 'react'
import { FormInner, Input, SendButton } from './styles'
import { Send } from '../../icons/Send'
import { primaryColor } from '../../shared/styles'

type Props = {
  onSubmit: (value: string) => void
}

export const MessageForm: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
      }}
    >
      <FormInner>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <SendButton type="submit">
          <Send color={primaryColor} />
        </SendButton>
      </FormInner>
    </form>
  )
}
