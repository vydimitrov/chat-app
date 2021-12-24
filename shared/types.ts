export type Avatar =
  | 'avatar-1.png'
  | 'avatar-2.png'
  | 'avatar-3.png'
  | 'avatar-4.png'

export type User = {
  name: string
  avatar: Avatar
  channels: string[]
}

export type MessageType = {
  id: number
  name: string
  avatar: Avatar
  message: string
  date: string
}
