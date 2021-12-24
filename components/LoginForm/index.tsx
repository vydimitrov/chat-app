import { useState } from 'react'
import { useRouter } from 'next/router'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Label } from 'components/Label'
import { AvatarPicker } from 'components/AvatarPicker'
import type { Avatar } from 'shared/types'
import { avatars } from 'shared/const'
import { modifyChannelName } from 'shared/utils'
import { useCurrentUser } from 'hooks/useCurrentUser'
import { LoginOuter, InputsWrapper } from './styles'

export const LoginForm = () => {
  const router = useRouter()
  const { setCurrentUser } = useCurrentUser()
  const [channelName, setChannelName] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [avatar, setAvatar] = useState<Avatar>(avatars[0])

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (name && avatar && channelName) {
      setCurrentUser({ name, avatar, channels: [channelName] })
      router.push(`/channels/${channelName}`)
    }
  }

  return (
    <LoginOuter>
      <form onSubmit={handleSubmit}>
        <InputsWrapper>
          <Label label="User name">
            <Input
              value={name}
              onChange={setName}
              placeholder="Add user name"
              required
            />
          </Label>
          <Label label="Channel name">
            <Input
              value={channelName}
              placeholder="Create or join channel name"
              required
              onChange={(value) => setChannelName(modifyChannelName(value))}
            />
          </Label>
          <Label label="Avatar">
            <AvatarPicker value={avatar} onSelect={setAvatar} />
          </Label>
        </InputsWrapper>
        <Button>Join Channel</Button>
      </form>
    </LoginOuter>
  )
}
