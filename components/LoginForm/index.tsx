import { useState } from 'react'
import { useRouter } from 'next/router'
import { Input } from '../Input'
import { Button } from '../Button'
import { Label } from '../Label'
import { AvatarPicker } from '../AvatarPicker'
import type { Avatar } from '../../types'
import { avatars } from '../../shared/const'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import { LoginOuter, InputsWrapper } from './styles'

export const LoginForm = () => {
  const router = useRouter()
  const [, setCurrentUser] = useCurrentUser()
  const [channelName, setChannelName] = useState<string>()
  const [userName, setUserName] = useState<string>()
  const [avatar, setAvatar] = useState<Avatar>(avatars[0])

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (userName && avatar && channelName) {
      setCurrentUser({ userName, avatar, channels: [channelName] })
      router.push(`/channels/${channelName}`)
    }
  }

  return (
    <LoginOuter>
      <form onSubmit={handleSubmit}>
        <InputsWrapper>
          <Label label="Channel name">
            <Input
              value={channelName}
              placeholder="Create or join channel name"
              required
              onChange={(value) => setChannelName(value.replace(' ', '-'))}
            />
          </Label>
          <Label label="User name">
            <Input
              value={userName}
              onChange={setUserName}
              placeholder="Add user name"
              required
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
