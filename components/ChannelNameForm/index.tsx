import { useState } from 'react'
import { useRouter } from 'next/router'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { useCurrentUser } from 'hooks/useCurrentUser'
import { modifyChannelName } from 'shared/utils'
import { InputWrapper } from './styles'

export const ChannelNameForm = () => {
  const router = useRouter()
  const { addChannel } = useCurrentUser()
  const [channelName, setChannelName] = useState<string>('')

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (channelName) {
      addChannel(channelName)
      setChannelName('')
      router.push(`/channels/${channelName}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          required
          value={channelName}
          placeholder="Add channel name"
          onChange={(value) => setChannelName(modifyChannelName(value))}
        />
      </InputWrapper>
      <Button variant="secondary">Create Channel</Button>
    </form>
  )
}
