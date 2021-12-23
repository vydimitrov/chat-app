export type Avatar =
  | 'avatar-1.png'
  | 'avatar-2.png'
  | 'avatar-3.png'
  | 'avatar-4.png'

export type User = {
  userName: string
  avatar: Avatar
  channels: string[]
}
