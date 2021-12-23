import Image from 'next/image'
import type { Avatar } from '../../types'
import { avatars } from '../../shared/const'
import { AvatarItem, AvatarWrapper } from './styles'

type Props = {
  value: Avatar
  onSelect: (avatar: Avatar) => void
}

export const AvatarPicker: React.FC<Props> = ({ value, onSelect }) => {
  return (
    <ul>
      {avatars.map((avatar) => (
        <AvatarItem key={avatar}>
          <AvatarWrapper
            isSelected={value === avatar}
            onClick={() => onSelect(avatar)}
          >
            <Image
              src={`/${avatar}`}
              alt={`Avatar - ${avatar}`}
              width={36}
              height={36}
            />
          </AvatarWrapper>
        </AvatarItem>
      ))}
    </ul>
  )
}
